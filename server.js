var http =require('http');
var adr = require('url');
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://demouser:jXJI9IZj9T0NtqvB@democlusterwittich-d4afp.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//Uses Heroku port or local
const PORT = process.env.PORT || 5000
client.connect(function(error){
	if (error) throw error;
	})

//Creates the HTTP server to handle requests
http.createServer(function (req, res){
	//Allows CORS
	res.writeHead(200, {'Content-Type':'text/html', "Access-Control-Allow-Origin": "*"});
	var qobj = adr.parse(req.url, true).query;
	clicked_word = qobj.word;
	num = parseInt(qobj.num);
	const collection = client.db("TEST").collection("wordcount");

	//Tests query
	if( !isNaN(num) ){
	 	get_max_clicks(collection, res, num);
	 }
	
	//Add clicks based on word queried
	if(typeof clicked_word !== "undefined"){
		add_click(collection, res, clicked_word)
	}
}).listen(PORT)

//Responds with JSON object of top clickd words in descending order
function get_max_clicks(collection, res, num){
	collection.find({},{sort: {clicks: -1}, limit: num}).toArray(function(err, result){
		if (err) throw err;
		res.write(JSON. stringify(result))
		res.end();
	});
}

//Updated DB by adding word with one click or incrementing clicks on word
function add_click(collection, res, clicked_word){
  res.write("Word is " + clicked_word);
  var exists;
  collection.find({word: clicked_word}).count( function(err, result){
	if (err) throw err;
	exists = result;
	res.write("Exists is" + exists)
	if (exists){
		collection.updateOne(
		{ word: clicked_word },
		{ $inc: {clicks: 1} }
		, function(e){
			if (e) throw e;
			res.write(" Incremented")
			res.end();
		}) 
	}
	else{
		collection.insertOne( { word: clicked_word, clicks: 1 }, function(e){
	  		if (e) throw e;
	  		res.write(" Added")
	  		res.end();
  	});
  	
	}
	})
}
wordArray=["hello", "hello", "hello", "trump",  "trump"]
function wordCount(wordArray) {
	var count={}
	length = wordArray.length
	for (i=0; i<length; i++){
		word = wordArray[i];
		if (count[word]){
			count[word]+=1
		}
		else{
			count[word]=1
		}

	}
	console.log(count);
	return count
}

function createData(count){
	var data = []
	i = 0
	for (key in count){
		i++
		i = i % 4
		item = {"x":key, "value":count[key], "category" : i}
		data.push(item)
	} 
	return data;
}

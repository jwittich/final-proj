module.exports = {

	ParseHeadline: function(headline) {

		var stopWords = ['i', 'me', 'my', 'myself', 'we', 'us', 'our', 'ours', 'ourselves', 'you', 'your', 'yours',
        'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself',
        'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'whose', 'this', 'that', 'these',
        'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does',
        'did', 'doing', 'will', 'would', 'should', 'can', 'could', 'ought', 'im', 'youre', 'hes', 'shes', 'its',
        'were', 'theyre', 'ive', 'youve', 'weve', 'theyve', 'id', 'youd', 'hed', 'shed', 'wed',
        'theyd', 'ill', 'youll', 'hell', 'shell', 'well', 'theyll', 'isnt', 'arent', 'wasnt',
        'werent', 'hasnt', 'havent', 'hadnt', 'doesnt', 'dont', 'didnt', 'wont', 'wouldnt', 'shant',
        'shouldnt', 'cant', 'cannot', 'couldnt', 'mustnt', 'lets', 'thats', 'whos', 'whats', 'heres',
        'theres', 'whens', 'wheres', 'whys', 'hows', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as',
        'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during',
        'before', 'after', 'above', 'below', 'to', 'from', 'up', 'upon', 'down', 'in', 'out', 'on', 'off', 'over', 'under',
        'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each',
        'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too',
        'very', 'say', 'says', 'said', 'shall'];


		headline = headline.toLowerCase();
		headline = headline.replace(/[.,'\/#!$%\^&\*;:{}="’‘”“\_`~()]/g,"");
		const headlineNoPunc = headline.replace(/\s{2,}/g," ");
		let firstPart = headlineNoPunc.split("-");
		let fullFirst = "";
		for (let i = 0; i < firstPart.length - 1; i++) {
			fullFirst += firstPart[i]
		}
		fullFirst = fullFirst.split(" ")
		let finalWords = [];
		let iterator = 0;
		for (let i = 0; i < fullFirst.length; i++) {
			let add = true;
			for (let j = 0; j < stopWords.length; j++) {
				if (fullFirst[i] === stopWords[j]) {
					add = false;
					break;
				}
			}
			if (add) {
				finalWords[iterator] = fullFirst[i];
				iterator++;
			}
		}
		return finalWords;
	}
}

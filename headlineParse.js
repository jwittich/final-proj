/*Takes a headline, removes punctuation, retuns headline array */
	function ParseHeadline() {
		let headline = "This, is' a headline! - test";
		headline = headline.toLowerCase();
		const firstPart = headline.split("-")[0];
		const headlineNoPunc = firstPart.replace(/[.,'\/#!$%\^&\*;:{}=\-_`~()]/g,"");
		const finalheadline = headlineNoPunc.replace(/\s{2,}/g," ");
		const headlineArray = finalheadline.split(" ");
		return headlineArray;
	}


// ClozeCard constructor function accepts two arguments: text and cloze
// for creating cloze-deletion flashcards
// text: the entire sentence e.g. "George Washington was the first president of the United States."
// cloze: text chosen to remove e.g. "George Washington".
function ClozeCard(text, cloze){
	if((text && cloze) === false) {
		throw ('ClozeCard Error: both the full text and the cloze-deleted portion are required');
	}

	if(text.includes(cloze) === false) {
		//throw an error when the cloze deletion does not appear in the input text
		//and not to set anything
		throw ('ClozeCard Error: "' + cloze + '" does not appear in "' + text + '"');
	} 

	//property that contains only the full text
	this.fullText = text;

	//property that contains only the cloze-deleted portion of the text
	this.cloze = cloze;

	//property that contains the text after the cloze-deleted portion been removed
	this.partial = '';

	//method to set the partial 
	this.setPartialText = function (){
		//replace all occurrences of the cloze-deleted portion of the text with '...'
		var re = new RegExp(this.cloze, 'gi');
		this.partial = this.fullText.replace(re, "...");
	}

	//set partial property
	this.setPartialText();
}

ClozeCard.prototype.printCard = function() {
    console.log("FullText: " + this.fullText); 
	console.log("Cloze: " + this.cloze); 
	console.log("Partial: " + this.partial); 
};

// Export the ClozeCard constructor as a Node module
module.exports = ClozeCard;
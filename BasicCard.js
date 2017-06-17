// BasicCard constructor function accepts two arguments: front and back 
// to create basic flashcards
function BasicCard(front, back){
	if (!(this instanceof BasicCard)){
        return new BasicCard(front, back);
   	}
	//property that contains the text on the front of the card
	this.front = front;

	//property that contains the text on the back of the card
	this.back = back;
}

BasicCard.prototype.printCard = function() {
    console.log("Front: " + this.front); 
	console.log("Back: " + this.back); 
};

// Export the BasicCard constructor as a Node module
module.exports = BasicCard;
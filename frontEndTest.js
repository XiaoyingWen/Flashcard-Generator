var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

console.log("Test: creating BasicCard object with new keyword:"); 
var testQ = "Who was the first president of the United States?";
var testA = "George Washington";
console.log("arguments: " + testQ + " , " + testA
			+ "\n------------------------------------------------");
var firstPresident = new BasicCard(testQ, testA);
firstPresident.printCard();
console.log('\n');

console.log("Test: call BasicCard without new keyword"); 
var testQ2 = "What is the keyword to use to create Javascript object?";
var testA2 = "new";
console.log("arguments: " + testQ2 + " , " + testA2
			+ "\n------------------------------------------------"); 
var secondBasicCard = BasicCard(testQ2, testA2);
secondBasicCard.printCard(); 
console.log('\n');

console.log("Test: create ClozeCard object with new keyword:"); 
var testQ3 = "George Washington was the first president of the United States.";
var testA3 = "George Washington";
console.log("arguments: " + testQ3 + " , " + testA3
			+ "\n------------------------------------------------"); 
var firstPresidentCloze = new ClozeCard(testQ3, testA3);
firstPresidentCloze.printCard();
console.log('\n');

console.log("Test: modify ClozeCard object and call the object method"); 
var testQ4 = "I like blue sky.";
var testA4 = "blue";
console.log("arguments: " + testQ4 + " , " + testA4
			+ "\n------------------------------------------------"); 
firstPresidentCloze.fullText = testQ4;
firstPresidentCloze.cloze = testA4;
firstPresidentCloze.setPartialText();
firstPresidentCloze.printCard();
console.log('\n');


console.log("Test: ClozeCard constructor validates arguments"); 
var testQ5 = "This doesn't work.";
var testA5 = "oops";
console.log("arguments: " + testQ5 + " , " + testA5
			+ "\n------------------------------------------------"); 
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard(testQ5, testA5);
console.log('--------------------Test Completed------------------\n');
// variables 
// array of fighters
var incorrectGuessesRemaining = 10;
document.querySelector("#incorrectGuessesRemainingId").innerHTML = "<p>" + incorrectGuessesRemaining + "</p>";
var hangmanMMAFightersArray = ["conormcgregor", "andersonsilva", "khabibnurmagomedov"];
var fighterNumber = [Math.floor(Math.random() * hangmanMMAFightersArray.length)];
//splits word in array for userGuess check, should use lower case 
// var hangmanMMAFightersArrayBlanks = hangmanMMAFightersArray[1].split("");

// vars and innerHTML for wins
var wins = 0;
document.querySelector("#winsId").innerHTML = "<p>" + wins + "</p>";

// vars and innerHTML for losses
var losses = 0;
document.querySelector("#lossesId").innerHTML = "<p>" + losses + "</p>";

// loss

if (incorrectGuessesRemaining == 0) {
	losses++;
	resetFunc();
};
// win where if the letters that replaced blank lines is equal to the fighter
// if (remainingCorrectLetters == 0) {
// 	wins++;
// 	resetFunc();
// };
// to make # of blanks
var blankLinesArray = [];
for (i = 0; i < hangmanMMAFightersArray[fighterNumber].length; i++) {
	blankLinesArray[i]="_";
};
var remainingCorrectLetters = hangmanMMAFightersArray[fighterNumber].length;

// array for lettersGuessedId
var incorrectLettersGuessedArray = [];

// hangman game
document.onkeyup = function(event) {

	var userGuess = event.key;
	debugger;
	document.querySelector("#blankLinesId").innerHTML = blankLinesArray.join(" ");
	if (remainingCorrectLetters > 0) {
		debugger;
	    	 // Update the game state with the userGuess

	        for (var j = 0; j < hangmanMMAFightersArray[fighterNumber].length; j++) {
	        	debugger;
	            if (hangmanMMAFightersArray[fighterNumber][j] === userGuess.toLowerCase()) {
	            	debugger;
		            blankLinesArray[j] = userGuess;

		            remainingCorrectLetters--;
	            
	            }	 
	    	} incorrectLettersGuessedArray.push(userGuess);
	    	
  	      	
		
	}
	
	wins++;
	resetFunc();
		
}		
// var hangmanMMAFightersArrayLowerCase = hangmanMMAFightersArray.toLowerCase();								

// func to reset game after loss or win
function resetFunc() {

	// vars and innerHTML for incorrectGuessesRemaining
	incorrectGuessesRemaining = 10;
	document.querySelector("#incorrectGuessesRemainingId").innerHTML = "<p>" + incorrectGuessesRemaining + "</p>";

	// vars and innerHTML for letters guessed
	var lettersGuessed = 0;
	document.querySelector("#lettersGuessedId").innerHTML = "<p>" + lettersGuessed + "</p>";
	
	// var, innerHTML, and func to determing # of blankLines based on fighterNumber
	var fighterNumber = [Math.floor(Math.random() * hangmanMMAFightersArray.length)];
	// blankLines = function blankLinesFunc() {
	// 			// var and func for determing fighterNumber
	// 			return "_ ".repeat(hangmanMMAFightersArray[0].length);
	// 			};			
	// function blankLinesVar = blankLines.charAt();			
	// document.querySelector("#blankLinesId").innerHTML = "<p>" + blankLines() + "</p>";
}

// func is run whenever the user presses a key, used to match user input, incorrectGuessesRemaining, lettersGuessed
// document.onkeyup = function(event) {

//     // Determines which key was pressed.
//     var userGuess = event.key;
//     // func for matching user input with hangmanMMAFightersArray
// 	for (i = 0; i < hangmanMMAFightersArray[0].length; i++) {
		
// 		if (userGuess.toLowerCase() == hangmanMMAFightersArray[0][i]) {
// 			// hangmanMMAFightersArray[0][i];
// 			// set a loop where every time userGuess == hangmanMMAFightersArray[fighter][i],
// 			// input html for those positions in id="blankLines"
// 			blankLinesVar(i) = userGuess;
// 		}	
// 	}   
// 	// if userGuess is wrong, incorrectGuessesRemaining - 1 and input lettersGuessed as userGuess
// 	incorrectGuessesRemaining--;
// 	// document.querySelector(#lettersGuessedId).innerHTML = "<p>" + userGuess + "-</p";
// };




// else {
//   	    	document.querySelector("#NaNInputId").innerHTML = ("Please type letters, not numbers/symbols"); 

// if (isNaN(userGuess)) {  	    	

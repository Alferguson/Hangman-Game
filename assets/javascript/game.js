// variables 

// array of fighters
var hangmanMMAFightersArray = ["ConorMcGregor", 
								"AndersonSilva", "KhabibNurmagomedov", "DanielCormier", "DemetriousJohnson", "JimiManuwa"];

// vars and innerHTML for wins
var wins = 0;
document.querySelector("#winsId").innerHTML = "<p>" + wins + "</p>";

// vars and innerHTML for losses
var losses = 0;
document.querySelector("#lossesId").innerHTML = "<p>" + losses + "</p>";

// vars and innerHTML for incorrectGuessesRemaining
var incorrectGuessesRemaining = 10;
document.querySelector("#incorrectGuessesRemainingId").innerHTML = "<p>" + incorrectGuessesRemaining + "</p>";

// vars and innerHTML for letters guessed
var lettersGuessed = 0;
document.querySelector("#lettersGuessedId").innerHTML = "<p>" + lettersGuessed + "</p>";

// var, innerHTML, and func to determing # of blankLines based on fighterNumber
var blankLines = function blankLinesFunc() {
					"_ ".repeat(hangmanMMAFightersArray[fighterNumber].length);
					}
document.querySelector("#blankLinesId").innerHTML = "<p>" + blankLines + "</p>";

// var and func for determing fighterNumber
var fighterNumber = [Math.floor(Math.random() * hangmanMMAFightersArray.length)];
	
// FUNCTIONS

// func is run whenever the user presses a key, used to match user input, incorrectGuessesRemaining, lettersGuessed
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    // func for matching user input with hangmanMMAFightersArray
	for (i = 0; i < hangmanMMAFightersArray[fighter].length; i++) {
		if (userGuess == hangmanMMAFightersArray[fighter][i]) {
			// set a loop where every time userGuess == hangmanMMAFightersArray[fighter][i],
			// input html for those positions in id="blankLines"
			blankLines = userGuess;
		// if userGuess is wrong, incorrectGuessesRemaining - 1 and input lettersGuessed as userGuess
		} else {
			lettersGuessed = userGuess;
			incorrectGuessesRemaining--;
		}
	}   
}

// func for making blank lines and spaces for fighter's name
var blankLines = function blankLinesFunc() {
	"_ ".repeat(hangmanMMAFightersArray[fighter].length);
	// enter result into id blankLines html
}



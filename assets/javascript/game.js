// variables 
var hangmanAnimation = "";
var wins = 0;
var losses = 0;
var incorrectGuessesRemaining = 10;
var lettersGuessed = 0;
var hangmanFunction = document.getElementById("hangmanFunction");
// var blankLines = "<p>_</p>" * return fighterSelection;
var hangmanMMAFightersArray = ["ConorMcGregor", 
								"AndersonSilva", "KhabibNurmagomedov", "DanielCormier", "DemetriousJohnson", "JimiManuwa"];
var hangmanMMAFightersArrayLowerCase = hangmanMMAFightersArray.toLowerCase();

// FUNCTIONS

// func is run whenever the user presses a key, used to match user input, incorrectGuessesRemaining, lettersGuessed
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    // func for matching user input with hangmanMMAFightersArray
	for (i = 0; i < hangmanMMAFightersArray[fighter].length; i++) {
		if (userGuess == hangmanMMAFightersArrayLowerCase[fighter][i]) {
			// set a loop where every time userGuess == hangmanMMAFightersArrayLowerCase[fighter][i],
			// input html for those positions in id="blankLines"
			blankLines = userGuess;
		// if userGuess is wrong, incorrectGuessesRemaining - 1 and input lettersGuessed as userGuess
		} else {
			lettersGuessed = userGuess;
			incorrectGuessesRemaining--;
		}
	}   
}

// func for wins, HELP with checking id blankLines for no letters left
wins = function win() {
	if (blankLines) {
		wins++;
	}
}

// func for losses which then changes resets the game
losses = function loss() {
	if (incorrectGuessesRemaining == 0) {
		losses++;
		changeFighter();
	}
}

// func for determing fighter
function changeFighter() {
	var fighter = [Math.floor(Math.random() * hangmanMMAFightersArray.length)];
	return fighter;
}

// func for making blank lines and spaces for fighter's name
var blankLines = function blankLinesFunc() {
	"_ ".repeat(hangmanMMAFightersArrayLowerCase[fighter].length);
	// enter result into id blankLines html
}


// return variables into html, use ids???
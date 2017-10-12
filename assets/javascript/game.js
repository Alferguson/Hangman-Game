// variables 
// array of fighters
var hangmanMMAFightersArray = ["ConorMcGregor", 
								"AndersonSilva", "KhabibNurmagomedov"];

//splits word in array for userGuess check, should use lower case 
// var hangmanMMAFightersArrayBlanks = hangmanMMAFightersArray[1].split("");
var blankLines2Array = [];
for (i = 0; i < hangmanMMAFightersArray[fighterNumber].length; i++) {
	blankLines2Array[i]="_";
}
var remainingLetters = hangmanMMAFightersArray[fighterNumber].length;

while (remainingLetters > 0) {
	document.querySelector("#blankLinesId").innerHTML = blankLines2Array.join(" ");
	var guess = document.onkeyup;
    if (guess === null) {

        // Exit the game loop

        break;

    } else {

        // Update the game state with the guess

        for (var j = 0; j < hangmanMMAFightersArray[fighterNumber].length; j++) {

            if (hangmanMMAFightersArray[fighterNumber][j] === guess) {

            blankLines2Array[j] = guess;

            remainingLetters--;

            }

        }

    }
    document.querySelector("#blankLinesId"(blankLines2Array.join(" "));

    // The answer was " + hangmanMMAFightersArray[fighterNumber]);	
}


    // Show the answer and congratulate the player


// var hangmanMMAFightersArrayLowerCase = hangmanMMAFightersArray.toLowerCase();								

// vars and innerHTML for wins
var wins = 0;
document.querySelector("#winsId").innerHTML = "<p>" + wins + "</p>";

// vars and innerHTML for losses
var losses = 0;
document.querySelector("#lossesId").innerHTML = "<p>" + losses + "</p>";

// func to reset game after loss or win
resetFunc() {

	// vars and innerHTML for incorrectGuessesRemaining
	var incorrectGuessesRemaining = 10;
	document.querySelector("#incorrectGuessesRemainingId").innerHTML = "<p>" + incorrectGuessesRemaining + "</p>";

	// vars and innerHTML for letters guessed
	var lettersGuessed = 0;
	document.querySelector("#lettersGuessedId").innerHTML = "<p>" + lettersGuessed + "</p>";
	// use array to collect letters
	// var, innerHTML, and func to determing # of blankLines based on fighterNumber
	var fighterNumber = [Math.floor(Math.random() * hangmanMMAFightersArray.length)];
	blankLines = function blankLinesFunc() {
				// var and func for determing fighterNumber
				return "_ ".repeat(hangmanMMAFightersArray[0].length);
				};			
	function blankLinesVar = blankLines.charAt();			
	document.querySelector("#blankLinesId").innerHTML = "<p>" + blankLines() + "</p>";
}

// func is run whenever the user presses a key, used to match user input, incorrectGuessesRemaining, lettersGuessed
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    // func for matching user input with hangmanMMAFightersArray
	for (i = 0; i < hangmanMMAFightersArray[0].length; i++) {
		
		if (userGuess.toLowerCase() == hangmanMMAFightersArray[0][i]) {
			// hangmanMMAFightersArray[0][i];
			// set a loop where every time userGuess == hangmanMMAFightersArray[fighter][i],
			// input html for those positions in id="blankLines"
			blankLinesVar(i) = userGuess;
		}	
	}   
	// if userGuess is wrong, incorrectGuessesRemaining - 1 and input lettersGuessed as userGuess
	incorrectGuessesRemaining--;
	// document.querySelector(#lettersGuessedId).innerHTML = "<p>" + userGuess + "-</p";
};
// loss
if (incorrectGuessesRemaining = 0) {
	losses++;
	resetFunc();
};
// win where if the letters that replaced blank lines is equal to the fighter
if (blankLinesVar = hangmanMMAFightersArray[fighterNumber]) {
	wins++;
	resetFunc();
};
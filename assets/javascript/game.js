// variables 
var guessesRemaining = 15;
document.querySelector("#guessesRemainingId").innerHTML = "<p>" + guessesRemaining + "</p>";
// array of fighters
var hangmanMMAFightersArray = ["conormcgregor", "andersonsilva", "khabibnurmagomedov"];
// useful array for citing the above array with proper formating
var hangmanMMAFightersArrUpp = ["Conor McGregor", "Anderson Silva", "Khabib Nurmagomedov"];
var fighterNumber = [Math.floor(Math.random() * hangmanMMAFightersArray.length)];
// var and innerHTML for wins
var wins = 0;
document.querySelector("#winsId").innerHTML = "<p>" + wins + "</p>";
// var and innerHTML for losses
var losses = 0;
document.querySelector("#lossesId").innerHTML = "<p>" + losses + "</p>";
// array for letters guessed stored
var lettersGuessed = [];
document.querySelector("#lettersGuessedId").innerHTML = "<p>" + lettersGuessed + "</p>";
// to make # of blanks according to words length
var blankLinesArray = [];
for (i = 0; i < hangmanMMAFightersArray[fighterNumber].length; i++) {
	blankLinesArray[i]="_";
}
// var for # of correct letters left
var remainingCorrectLetters = hangmanMMAFightersArray[fighterNumber].length;

// hangman game 
document.onkeyup = function(event) {
	// record user key press
	var userGuess = event.key;
	// func to ensure userGuess is part of alphabet, BUG, DOESN'T Work with shifts, tab, etc
	if (isNaN(userGuess)) {
		// when the remaining correct letters is positive, continue the game
		if (remainingCorrectLetters > 0) {
			// to reset resultWord due to bug
			document.querySelector("#resultWord").innerHTML = "";
			// letters guessed by user function	
		    lettersGuessed.push(userGuess);
		   	document.querySelector("#lettersGuessedId").innerHTML = lettersGuessed.join(" ");
		   	// # of guesses remaining after a keypress
		    guessesRemaining--;
		    document.querySelector("#guessesRemainingId").innerHTML = "<p>" + guessesRemaining + "</p>";
		    // loop for comparing userGuess and fighter array
		    for (var j = 0; j < hangmanMMAFightersArray[fighterNumber].length; j++) {
	    		// correct letter function
			    if (hangmanMMAFightersArray[fighterNumber][j] === userGuess.toLowerCase()) {
		            // blank lines are replaced by userGuess
			        blankLinesArray[j] = userGuess;
			        // blankLines update
		   			document.querySelector("#blankLinesId").innerHTML = blankLinesArray.join(" ");	        
			        remainingCorrectLetters--;
			        // win
		            if (remainingCorrectLetters == 0) {
						wins++;
						document.querySelector("#winsId").innerHTML = "<p>" + wins + "</p>";
						document.querySelector("#resultWord").innerHTML = "<p>" + hangmanMMAFightersArrUpp[fighterNumber] + "</p>";
						resetFunc();
					} 
		       	} 
		       	// loss
		       	else if (guessesRemaining <= 0) {
					losses++;
					document.querySelector("#lossesId").innerHTML = "<p>" + losses + "</p>";
					resetFunc();
			    } 
		    } 
		} 
	} else {
		document.querySelector("#NaNInputId").innerHTML = "Don't use non-letters";
	}	
}
			
		
// var hangmanMMAFightersArrayLowerCase = hangmanMMAFightersArray.toLowerCase();								

// func to reset game after loss or win
function resetFunc() {
	// vars and innerHTML for guessesRemaining
	guessesRemaining = 15;
	document.querySelector("#guessesRemainingId").innerHTML = "<p>" + guessesRemaining + "</p>";

	// vars and innerHTML for letters guessed
	lettersGuessed = [];
	document.querySelector("#lettersGuessedId").innerHTML = "<p>" + lettersGuessed + "</p>";
	
	// var, innerHTML, and func to determing # of blankLines based on fighterNumber
	fighterNumber = [Math.floor(Math.random() * hangmanMMAFightersArray.length)];

	// reset remainingCorrectLetters
	remainingCorrectLetters = hangmanMMAFightersArray[fighterNumber].length;

	// reset blankArray
	blankLinesArray = [];
	for (i = 0; i < hangmanMMAFightersArray[fighterNumber].length; i++) {
		blankLinesArray[i]="_";
		document.querySelector("#blankLinesId").innerHTML = blankLinesArray.join(" ");
	}
	// reset userGuess so it isn't logged
	userGuess = "";
}

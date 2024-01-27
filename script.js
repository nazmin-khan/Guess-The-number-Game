// Generate a random number when the page loads
let randomNumber = Math.floor(Math.random() * 100) + 1;
let userScore = 100;
let attempt = 0;
function GuessTheNumber(event) {
  event.preventDefault();
  let form = event.target;
  let answer = parseInt(form.guess.value); // Convert the input value to an integer
  let feedback = document.getElementById("feedbackmessage");
  let intromessage = document.getElementById("introduction");
  let scoreCount = document.getElementById("score");
  let currentGuess = document.getElementById("recentguess")
  let submitButton = document.getElementById("sb")
  let inputBox = document.getElementById("ip")
  let playAgainButton = document.getElementById("playagain")
  if (answer === randomNumber) {
    feedback.innerText = "Congratulations! You guessed the correct number! Your final score is " + userScore + " and it took you " + (attempt + 1) + " attempts.";
    intromessage.innerText = "Well done";
    intromessage.style.color = "green";
    feedback.style.color = "green";
    currentGuess.innerText = "";
    scoreCount.style.display = "none";
    submitButton.style.display = "none";
    inputBox.style.display = "none"
    playAgainButton.style.display = "block";
    playAgainButton.style.margin = "auto";
    playAgainButton.innerText = "would you like to play again? click here"
    // Generate a new random number for the next game
    randomNumber = Math.floor(Math.random() * 100) + 1;
    userScore = 100; // Reset the score
    attempt = 0; // Reset the attempts
  }
    else if (answer < 0 || answer > 100) {
      feedback.innerText = "Please enter a number between 0 and 100";
      feedback.style.color = "red";
      intromessage.style.color = "red";
      intromessage.innerText = "dont worry That does not count as an attempt. . you are still on  attempt " + (attempt);
       // Decrease the user's score
      scoreCount.innerText = "Score " + userScore;
      currentGuess.innerText = "your most recent guess is " + form.guess.value;
      currentGuess.style = "color:purple;"
    }
  else if (answer < randomNumber) {
    feedback.innerText = "Too low! Guess again";
    feedback.style.color = "red";
    intromessage.style.color = "red";
    intromessage.innerText = "Wrong. That was attempt number " + (attempt + 1);
    userScore -= 1; // Decrease the user's score
    scoreCount.innerText = "Score " + userScore;
    currentGuess.innerText = "your most recent guess is " + form.guess.value;
    currentGuess.style = "color:purple;"
  } else if (answer > randomNumber) {
    feedback.innerText = "Too high! Guess again";
    feedback.style.color = "red";
    intromessage.style.color = "red";
    intromessage.innerText = "Wrong. That was attempt number " + (attempt + 1);
    userScore -= 1; // Decrease the user's score
    scoreCount.innerText = "Score " + userScore;
    currentGuess.innerText = "your most recent guess is " + form.guess.value;
    currentGuess.style = "color:purple;"
  }
   else {feedback.innerText = "no letters or words, only numbers please";
          intromessage.innerText = "dont worry That does not count as attempt. you are still on  attempt " + (attempt);
        }
  if (!(answer < 0 || answer > 100 )) {
    attempt += 1
  form.guess.value = ""; // Clear the input field for the next guess
}
}
function playAgain() {
  let scoreCount = document.getElementById("score");
  let submitButton = document.getElementById("sb");
  let inputBox = document.getElementById("ip");
  let playAgainButton = document.getElementById("playagain");
  let feedback = document.getElementById("feedbackmessage");
  let intromessage = document.getElementById("introduction");
  // Reset the display properties for the elements
  scoreCount.style.display = "block";
  submitButton.style.display = "block";
  inputBox.style.display = "block";
  playAgainButton.style.display = "none";
  // Center the buttons
  submitButton.style.margin = "auto";
  inputBox.style.margin = "auto";
  playAgainButton.style.margin = "auto";
  // Reset the introductory message
  intromessage.innerText = "I'm thinking of a number from 1 to 100...Can you guess what number I'm thinking of?";
  intromessage.style.color = "blue";
  feedback.innerText = "";
  scoreCount.innerText = "Score " + userScore;
}


var prevGameWin = 0;
var numWinsNeeded = 0;

var rollDice = function () {
  return 1;
  // produces a decimal between 0 and 3
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's anumber from 0 - 3 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var main = function (input) {
  var secretWord = rollDice();
  if (secretWord == 1) {
    secretWord = "banana";
  }
  if (secretWord == 2) {
    secretWord = "chisel";
  }
  if (secretWord == 3) {
    secretWord = "faucet";
  }
  var getNumWinsNeeded = rollDice();
  if (getNumWinsNeeded == 1) {
    numWinsNeeded = 2;
  }
  if (getNumWinsNeeded == 2) {
    numWinsNeeded = 3;
  }
  if (getNumWinsNeeded == 3) {
    numWinsNeeded = 4;
  }

  if (input !== secretWord) {
    var myOutputValue = `You didn't guess the secret word. You guessed ${input}, but the secret word is ${secretWord}. You still have ${
      numWinsNeeded - prevGameWin
    } to go to win.`;
    prevGameWin = 0;
  }

  if (input == secretWord) {
    prevGameWin = prevGameWin + 1;
    myOutputValue = `You guessed the secret word. It was ${secretWord}. You still have ${
      numWinsNeeded - prevGameWin
    } to go to win.`;
  }
  console.log(numWinsNeeded);
  console.log(prevGameWin);
  if (prevGameWin == numWinsNeeded) {
    myOutputValue = `You guessed correctly ${numWinsNeeded} times! You win the game!`;
  }
  return myOutputValue;
};

// COIN FLIP SIMULATOR

//  HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

// Count variables
let numHeads = 0;
let numTails = 0;

//  BUTTON EVENT LISTENER
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a random number
  let randNum = Math.random();

  // Stimulate the Coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png'>";
    numHeads += 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png'>";
    numTails += 1;
    tailsEl.innerHTML = numTails;
  }
}

// DICE ROLL SIMULATOR

// Saving HTML variables
let diceOutputEl = document.getElementById("dice-output");
let oneRollEl = document.getElementById("one-out");
let twoRollEl = document.getElementById("two-out");
let threeRollEl = document.getElementById("three-out");
let fourRollEl = document.getElementById("four-out");
let fiveRollEl = document.getElementById("five-out");
let sixRollEl = document.getElementById("six-out");

// Count rolls
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

// Button Event Listener
document.getElementById("flip-btn").addEventListener("click", rollBtn);

function rollBtn() {
  // Generate a random number 1-6 to determine what number is rolled
  let randNum2 = Math.floor(Math.random() * 6 + 1);
  console.log(randNum2);

  // Stimulate dice roll
  if (randNum2 == 1) {
    diceOutputEl.innerHTML = "<img src='img/1.png'>";
    num1 += 1;
    oneRollEl.innerHTML = num1;
  } else if (randNum2 == 2) {
    diceOutputEl.innerHTML = "<img src='img/2.png'>";
    num2 += 1;
    twoRollEl.innerHTML = num2;
  } else if (randNum2 == 3) {
    diceOutputEl.innerHTML = "<img src='img/3.png'>";
    num3 += 1;
    threeRollEl.innerHTML = num3;
  } else if (randNum2 == 4) {
    diceOutputEl.innerHTML = "<img src='img/4.png'>";
    num4 += 1;
    fourRollEl.innerHTML = num4;
  } else if (randNum2 == 5) {
    diceOutputEl.innerHTML = "<img src='img/5.png'>";
    num5 += 1;
    fiveRollEl.innerHTML = num5;
  } else if (randNum2 == 6) {
    diceOutputEl.innerHTML = "<img src='img/6.png'>";
    num6 += 1;
    sixRollEl.innerHTML = num6;
  }
}

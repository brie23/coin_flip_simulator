/*
  Assignment: Coin Flip Simulator
  Author: Brianna Eaddy
  Date: 07/30/2020
  Purpose: This page ensures that the user enters a valid number in the
    rounds input. The number of rows displayed in the table are dependent
    on the number of rounds entered by the user. This app will simulate 
    flipping a coin, therefore the two possible outcomes are either heads 
    or tails.
*/   

/*
  initialize adds event listeners to handle rounds validation on 
  the round element when they lose focus
*/
function initialize() {
  var roundsInput = document.getElementById("rounds");
  roundsInput.addEventListener("blur", validateRounds);
}

/*
  validateRounds will ensure that the input entered by the user is
  between 1 and 10 and will clear the input if user enters a number
  less than 1 or greater than 10. 
*/
function validateRounds() {
  var roundsInput = document.getElementById("rounds");
    if(roundsInput.value != "") {
     if(roundsInput.value < 1 || roundsInput.value > 100) {
       alert("Rounds must be between 1 and 100.");
         roundsInput.value = "";
    }
  }
}

/*
  update function will not allow the user to play the game if they click
  "Flip Coin" and leave the rounds input blank, displaying an alert. If 
  user enters a number between 1 and 10 and press "Flip Coin" button it 
  will call the flipCoin(rounds) function. 
*/
function update(rounds) {
  var rounds = document.getElementById("rounds").value;
    
  if (rounds === "") {
    alert("Rounds cannot be left blank");
  } else {
    flipCoin(rounds);
  }
} 

/*
  This function will simulate a coin flip utilizing the flipCoin
  function based on the number of rounds entered by the user. 
*/
function flipCoin(rounds) { 
  var coinArray = [];
   
  for (var i = 0; i < rounds; i++) {
    var coin = ["Heads", "Tails"];
    var outcome = coin[Math.floor(Math.random()*coin.length)];
    coinArray.push(outcome);
    updateTable(coinArray);
  }
}

/*
  This function will update the table based on coinArray
  and display the results in a table. 
*/
function updateTable(coinArray) {
  var gameTable = document.getElementById("game");
  gameTable.innerHTML = "";
    
  for (var i = 0; i < coinArray.length; i++) {
    var row = gameTable.insertRow(-1);
    var roundsCell = row.insertCell(0)
    var coinCell = row.insertCell(1);

    roundsCell.innerHTML = i + 1;
    coinCell.innerHTML = coinArray[i];
    }
    
    var thead = gameTable.createTHead();
    var row = thead.insertRow(0);
    var tableHeaders = ["Round Number", "Heads or Tails"];
    for (var i = 0; i < tableHeaders.length; i++) {
    var headerCell = document.createElement("th");
    headerCell.innerHTML = tableHeaders[i];
    row.appendChild(headerCell);
  }
}
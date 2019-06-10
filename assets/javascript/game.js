//Global Variables

// Crystal variable, using sub-objects of color
var crystal = {
    red:
    {
        name: "Red",
        value: 0
    },

    blue:
    {
        name: "Blue",
        value: 0
    },

    yellow:
    {
        name: "Yellow",
        value: 0
    },

    green:
    {
        name: "Green",
        value: 0
    }

};



// Functions
// Starts game


var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Score
var winningScore = 0
var playerScore = 0
// W/L 
var wins = 0
var losses = 0

// Adds crystal value to playerScore by calling crystal.value
var addPoints = function (crystal) {

    playerScore = playerScore + crystal.value;

    // Reflect in html
    $("#playerScore").html(playerScore);

    // Run winCheck to see if player wins or loses
    winCheck();
}

//  Determine if player win or loses by checking to see if playerScore is 
// lessthan, greater than, or = to winningScore. Then adding respective win or loss
var winCheck = function () {
    if (playerScore > winningScore) {
        alert("GAME OVER! YOU LOSE! TRY AGAIN");

        losses++
        $("#lossCount").html(losses);

        // restarts game
        startGame();
    }
    else if (playerScore == winningScore) {
        alert("Congrats! You WON!!");

        wins++
        $("#winCount").html(wins);

        // restarts game
        startGame();
    }

}

// On click for crytals which runs addPoints by calling the crystal.color
$("#red").on("click", function () {
    addPoints(crystal.red);
});

$("#blue").on("click", function () {
    addPoints(crystal.blue);
});

$("#yellow").on("click", function () {
    addPoints(crystal.yellow);
});

$("#green").on("click", function () {
    addPoints(crystal.green);
});

// Start game
var startGame = function () {

    // Start the game off with playerScore at zero
    playerScore = 0;

    // Choose new winningScore at the start of each new game (19, 120)
    winningScore = getRandom(19, 120);

    // Set new # value for each of the crystals (1 and 12) 
    crystal.red.value = getRandom(1, 12);
    crystal.blue.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);


    $("#playerScore").html(playerScore);
    $("#winningScore").html(winningScore);


    // Test
    console.log("winningScore: " + winningScore);
    console.log("Red: " + crystal.red.value + " | Blue: " + crystal.blue.value + " | Yellow: " + crystal.yellow.value + " | Green: " + crystal.green.value);
}
startGame();





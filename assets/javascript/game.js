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

$("#red").on("click", function () {
    alert("test");
});

$("#blue").on("click", function () {
    alert("test");
});

$("#yellow").on("click", function () {
    alert("test");
});

$("#green").on("click", function () {
    alert("test");
});

// Start game
var startGame = function () {

    // Start the game off with playerScore at zero
    var playerScore = 0;

    // Choose new winningScore at the start of each new game (19, 120)
    winningScore = getRandom(19, 120);

    // Set new # value for each of the crystals (1 and 12) 
    crystal.red.value = getRandom( 1, 12);
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
// Variables Section
let turn; // Lets us know what turn the palyer is on
let good; // Boolean - Confirms if player has replicated computer output for each level
let compTurn; // Boolean - to tell game whether or not it is player or computers turn
let intervalId; // Used in clearing intervals  
let noise = true; // Sounds added to options
let on = false; // Relates to onButton which is set to false to highlight the game has not been turned on
let win; // Outlines whether player has completed SiMem successfully
let order = []; // Array to keep track of how options flash
let playerOrder = []; // Array that tracks order of how player clicks on different options
let flash; // Number of flashes that have appeared in game

// Constant Section - Connection To HTML Features 
const onButton = document.querySelector(".power"); // Power Checkbox
const startButton = document.querySelector(".start"); // Start Button
const turnCounter = document.querySelector(".levelDisplay"); // Level Counter Activated In Game
// Consts For Options
const option1 = document.querySelector(".top-1-green");
const option2 = document.querySelector(".top-2-red");
const option3 = document.querySelector(".bottom-1-yellow");
const option4 = document.querySelector(".bottom-2-blue");
// NightMode Consts
const nightBanner = document.querySelector(".gameBanner")
const nightBoard = document.querySelector(".board");
const nightBody = document.body;

// Nightmode Feature Activated by nightTime Function referring to two classes as board changed separate to gameBanner and Body in background. 
function nightTime() {

	nightBody.classList.toggle("nightMode");
	nightBanner.classList.toggle("nightMode");
	nightBoard.classList.toggle("nightMode2");

}

// On Button Activating Level Counter + Initiating the game. 
onButton.addEventListener('click', (event) => {
	if (onButton.checked == true) {
		on = true;
		turnCounter.innerHTML = "-";
		startButton.innerHTML = "Lets Begin";
	}
	else {
		on = false;
		turnCounter.innerHTML = "";
		startButton.innerHTML = "Start";
		clearColor();
		clearInterval(intervalId);
	}
});

// Start Button 
startButton.addEventListener('click', (event) => {
	if (on || win) {
		play();
	}
});

// Java Gameplay 
// All variables set to initial setting. For loop pushes Order array to set Computers Turn each round
function play() {
	win = false;
	order = [];
	playerOrder = [];
	flash = 0;
	intervalId = 0;
	turn = 1;
	turnCounter.innerHTML = 1;
	good = true;
	for (var i = 0; i < 5; i++) {
		order.push(Math.floor(Math.random() * 4) + 1);
	}
	compTurn = true;

	intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
	on = false;

	if (flash == turn) {
		clearInterval(intervalId);
		compTurn = false;
		clearColor();
		on = true;
	}

	if (compTurn) {
		clearColor();
		setTimeout(() => {
			if (order[flash] == 1) one();
			if (order[flash] == 2) two();
			if (order[flash] == 3) three();
			if (order[flash] == 4) four();
			flash++;
		},
		200);
	}
}

// Option Section - connects Sounds clips in HTML to each option which then sets option to flash color

function one() {
	if (noise) {
		let audio = document.getElementById("clip1");
		audio.play();
	}
	noise = true;
	option1.style.backgroundColor = "lightgreen";
}

function two() {
	if (noise) {
		let audio = document.getElementById("clip2");
		audio.play();
	}
	noise = true;
	option2.style.backgroundColor = "tomato";
}

function three() {
	if (noise) {
		let audio = document.getElementById("clip3");
		audio.play();
	}
	noise = true;
	option3.style.backgroundColor = "yellow";
}

function four() {
	if (noise) {
		let audio = document.getElementById("clip4");
		audio.play();
	}
	noise = true;
	option4.style.backgroundColor = "lightskyblue";
}

// functions for default color of options and color of option being flashed 

function clearColor() {
	option1.style.backgroundColor = "darkgreen";
	option2.style.backgroundColor = "darkred";
	option3.style.backgroundColor = "goldenrod";
	option4.style.backgroundColor = "darkblue";
}

function flashColor() {
	option1.style.backgroundColor = "lightgreen";
	option2.style.backgroundColor = "tomato";
	option3.style.backgroundColor = "yellow";
	option4.style.backgroundColor = "lightskyblue";
}

// Options Functionality Section 
/* When each option is selected its assigned value is pushed to the playerOrder */
option1.addEventListener('click', (event) => {
	if (on) {
		playerOrder.push(1);
		check();
		one();
		if (!win) {
			setTimeout(() => {
				clearColor();
			},
			300);
		}
	}
})

option2.addEventListener('click', (event) => {
	if (on) {
		playerOrder.push(2);
		check();
		two();
		if (!win) {
			setTimeout(() => {
				clearColor();
			},
			300);
		}
	}
})

option3.addEventListener('click', (event) => {
	if (on) {
		playerOrder.push(3);
		check();
		three();
		if (!win) {
			setTimeout(() => {
				clearColor();
			},
			300);
		}
	}
})

option4.addEventListener('click', (event) => {
	if (on) {
		playerOrder.push(4);
		check();
		four();
		if (!win) {
			setTimeout(() => {
				clearColor();
			},
			300);
		}
	}
})

// Check that lets us see whether the user has selected the same Option as the computer outlined in that given level. 

function check() {
	if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) good = false;

	// Sets how many levels until the player wins
	if (playerOrder.length == 5 && good) {
		winGame();
	}

	// No! flashes when user selects incorrect option
	if (good == false) {
		flashColor();
		turnCounter.innerHTML = "NO!";
		setTimeout(() => {
			turnCounter.innerHTML = turn;
			clearColor();

			compTurn = true;
			flash = 0;
			playerOrder = [];
			good = true;
			intervalId = setInterval(gameTurn, 800);

		},
		800);
		noise = false;
	}

	// Confirms to move to the next level adding an additional flash each time  
	if (turn == playerOrder.length && good && !win) {
		turn++;
		playerOrder = [];
		compTurn = true;
		flash = 0;
		turnCounter.innerHTML = turn;
		intervalId = setInterval(gameTurn, 800);
	}
}

// Called when users playerOrder.length = value set to winLevel variable and check confirms correct option selected in last level
function winGame() {
	flashColor();
	turnCounter.innerHTML = "WIN!";
	on = false;
	win = true;
}
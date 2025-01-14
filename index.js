function throwDice() {
	var audio = document.getElementById("clickSound");
	audio.play();
	// const button = document.getElementById("myButton");

  // const clickAudio = document.getElementById("clickSound");
  // button.addEventListener("click", () => {
  //   clickAudio.play();
	// });
	
	var firstValue = Math.random();
	var secondValue = Math.random();
	firstValue = firstValue * 6 ;
	firstValue = Math.floor(firstValue) + 1;
	secondValue = secondValue * 6 ;
	secondValue = Math.floor(secondValue) + 1;
	// document.querySelector("first").setAttribute("src", "./images/dice" + firstValue + ".png");
	console.log(firstValue);
	console.log(secondValue);

	// document.querySelector("second").setAttribute("src", "./images/dice" + secondValue + ".png");
	document.querySelector("input").setAttribute("value", "Throw Again");
	if (firstValue == 1) {
		document.querySelector(".first").setAttribute("src", "images/dice1.png");
		document.querySelector(".playerOne").textContent = "Player 1 (1)";
	}
	else if (firstValue == 2) {
		document.querySelector(".first").setAttribute("src", "images/dice2.png");
		document.querySelector(".playerOne").textContent = "Player 1 (2)";
	}
	else if (firstValue == 3) {
		document.querySelector(".first").setAttribute("src", "images/dice3.png");
		document.querySelector(".playerOne").textContent = "Player 1 (3)";
	}
	else if (firstValue == 4) {
		document.querySelector(".first").setAttribute("src", "images/dice4.png");
		document.querySelector(".playerOne").textContent = "Player 1 (4)";
	}
	else if (firstValue == 5) {
		document.querySelector(".first").setAttribute("src", "images/dice5.png");
		document.querySelector(".playerOne").textContent = "Player 1 (5)";
	}
	else if (firstValue == 6) {
		document.querySelector(".first").setAttribute("src", "images/dice6.png");
		document.querySelector(".playerOne").textContent = "Player 1 (6)";
	}

	if (secondValue == 1) {
		document.querySelector(".second").setAttribute("src", "images/dice1.png");
		document.querySelector(".playerTwo").textContent = "Player 2 (1)";
	}
	else if (secondValue == 2) {
		document.querySelector(".second").setAttribute("src", "images/dice2.png");
		document.querySelector(".playerTwo").textContent = "Player 2 (2)";
	}
	else if (secondValue == 3) {
		document.querySelector(".second").setAttribute("src", "images/dice3.png");
		document.querySelector(".playerTwo").textContent = "Player 2 (3)";
	}
	else if (secondValue == 4) {
		document.querySelector(".second").setAttribute("src", "images/dice4.png");
		document.querySelector(".playerTwo").textContent = "Player 2 (4)";
	}
	else if (secondValue == 5) {
		document.querySelector(".second").setAttribute("src", "images/dice5.png");
		document.querySelector(".playerTwo").textContent = "Player 2 (5)";
	}
	else if (secondValue == 6) {
		document.querySelector(".second").setAttribute("src", "images/dice6.png");
		document.querySelector(".playerTwo").textContent = "Player 2 (6)";
	}
	if (firstValue>secondValue) {
		document.querySelector("h1").textContent = "👍🎉Player 1   Wins👎";
	}
	if (firstValue<secondValue) {
		document.querySelector("h1").textContent = "👎Player 2   Wins👍🎉";
	}
	if (firstValue==secondValue) {
		document.querySelector("h1").textContent = "🎉 Draw 🎉";
	}
}
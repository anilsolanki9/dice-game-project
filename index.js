function throwDice() {
	var audio = document.getElementById("clickSound");
	audio.play();
	var firstValue = Math.random();
	var secondValue = Math.random();
	firstValue = firstValue * 6 ;
	firstValue = Math.floor(firstValue) + 1;
	secondValue = secondValue * 6 ;
	secondValue = Math.floor(secondValue) + 1;
	document.querySelector("input").setAttribute("value", "Throw Again");
	var randomImage1Source = "./images/dice" + firstValue + ".png";
	var randomImage2Source = "./images/dice" + secondValue + ".png";
	document.querySelector(".first").setAttribute("src", randomImage1Source);
	document.querySelector(".playerOne").textContent = "Player 1 (" + firstValue + ")";
	document.querySelector(".second").setAttribute("src", randomImage2Source);
	document.querySelector(".playerOne").textContent = "Player 1 (" + secondValue + ")";
	if (firstValue>secondValue) {
		document.querySelector("h1").textContent = "👍🎉Player 1   Wins👎";
	}
	else if (firstValue<secondValue) {
		document.querySelector("h1").textContent = "👎Player 2   Wins👍🎉";
	}
	else if (firstValue==secondValue) {
		document.querySelector("h1").textContent = "🎉 Draw 🎉";
	}
}
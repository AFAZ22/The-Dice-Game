var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png = dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1,png = images/dice6.png

var image1 = document.querySelectorAll ("img")[0];
image1.setAttribute("src", randomImageSource);

//

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll ("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩P1 WON!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩P2 WON!";
}
else {
  document.querySelector("h1").innerHTML = "🏁 DRAW!";
}
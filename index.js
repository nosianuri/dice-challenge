// picks two random numbers between 1 and 6 (include)
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// uses the random number 1 and 2 to select a random dice images
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

// uses the random dice image 1 and 2 to create the source to the images
var randomImageSource1 = "images/" + randomDiceImage1;
var randomImageSource2 = "images/" + randomDiceImage2;

// variables accessing the images
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

// changing the dice images
image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

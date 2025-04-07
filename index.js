var randomNumber1 = Math.floor(Math.random() * 6) + 1;//rng
var diceImage = "dice" + randomNumber1 + ".png";//dicex.png
var diceImagePath = "./assets/" + diceImage;//./assets/dicex.png

image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImagePath);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;//rng
var diceImage = "dice" + randomNumber2 + ".png";//dicex.png
var diceImagePath = "./assets/" + diceImage;//./assets/dicex.png

image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImagePath);

if (randomNumber1 === randomNumber2){
    document.querySelector("header").innerHTML="Draw...";
}else if (randomNumber1 > randomNumber2){
    document.querySelector("header").innerHTML="Player One Wins!!!!";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("header").innerHTML="Player Two Wins!!!!";
}
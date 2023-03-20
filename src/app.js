/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // document.querySelector("#card").innerHTML = resultCard;

  let cardValues = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let suitValues = ["♠", "♣", "♥", "♦"];

  let card = () => cardValues[Math.floor(Math.random() * cardValues.length)];
  let suit = () => suitValues[Math.floor(Math.random() * suitValues.length)];

  let cardNumber = document.querySelector("#number");
  let cardSuit = document.querySelector("#cardSuit");
  let cardSuit2 = document.querySelector("#cardSuit2");
  cardNumber.textContent = card();
  cardSuit.textContent = suit();
  cardSuit2.textContent = cardSuit.textContent;
};

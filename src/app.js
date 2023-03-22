/* eslint-disable */
import "bootstrap";
import "./style.css";

function cardGenerator() {
  let cardValues = [
    "A",
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

  let cardNum = document.querySelector("#cardNum");
  let cardSuit = document.querySelector("#cardSuitTop");

  // porque primero no se llama al id con querySelector?
  cardNum.textContent = card();
  cardSuitTop.textContent = suit();
  cardNumTop.textContent = cardNum.textContent;
  cardSuitBot.textContent = cardSuitTop.textContent;
  cardNumBot.textContent = cardNum.textContent;

  if (cardSuitTop.textContent === "♥" || cardSuitTop.textContent === "♦") {
    document.querySelector(".card").style.color = "red";
  }

  if (cardNum.textContent === "A") {
    document.querySelector("#cardNum").textContent = cardSuitTop.textContent;
  }
}

window.onload = cardGenerator;

//boton
let button = document.querySelector("#changeCardBtn");
button.addEventListener("click", cardGenerator);

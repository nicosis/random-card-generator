import "bootstrap";
import "./style.css";

window.onload = cardGenerator;

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

  let randomValue = () =>
    cardValues[Math.floor(Math.random() * cardValues.length)];
  let randomSuit = () =>
    suitValues[Math.floor(Math.random() * suitValues.length)];

  let value = randomValue();
  let cornerValue = document.querySelectorAll(".card-value");
  cornerValue.forEach(x => (x.textContent = value));

  let suit = randomSuit();
  let cornerSuit = document.querySelectorAll(".card-suit");
  cornerSuit.forEach(x => (x.textContent = suit));

  // condicionales para los ases y el color
  if (value === "A") {
    document.querySelector("#middle").textContent = suit;
  }
  if (suit === "♥" || suit === "♦") {
    document.querySelector(".card").style.color = "red";
  } else {
    document.querySelector(".card").style.color = "black";
  }
}

//boton new card
let button = document.querySelector("#changeCardBtn");
button.addEventListener("click", cardGenerator);

//timer
let interval;
let startInterval = () => {
  if (!interval) {
    interval = setInterval(cardGenerator, 1000);
  }
};

let stopInterval = () => {
  clearInterval(interval);
  interval = null;
};

document.querySelector("#startBtn").addEventListener("click", startInterval);
document.querySelector("#stopBtn").addEventListener("click", stopInterval);

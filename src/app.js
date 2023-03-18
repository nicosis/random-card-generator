/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randomNumber = () => Math.floor(Math.random() * 13) + 1;
  let randomSuit = () => Math.floor(Math.random() * 4) + 1;

  let card = num => {
    switch (num) {
      case 1:
        return "A";
        break;
      case 11:
        return "J";
        break;
      case 12:
        return "Q";
        break;
      case 13:
        return "K";
        break;
      default:
        return num.toString();
        break;
    }
  };

  let suit = num => {
    switch (num) {
      case 1:
        return "Spade ♠";
      case 2:
        return "Club ♣";
      case 3:
        return "Heart ♥";
      case 4:
        return "Diamond ♦";
    }
  };

  let resultCard = "";
  resultCard = card(randomNumber()) + " of " + suit(randomSuit());

  console.log(resultCard);
};

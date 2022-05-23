/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let generaterandomnumber = () => {
    let numbers = [
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
      "K",
      "Q"
    ];
    let indexnumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexnumbers];
  };

  let generaterandompica = () => {
    let symbols = ["♦", "♥", "♠", "♣"];
    let indexsymbols = Math.floor(Math.random() * symbols.length);
    return symbols[indexsymbols];
  };

  let newsymbol = generaterandompica();
  document.querySelector(".top-card").textContent = newsymbol;
  document.querySelector(".bottom-card").textContent = newsymbol;
  document.querySelector(".number").innerHTML = generaterandomnumber();
};

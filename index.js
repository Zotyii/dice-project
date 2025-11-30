var source = "";
//console.log(ranNumber);
var ranNumberOne = Math.floor(Math.random() * 6) + 1;
var ranNumberTwo = Math.floor(Math.random() * 6) + 1;

//console.log(ranNumber);

  source = `./images/dice${ranNumberOne}.png`;
  document.querySelector(".img1").setAttribute("src", source);

  source = `./images/dice${ranNumberTwo}.png`;
  document.querySelector(".img2").setAttribute("src", source);


  if (ranNumberOne ===ranNumberTwo){
    document.querySelector("h1").textContent = ("Draw!");

  } else if (ranNumberOne > ranNumberTwo){
    document.querySelector("h1").innerText=("Player One Won!");

  } else {
    document.querySelector("h1").innerText=("Player Two Won!");

  }
// My first solution is here below but after that i found out a better one, it sits on  the top.
/*if (ranNumber === 1) {
      source = "./images/dice1.png";
    } else if (ranNumber === 2) {
      source = "./images/dice2.png";
    } else if (ranNumber === 3) {
      source = "./images/dice3.png";
    } else if (ranNumber === 4) {
      source = "./images/dice4.png";
    } else if (ranNumber === 5) {
      source = "./images/dice5.png";
    } else {
      source = "./images/dice6.png";
    }
    document.querySelector(".img2").setAttribute("src", source);

        if (ranNumber === 1) {
      source = `./images/dice${ranNumber}.png`;
    } else if (ranNumber === 2) {
      source = "./images/dice2.png";
    } else if (ranNumber === 3) {
      source = "./images/dice3.png";
    } else if (ranNumber === 4) {
      source = "./images/dice4.png";
    } else if (ranNumber === 5) {
      source = "./images/dice5.png";
    } else {
      source = "./images/dice6.png";
    }
    document.querySelector(".img1").setAttribute("src", source);
*/


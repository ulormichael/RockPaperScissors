function computerPlay() {
    let list = ["ROCK", "PAPER", "SCISSORS"];
    let computerSelection = list[Math.floor(Math.random() * list.length)];
    return computerSelection;
  }
  
  function playerPlay() {
    let player = false;
    let playerSelection = "";
    do {
      let p = prompt("Choose rock, paper or scissors");
      playerSelection = p.toUpperCase();
      if (
        playerSelection == "ROCK" ||
        playerSelection == "PAPER" ||
        playerSelection == "SCISSORS"
      ) {
        player = true;
      }
    } while (player == false);
    console.log(playerSelection);
    return playerSelection;
  }
  
  function play() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    if (computerSelection == "ROCK") {
      if (playerSelection == "ROCK") {
        return "it's a it is a draw";
      } else if (playerSelection == "PAPER") {
        return "You win!PAPER beats ROCK";
      } else {
        return "You lose! ROCK beats SCISSORS";
      }
    } else if (computerSelection == "PAPER") {
      if (playerSelection == "ROCK") {
        return "You lose! PAPER beats ROCK";
      } else if (playerSelection == "PAPER") {
        return "it's a it is a draw";
      } else {
        return "You win! SCISSORS beats PAPER";
      }
    } else {
      if (playerSelection == "ROCK") {
        return "You win! ROCK beats SCISSORS";
      } else if (playerSelection == "PAPER") {
        return "You lose! SCISSORS beats PAPER";
      } else {
        return "it's a it is a draw";
      }
    }
  }
  
  function game() {
    let w = 0;
    let l = 0;
    for (let i = 0; i < 5; i++) {
      let text = play();
      console.log(text);
      let lose = text.search("lose");
      let win = text.search("win");
      let W = parseInt(win);
      let L = parseInt(lose);
      if (L > 0) {
        l = l + 1;
      }
      if (W > 0) {
        w = w + 1;
      }
    }
    console.log("win :" + w);
    console.log("lose :" + l);
    if (l < w) {
      console.log("You win!");
    }
    if (l == w) {
      console.log("it is a draw!");
    }
    if (l > w) {
      console.log("You lose!");
    }
  }
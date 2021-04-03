// Challenge 1: Your Age in Days

var currentYear = new Date().getFullYear();
var ageInDays = () => {
  var birthYear = prompt("What year were you born?");
  var year = currentYear - birthYear;

  var countLeapYears = (birthYear, currentYear) => {
    var leapYearCount = 0;
    years = birthYear;
    var isLeapYear = (years) => {
      return (years % 4 == 0 && years % 100 != 0) || years % 400 == 0;
    };

    for (i = birthYear; i <= currentYear; i++) {
      if (isLeapYear(i)) {
        leapYearCount++;
      }
    }
    return leapYearCount;
  };

  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " +
      (year * 365 + countLeapYears(birthYear, currentYear)) +
      " days old."
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
  console.log(year * 365 + countLeapYears(birthYear, currentYear));
};

const reset = () => {
  document.getElementById("ageInDays").remove();
};

// Challenge 2: Cat Generator

const generateCat = () => {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
};

// Challenge 3: Rock, Paper, Scissors

const rpsGame = (yourChoice) => {
  console.log(yourChoice.id);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = numberToChoice(randToRpsInt());
  console.log(botChoice);

  results = decideWinner(humanChoice, botChoice); // [0.5 , 0.5] draw
  console.log(results);

  message = finalMessage(results); // {message: 'You won!', 'color': 'green'}
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message);
};

var randToRpsInt = () => {
  return Math.floor(Math.random() * 3);
};

var numberToChoice = (number) => {
  return ["rock", "paper", "scissors"][number];
};

var decideWinner = (yourChoice, computerChoice) => {
  const rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { scissors: 0, rock: 1, paper: 0.5 },
    scissors: { scissors: 0.5, rock: 0, paper: 1 },
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
};

var finalMessage = ([yourScore]) => {
  if (yourScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied!", color: "yellow" };
  } else {
    return { message: "You won!", color: "green" };
  }
};

var rpsFrontEnd = (humanImageChoice, botImageChoice, finalMessage) => {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  // remove all the images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humanImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'/>";

  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size: 60px; padding: 30px; '>" +
    finalMessage["message"] +
    "</h1>";

  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);' />";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
};

// Challenge 4: Change the color of all buttons!

let all_buttons = document.getElementsByTagName("button");
let all_colors = ["btn-danger", "btn-success", "btn-warning", "btn-primary"];

// duplicating all original buttons
let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

const buttonColorChange = (buttonChange) => {
  if (buttonChange.value === "red") {
    buttonsRed();
  } else if (buttonChange.value === "green") {
    buttonsGreen();
  } else if (buttonChange.value === "blue") {
    buttonsBlue();
  } else if (buttonChange.value === "yellow") {
    buttonsYellow();
  } else if (buttonChange.value === "reset") {
    buttonsColorReset();
  } else if (buttonChange.value === "random") {
    randomColors();
  }
};

const randomColors = () => {
  for (let i = 0; i < all_buttons.length; i++) {
    let possibleColors = Math.floor(Math.random() * all_colors.length);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(all_colors[possibleColors]);

    /*     let possibleColors = Math.floor(Math.random() * all_buttons.length);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[possibleColors]); */
  }
};

const buttonsColorReset = () => {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
};

const buttonsRed = () => {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(all_colors[0]);
  }
};

const buttonsGreen = () => {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(all_colors[1]);
  }
};

const buttonsYellow = () => {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(all_colors[2]);
  }
};

const buttonsBlue = () => {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(all_colors[3]);
  }
};

// Challenge 5: BlackJack!

let blackjackGame = {
  you: { scoreSpan: "#player-blackjack-result", div: "#player-box", score: 0 },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
  cards: [
    "2S",
    "3S",
    "4S",
    "5S",
    "6S",
    "7S",
    "8S",
    "9S",
    "10S",
    "JS",
    "QS",
    "KS",
    "AS",
    "2D",
    "3D",
    "4D",
    "5D",
    "6D",
    "7D",
    "8D",
    "9D",
    "10D",
    "JD",
    "QD",
    "KD",
    "AD",
    "2H",
    "3H",
    "4H",
    "5H",
    "6H",
    "7H",
    "8H",
    "9H",
    "10H",
    "JH",
    "QH",
    "KH",
    "AH",
    "2C",
    "3C",
    "4C",
    "5C",
    "6C",
    "7C",
    "8C",
    "9C",
    "10C",
    "JC",
    "QC",
    "KC",
    "AC",
  ],
  cardsMap: {
    "2S": 2,
    "3S": 3,
    "4S": 4,
    "5S": 5,
    "6S": 6,
    "7S": 7,
    "8S": 8,
    "9S": 9,
    "10S": 10,
    JS: 10,
    QS: 10,
    KS: 10,
    AS: [1, 11],
    "2D": 2,
    "3D": 3,
    "4D": 4,
    "5D": 5,
    "6D": 6,
    "7D": 7,
    "8D": 8,
    "9D": 9,
    "10D": 10,
    JD: 10,
    QD: 10,
    KD: 10,
    AD: [1, 11],
    "2H": 2,
    "3H": 3,
    "4H": 4,
    "5H": 5,
    "6H": 6,
    "7H": 7,
    "8H": 8,
    "9H": 9,
    "10H": 10,
    JH: 10,
    QH: 10,
    KH: 10,
    AH: [1, 11],
    "2C": 2,
    "3C": 3,
    "4C": 4,
    "5C": 5,
    "6C": 6,
    "7C": 7,
    "8C": 8,
    "9C": 9,
    "10C": 10,
    JC: 10,
    QC: 10,
    KC: 10,
    AC: [1, 11],
  },
  wins: 0,
  losses: 0,
  draws: 0,
  isStand: false,
  turnsOver: false,
  startCard: 0,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

const hitSound = new Audio("static/sounds/swish.m4a");
const winSound = new Audio("static/sounds/cash.mp3");
const lossSound = new Audio("static/sounds/aww.mp3");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit);

async function blackjackHit() {
  if (YOU["score"] > 21) {
    blackjackGame["turnsOver"] = true;
    blackjackGame["isStand"] = true;
    showResult(DEALER);
    lossSound.play();
  }

  if (
    blackjackGame["isStand"] === false &&
    blackjackGame["startCard"] === 2 &&
    YOU["score"] !== 21
  ) {
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }

  while (blackjackGame["isStand"] === false && blackjackGame["startCard"] < 1) {
    let card = randomCard();
    let cardDealer = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    await sleep(1200);
    showCard(cardDealer, DEALER);
    updateScore(cardDealer, DEALER);
    showScore(DEALER);
    blackjackGame["startCard"]++;
  }

  while (blackjackGame["isStand"] === false && blackjackGame["startCard"] < 2) {
    let card = randomCard();
    await sleep(800);
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    blackjackGame["startCard"]++;
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 52);
  return blackjackGame["cards"][randomIndex];
}

function showCard(card, activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

function updateScore(card, activePlayer) {
  if (card === "AS" || card === "AH" || card === "AD" || card === "AC") {
    if (activePlayer["score"] + blackjackGame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += blackjackGame["cardsMap"][card][1];
    } else {
      activePlayer["score"] += blackjackGame["cardsMap"][card][0];
    }
  } else {
    activePlayer["score"] += blackjackGame["cardsMap"][card];
  }
}

function showScore(activePlayer) {
  let cardsOnBoard = document
    .querySelector("#player-box")
    .querySelectorAll("img");
  let cardsOnDealerBoard = document
    .querySelector("#dealer-box")
    .querySelectorAll("img");
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "Too Many!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else if (YOU["score"] === 21 && cardsOnBoard.length === 2) {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      "BLACK JACK!!!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "yellow";
  } else if (DEALER["score"] === 21 && cardsOnDealerBoard.length === 2) {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      "BLACK JACK!!!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "yellow";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  }
}

document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackjackDeal);

function blackjackDeal() {
  if (blackjackGame["turnsOver"] === true) {
    blackjackGame["isStand"] = false;
    blackjackGame["startCard"] = 0;

    let yourImages = document
      .querySelector("#player-box")
      .querySelectorAll("img");

    for (i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
    }

    let dealerImages = document
      .querySelector("#dealer-box")
      .querySelectorAll("img");

    for (i = 0; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }

    YOU["score"] = 0;
    DEALER["score"] = 0;

    document.querySelector("#player-blackjack-result").textContent = 0;
    document.querySelector("#player-blackjack-result").style.color = "white";
    document.querySelector("#dealer-blackjack-result").textContent = 0;
    document.querySelector("#dealer-blackjack-result").style.color = "white";

    document.querySelector("#blackjack-result").textContent = "Let's play";
    document.querySelector("#blackjack-result").style.color = "black";
    blackjackGame["turnsOver"] = false;
  }
}

document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", blackjackStand);

async function blackjackStand() {
  blackjackGame["isStand"] = true;

  while (DEALER["score"] < 17 && blackjackGame["isStand"] === true) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    if (DEALER["score"] > 16) {
      blackjackGame["turnsOver"] = true;
      showResult(computeWinner());
    }
    await sleep(700);
  }
}

function computeWinner() {
  let winner;

  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      blackjackGame["wins"]++;
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      blackjackGame["losses"]++;
      winner = DEALER;
    } else if (YOU["score"] === DEALER["score"]) {
      blackjackGame["draws"]++;
    }
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    blackjackGame["losses"]++;
    winner = DEALER;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    blackjackGame["losses"]++;
    winner = DEALER;
  }
  console.log(blackjackGame);
  return winner;
}

function showResult(winner) {
  let message, messageColor;

  if (blackjackGame["turnsOver"] === true) {
    if (winner === YOU) {
      document.querySelector("#wins").textContent = blackjackGame["wins"];
      message = "You won!";
      messageColor = "green";
      winSound.play();
    } else if (winner === DEALER) {
      document.querySelector("#losses").textContent = blackjackGame["losses"];
      message = "You lost!";
      messageColor = "red";
      lossSound.play();
    } else {
      document.querySelector("#draws").textContent = blackjackGame["draws"];
      message = "You drew!";
      messageColor = "black";
    }

    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;
  }
}

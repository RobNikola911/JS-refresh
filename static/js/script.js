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

var all_buttons = document.getElementsByTagName("button");

// duplicating all original buttons
var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}



const buttonColorChange = (buttonChange) => {
    if (buttonChange.value === 'red') {
        buttonsRed();
    } else if (buttonChange.value === 'green'){
        buttonsGreen();
    } else if (buttonChange.value === 'reset'){
        buttonsColorReset();
    } else if (buttonChange.value === 'random') {
        randomColors();
    }
}

const buttonsRed = () => {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}



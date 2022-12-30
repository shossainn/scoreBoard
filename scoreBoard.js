let score = 0;
let awayScore = 0;
let resetScore = 0;

document.getElementById("home-score").textContent = score;
document.getElementById("away-score").textContent = awayScore;
totalHomeScore = document.getElementById("home-score");
totalAwayScore = document.getElementById("away-score");
scored = document.getElementById("scoredMsg");
awayScored = document.getElementById("scoredAwayMsg");

//home score points functions
function onePoint() {
  // console.log("1 point scored")
  score = score + 1;
  totalHomeScore.textContent = score;
  scored.textContent = "TANZIL SCOREDDD 1 PT";
}

function twoPoint() {
  // console.log("1 point scored")
  score = score + 2;
  totalHomeScore.textContent = score;
  scored.textContent = "TANZIL SCOREDDD 2 PTS";
}

function threePoint() {
  // console.log("1 point scored")
  score = score + 3;
  totalHomeScore.textContent = score;
  scored.textContent = "TANZIL SCOREDDD 3 PTS";
}

//Away score points functions
function awayOnePoint() {
  // console.log("1 point scored")
  awayScore = awayScore + 1;
  totalAwayScore.textContent = awayScore;
  awayScored.textContent = "TANMIR SCOREDDD 1 PT";
}

function awayTwoPoint() {
  // console.log("1 point scored")
  awayScore = awayScore + 2;
  totalAwayScore.textContent = awayScore;
  awayScored.textContent = "TANMIR SCOREDDD 2 PTS";
}

function awayThreePoint() {
  // console.log("1 point scored")
  awayScore = awayScore + 3;
  totalAwayScore.textContent = awayScore;
  awayScored.textContent = "TANMIR SCOREDDD 3 PTS";
}

//reset button
function reset() {
  totalAwayScore.textContent = 0;
  awayScored.textContent = null;
  awayScore = 0;
}

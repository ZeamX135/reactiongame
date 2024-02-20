var clickedTime;
var createdTime;
var reactionTime;
var highScore = [];

function makeBox() {
  var hue =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  var time = Math.random() * 5000;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var top = Math.random() * (windowHeight - 400) + 100;
  var left = Math.random() * (windowWidth - 200);
  var shape = Math.random() * 50;

  setTimeout(function () {
    var box = document.getElementById("box");
    box.style.display = "block";
    box.style.background = hue;
    box.style.top = top + "px";
    box.style.left = left + "px";
    box.style.borderRadius = shape + "%";
    createdTime = Date.now();
  }, time);
}

document.getElementById("box").onclick = function () {
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime) / 1000;
  highScore.push(reactionTime);
  highScore.sort(function (a, b) {
    return a - b;
  });
  var minTime = highScore[0];
  document.getElementById("highScore").innerHTML = minTime.toFixed(2);
  document.getElementById("time").innerHTML = reactionTime.toFixed(2);
  this.style.display = "none";
  makeBox();
};

makeBox();

let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

function playSound(color) {
  let audio = new Audio(`sounds/${color}.mp3`);
  audio.play();
}

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");
  
  setTimeout(function() {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100)
}

function nextSequence() {
  let randNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randNumber];
  gamePattern.push(randomChosenColour);
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

$(".btn").on("click", function(){
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
})

// $("document").on("click", function() {
//   nextSequence();
//   console.log(gamePattern);
// })

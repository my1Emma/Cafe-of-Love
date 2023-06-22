// functions //
function lineChange(direction){
  if (direction == "forward"){
    i ++;
    textArea.innerHTML = line[i]
    
  } else {
    i --
    textArea.innerHTML = line[i]
  }
  // If textArea[i] out of range, then one of the buttons will be hidden and not interactive // 
  if (i < 0 || i >= line.length){
    document.getElementById(direction).style.visibility = "hidden";
    textArea.innerHTML = "No lines here!!"
  } else { 
    // If textArea[i] in range, then the buttons are visible and interactive //
    back.style.visibility = "visible";
    forward.style.visibility = "visible";
  }
  if (i == 0){
    back.style.visibility = "hidden";
  }
  dialogueHistory.innerHTML.push(line[i]);
}
function confirmation_box_display(activator){
  if (activator == "home"){
    confirmationBox.style.top = "1965px";
    // 980
    confirmationBox.style.opacity = "100%"
    confirmationBox.style.visibility = "visible";
    GAME_SCENE.forEach(element => {
      element.style.filter = "blur(1.5px) grayscale(10%)";
    });
    forward.disabled = true;
    back.disabled = true;


  } else if (activator == "no"){
    // Find a way to make box hidden afterwards.
    confirmationBox.style.top = "1933px";
    confirmationBox.style.opacity = "0%"
    confirmationBox.addEventListener('transitionend', () =>{
      confirmationBox.visibility = "hidden";
    });
    // 940
    GAME_SCENE.forEach(element => {
      element.style.filter = "none";
    });
    back.disabled = false;
    forward.disabled = false;
  }
}
function main_menu(){
  // GAME_SCENE is a list of all the game_scene elements
  // loop through each element in the list and apply the 
  // style properties that you want
  GAME_SCENE.forEach(thing => {
    thing.style.opacity = "0%";
    thing.addEventListener('transitionend', () =>{
      thing.style.visibility = "hidden";
    });
  })
  gameArea.style.background = "url('placeholders/card_still_full1_3296_evolution.webp') center/cover";
  confirmationBox.style.visibility = "hidden";
}
// Lists Variables//
let line = ["Ngahhh Oshi-san looks so pretty from this angle...", "I think he might just be da prettiest in da world!", "I hope that he's proud of us, of Valkyrie-- we've come so far..."];
let i = 0;
let forward = document.getElementById("forward");
let back = document.getElementById("back");
let textArea = document.getElementById("script");
let gameArea = document.getElementById("game");
let home = document.getElementById("home");
let confirmationBox = document.getElementById("confirmation-box");
let confimrationButtonNo = document.getElementById("no");
let confirmationButtonYes = document.getElementById("yes")
let background_image = document.getElementById("bg");
let dialogueHistory = document.getElementById("dialogue-history");
dialogueHistory.innerHTML = [];
const TOP_CG = document.getElementById("top");
const BOTTOM_CG = document.getElementById("bottom");
const LEFT_SPRITE = document.getElementById("sprite_left");
const RIGHT_SPRITE = document.getElementById("sprite-right");


const GAME_SCENE = document.querySelectorAll(".game_scene");


textArea.innerHTML = line[i];
back.style.visibility = "hidden";

// Event Listeners //

forward.addEventListener('click', function(){
  lineChange("forward");
});

back.addEventListener('click', function(){
  lineChange("back");
});
home.addEventListener('click', function(){
  confirmation_box_display('home');
});

confimrationButtonNo.addEventListener('click', function(){
  confirmation_box_display('no');
});

confirmationButtonYes.addEventListener('click', main_menu);

sprite_fade()
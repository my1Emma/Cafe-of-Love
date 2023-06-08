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
}
function confirmation_box_display(activator){
  if (activator == "home"){
    confirmationBox.style.visibility = "visible";
  } else if (activator == "no"){
    confirmationBox.style.visibility = "hidden";
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
    // thing.style.visibility = "hidden";
  })
  // GAME_SCENE.style.opacity = "0%";
  confirmationBox.style.visibility = "hidden";
}

function scene_hide(){
  GAME_SCENE.style.visibility = "hidden";
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
const TOP_CG = document.getElementById("top");
const BOTTOM_CG = document.getElementById("bottom");

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


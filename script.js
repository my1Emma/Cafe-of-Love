// functions //
function lineChange(direction){
  if (direction == "forward"){
    i ++;
    textArea.innerHTML = line[i];
    dialogue_history_add();
  } 
  // else {
  //   i --
  //   textArea.innerHTML = line[i];
  // }
  // If textArea[i] out of range, then one of the buttons will be hidden and not interactive // 
  if (i < 0 || i >= line.length){
    document.getElementById(direction).style.visibility = "hidden";
    textArea.innerHTML = "No lines here!!"
  } 
  else { 
    // If textArea[i] in range, then the buttons are visible and interactive //
    // back.style.visibility = "visible";
    forward.style.visibility = "visible";
  }
  // if (i == 0){
  //   back.style.visibility = "hidden";
  //   dialogueHistory.innerHTML = line[i];
  // }
  sprite_check();
}
function confirmation_box_display(activator){
  if (activator == "home"){
    confirmationBox.style.top = "20%";
    // 980
    confirmationBox.style.opacity = "100%"
    confirmationBox.style.visibility = "visible";
    GAME_SCENE.forEach(element => {
      element.style.filter = "blur(1.5px) grayscale(10%)";
    });
    forward.disabled = true;
    // back.disabled = true;
    dialogueHistoryBox.style.visibility = "hidden";



  } else if (activator == "no"){
    // Find a way to make box hidden afterwards.
    confirmationBox.style.top = "10%";
    confirmationBox.style.opacity = "0%"
    confirmationBox.addEventListener('transitionend', () =>{
      confirmationBox.visibility = "hidden";
    });
    // 940
    GAME_SCENE.forEach(element => {
      element.style.filter = "none";
    });
    // back.disabled = false;
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
  mainMenuBox.style.width = "20%";
  mainMenuBox.addEventListener('transitionend', () =>{
    mainMenuButtons.forEach(button => {
      button.style.opacity =  "100%";
    });
  });
}
function sprite_check(){
  if (i < 1 || i >= 3 ){
    RIGHT_SPRITE.src = "placeholders/tsukasa_sprite.png";
  }
  else if (i >= 1 || i < 3){
    RIGHT_SPRITE.src = "placeholders/tsumugi_sprite.png";
  }
}
function dialogue_history_add(){
  if (i < line.length){
    let logLine = document.createElement("p");
    let node = document.createTextNode(line[i]);
    logLine.appendChild(node);
    dialogueHistoryBox.appendChild(logLine);
  }
}
// Lists Variables //
let line = ["Ngahhh Oshi-san looks so pretty from this angle...", "I think he might just be da prettiest in da world!", "I hope that he's proud of us, of Valkyrie-- we've come so far...", "Adding another line", "Yadaydayada"];
let i = 0;
let forward = document.getElementById("forward");
// let back = document.getElementById("back");
let textArea = document.getElementById("script");
let gameArea = document.getElementById("game");
let home = document.getElementById("home");
let confirmationBox = document.getElementById("confirmation-box");
let confimrationButtonNo = document.getElementById("no");
let confirmationButtonYes = document.getElementById("yes")
let background_image = document.getElementById("bg");
let dialogueHistory = document.getElementById("dialogue-history");
let dialogueHistoryBox = document.getElementById("dialogue-history-box");
let logButton = document.getElementById("log");
const dialogueHistoryExit = document.getElementById("exit");
dialogueHistory.innerHTML = [];
const TOP_CG = document.getElementById("top");
const BOTTOM_CG = document.getElementById("bottom");
const LEFT_SPRITE = document.getElementById("sprite-left");
const RIGHT_SPRITE = document.getElementById("sprite-right");
const credits = document.getElementById("credits");
const mainMenuBox = document.getElementById("main_menu_box");
const mainMenuButtons = document.querySelectorAll(".main_menu_button");
const chapterSelect = document.getElementById("chapter_select");
const GAME_SCENE = document.querySelectorAll(".game_scene");
const chapterSelectBox = document.getElementById('chapter-box');

textArea.innerHTML = line[i];
dialogueHistory.innerHTML = line[i];
// back.style.visibility = "hidden";

// Event Listeners //

forward.addEventListener('click', function(){
  lineChange("forward");
});

// back.addEventListener('click', function(){
//   lineChange("back");
// });
home.addEventListener('click', function(){
  confirmation_box_display('home');
});

confimrationButtonNo.addEventListener('click', function(){
  confirmation_box_display('no');
});

confirmationButtonYes.addEventListener('click', main_menu);

dialogueHistoryExit.addEventListener('click', function(){
  dialogueHistoryBox.style.visibility = "hidden";
});

logButton.addEventListener('click', function(){
  dialogueHistoryBox.style.visibility = "visible";
});

credits.addEventListener('click', function(){
  mainMenuButtons.forEach (button =>{
    button.style.opacity = "0%";
    button.addEventListener('transitionend', ()=>{
      mainMenuBox.style.width = "0%";
      button.style.visibility = "hidden";
    });
  })
 
  gameArea.style.background = "#000000";
});
chapterSelect.addEventListener('click', function(){
  mainMenuButtons.forEach (button =>{
    button.style.opacity = "0%";
    button.addEventListener('transitionend', ()=>{
      mainMenuBox.style.width = "0px";
      button.style.visibility = "hidden";
      mainMenuBox.addEventListener('transitionend', ()=>{
        chapterSelectBox.style.opacity = "100%";
        chapterSelectBox.style.visibility = "visible";
      });
    });
  });
});

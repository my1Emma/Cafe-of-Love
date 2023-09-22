// functions //
function lineChange(direction){
  if (direction == "forward"){
    i ++;
    textArea.innerHTML = chapter.line[i];
    speakerArea.innerHTML = chapter.speaker[i];
    dialogue_history_add();
  } 
  // If textArea[i] out of range, then one of the buttons will be hidden and not interactive // 
  if (i >= chapter.line.length){
    document.getElementById(direction).style.visibility = "hidden";
    textArea.innerHTML = "No lines here!!";
    speakerArea.innerHTML = "Narrator";
  } 
  else { 
    // If textArea[i] in range, then the buttons are visible and interactive //
    forward.style.visibility = "visible";
  }

  sprite_check();
}
function confirmation_box_display(activator){
  if (activator == "home"){
    confirmationBox.style.top = "20%";
    confirmationBox.style.opacity = "100%"
    confirmationBox.style.visibility = "visible";
    GAME_SCENE.forEach(element => {
      element.style.filter = "blur(1.5px) grayscale(10%)";
    });
    forward.disabled = true;
    logButton.disabled = true;

    dialogueHistoryBox.style.visibility = "hidden";



  } else if (activator == "no"){
    confirmationBox.style.top = "10%";
    confirmationBox.style.opacity = "0%"
    confirmationBox.addEventListener('transitionend', () =>{
      confirmationBox.visibility = "hidden";
    });
    GAME_SCENE.forEach(element => {
      element.style.filter = "none";
    });
    forward.disabled = false;
    logButton.disabled = false;
  }
}
function main_menu(){
  chapter = null;
  i = 0;
  // GAME_SCENE is a list of all the game_scene elements
  // loop through each element in the list and apply the 
  // style properties that you want
  
  GAME_SCENE.forEach(thing => {
    thing.style.opacity = "0%";
    // thing.addEventListener('transitionend', () =>{
    thing.style.visibility = "hidden";
    thing.style.filter = "none";
    // });
  })
  // gameArea.style.background = "url('placeholders/card_still_full1_3296_evolution.webp') center/cover";
  confirmationBox.style.visibility = "hidden";
  mainMenuBox.style.width = "20%";
  // mainMenuBox.addEventListener('transitionend', () =>{
  mainMenuButtons.forEach(button => {
  button.style.opacity =  "100%";
  button.style.visibility = "visible";
    // });
  });
  
}
function sprite_check(){
  if (i >= 2){
    RIGHT_SPRITE.src = "placeholders/sprites/koga/koga_munch.png";
  }
  else if (i >= 1 ){
    RIGHT_SPRITE.src = "placeholders/sprites/tsukasa/tsukasa_neutral.png";
  }
}
function dialogue_history_add(){
  if (i < line.length){
    // Add Speaker to Box

    let speakerLine = document.createElement("h3");
    let speakerLineNode = document.createTextNode(speaker[i]);
    speakerLine.appendChild(speakerLineNode)
    dialogueHistoryBox.appendChild(speakerLine);

    // Add Dialogue to Box
    let logLine = document.createElement("p");
    let node = document.createTextNode(line[i]);
    logLine.appendChild(node);
    dialogueHistoryBox.appendChild(logLine);
  }
}
function loadChapter(selection){
  switch (selection) {
    case 1:
      chapter = ch1;
      break;
    case 2:
      chapter = ch2;
      break;
    case 3:
      chapter = ch3;
      break;
  }
  chapterSelectBox.style.opacity = "0%";
  // chapterSelectBox.addEventListener('transitionend', ()=>{
  chapterSelectBox.style.visibility = "hidden";
  forward.disabled = false;
  textArea.innerHTML = chapter.line[i];
  // });
  speakerArea.innerHTML = chapter.speaker[i];
  GAME_SCENE.forEach(element => {
    if (element == GAME_SCENE[1] || element == GAME_SCENE[5] || element == GAME_SCENE[6] ){
      element.style.opacity = "100%";
      return;
    }
    element.style.visibility = "visible";
    element.style.opacity = "100%";
    
    // element.addEventListener('transitionend', ()=>{
    //   element.style.opacity = "100%";
    // });
  });
  // });
  // textArea.innerHTML = chapter.line[i];
  // speakerArea.innerHTML = chapter.speaker[i];
  // GAME_SCENE.forEach(element => {
  //   element.style.visibility = "visible";
  //   element.style.opacity = "100%";
    
  //   // element.addEventListener('transitionend', ()=>{
  //   //   element.style.opacity = "100%";
  //   // });
  // });

}
// Lists Variables //

let line = ["Say, Tsukasa, do you have any idea where the bread supply went?", "I'm not quite sure to be honest...", "mm...nomnom...munch..", "Adding another line", "Yadaydayada"];
let i = 0;
let forward = document.getElementById("forward");
let speaker = ["Tsumugi", "Tsukasa", "Koga", "Arashi", "Shu"];
let speakerArea = document.getElementById("speaker");
let speakerHistory = document.getElementById("speaker-history");
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
var chapter;
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
const music = document.getElementById("audio");
const ch1Box = document.getElementById("chapter1-box");
const ch2Box = document.getElementById("chapter2-box");
const ch3Box = document.getElementById("chapter3-box");


const ch1 = {
  line : ["Hiii", "Oh my..."],
  speaker : ["Yuta", "Tsumugi"]
};

const ch2 = {
  line: ["This is chapter 2 lol", "Please work..."],
  speaker: ["Tsukasa", "Koga"]
};
const ch3 = {
  line: ["This is chapter 3 lol", "Please work..."],
  speaker: ["Mama", "Hinata"]
};


// Initialized Text

// textArea.innerHTML = chapter.line[i];
dialogueHistory.innerHTML = line[i];
// speakerHistory.innerHTML = speaker[i];
// speakerArea.innerHTML = chapter.speaker[i];
// Event Listeners //

forward.addEventListener('click', function(){
  lineChange("forward");
});
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
    // button.addEventListener('transitionend', ()=>{
    mainMenuBox.style.width = "0%";
    button.style.visibility = "hidden";
    // });
  })
 
  gameArea.style.background = "#000000";
});

chapterSelect.addEventListener('click', function(){
  mainMenuButtons.forEach (button =>{
    button.style.opacity = "0%";
    // button.addEventListener('transitionend', ()=>{
      mainMenuBox.style.width = "0px";
    button.style.visibility = "hidden";
      // mainMenuBox.addEventListener('transitionend', ()=>{
    chapterSelectBox.style.opacity = "100%";
    chapterSelectBox.style.visibility = "visible";
      // });
    // });
  });
});

ch1Box.addEventListener('click', function(){
  loadChapter(1);
});
ch2Box.addEventListener('click', function(){
  loadChapter(2);
});
ch3Box.addEventListener('click', function(){
  loadChapter(3);
});
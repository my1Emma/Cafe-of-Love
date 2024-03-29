// Chapter Objects // 
const ch1 = {
  name: "ch1",
  line : [],
  speaker : []
};
const ch2 = {
  name: "ch2",
  line: [],
  speaker: []
};
const ch3 = {
  name: "ch3",
  line: [],
  speaker: []
};


// functions //
function lineChange(direction){
  if (direction == "forward"){
    i++;
    speakerArea.innerHTML = chapter.speaker[i];
    textArea.innerHTML = chapter.line[i];
    dialogue_history_add();
  } 
  // If textArea[i] out of range, then player cannot advance // 
  if (i >= chapter.line.length){
    document.getElementById(direction).style.visibility = "hidden";
    textArea.innerHTML = "End of Chapter!";
    speakerArea.innerHTML = "";
  } 
  else { 
    // If textArea[i] in range, then player can advance //
    forward.style.visibility = "visible";
  }

  sprite_check();
}
function loadText(currentChapter){
  for (let i = 0; i < fullScript.length; i++){
    chapters[currentChapter].line.push(fullScript[i].split(":")[1]);
    chapters[currentChapter].speaker.push(fullScript[i].split(":")[0]);
 
  }
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
    settingsBox.style.visibility = "hidden";



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
  confirmationBox.style.visibility = "hidden";
  mainMenuBox.style.width = "20%";
  // mainMenuBox.addEventListener('transitionend', () =>{
  mainMenuButtons.forEach(button => {
  button.style.opacity =  "100%";
  button.style.visibility = "visible";
    // });
  });
  textArea.innerHTML = "";
}
function sprite_check(){ 
  // Sprite changes
  if (i >= 2){
    RIGHT_SPRITE.src = "placeholders/sprites/koga/koga_munch.png";
  }
  else if (i >= 1 ){
    RIGHT_SPRITE.src = "placeholders/sprites/tsukasa/tsukasa_neutral.png";
  }
}
function dialogue_history_add(){
  // Appending current line and speaker to Dialogue History
  if (i < chapter.line.length){
    // Add Speaker to Box

    let speakerLine = document.createElement("h3");
    let speakerLineNode = document.createTextNode(chapter.speaker[i]);
    speakerLine.appendChild(speakerLineNode)
    speakerLine.classList.add("new-speaker");
    dialogueHistoryBox.appendChild(speakerLine);

    // Add Dialogue to Box
    let logLine = document.createElement("p");
    let node = document.createTextNode(chapter.line[i]);
    logLine.appendChild(node);
    logLine.classList.add("new-dialogue");
    logLine.style.fontFamily = textArea.style.fontFamily;
    dialogueHistoryBox.appendChild(logLine);
  }
}
function loadChapter(selection){
  // Resetting the Line Index
  switch (selection) {
    case 1:
      chapter = ch1;
      console.log("Chapter 1 Selected.");
      break;
    case 2:
      chapter = ch2;
      console.log("Chapter 2 Selected.");
      break;
    case 3:
      chapter = ch3;
      console.log("Chapter 3 Selected.");
      break;
  }


  chapterSelectBox.style.opacity = "0%";
  chapterSelectBox.style.visibility = "hidden";
  forward.disabled = false;
  
  textArea.innerHTML = chapter.line[i];
  
  speakerArea.innerHTML = chapter.speaker[i];
  dialogueHistory.innerHTML = chapter.line[i];
  speakerHistory.innerHTML = chapter.speaker[i];
  GAME_SCENE.forEach(element => {
    if (element == GAME_SCENE[1] || element == GAME_SCENE[6] || element == GAME_SCENE[7]|| element == GAME_SCENE[2] ){
      element.style.opacity = "100%";
      return;
    }
    element.style.visibility = "visible";
    element.style.opacity = "100%";
    forward.style.visibility = "visible";
  });
  logButton.disabled = false;

}

// Lists, Variables //

let i = 0;
let forward = document.getElementById("forward");
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
let settings = document.getElementById("settings");
let settingsBox = document.getElementById("settings-box");
let logButton = document.getElementById("log");
const exampleText = document.getElementById("example-text");
let fontChange = document.getElementById("legible-font");
let lines = [];
let names = [];
let fullScript = [];

const dialogueHistoryExit = document.getElementById("dialogue-exit");
const settingsExit = document.getElementById("settings-exit");
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
const ch1Box = document.getElementById("chapter1-box");
const ch2Box = document.getElementById("chapter2-box");
const ch3Box = document.getElementById("chapter3-box");


fontChange.addEventListener("change", function(){
  if (fontChange.checked){
    document.querySelectorAll("p").forEach (element =>{
      element.style.fontFamily = "Times New Roman";
    });

  } else{
    document.querySelectorAll("p").forEach (element =>{
      element.style.fontFamily = "Caveat";
    });
  }

  
});
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

settingsExit.addEventListener('click', function(){
  settingsBox.style.visibility = "hidden";
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

settings.addEventListener('click', function(){
  settingsBox.style.visibility = "visible";
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

let scripts = ["ch1_script.txt", "ch2_script.txt", "ch3_script.txt"];
chapters = [ch1,ch2,ch3];

scripts.forEach(element =>{
  fetch(element)
  .then(response => response.text())
  .then(text => {
    fullScript = (text.split("\n"));
    loadText(scripts.indexOf(element));
  });
});
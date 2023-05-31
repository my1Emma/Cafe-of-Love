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
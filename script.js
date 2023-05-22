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
}
// Lists and Variables //
let line = ["Ngahhh Oshi-san looks so pretty from this angle...", "I think he might just be da prettiest in da world!", "I hope that he's proud of us, of Valkyrie-- we've come so far..."];
let i = 0
let forward = document.getElementById("forward");
let back = document.getElementById("back")
let textArea = document.getElementById("script");

textArea.innerHTML = line[i];

// Event Listeners //

forward.addEventListener('click', function(){
  lineChange("forward");
});

back.addEventListener('click', function(){
  lineChange("back");
});


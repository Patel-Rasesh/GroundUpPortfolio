// A. For water

// 1. Capture button
var buttonWater = document.getElementById("ID-water-button");
var captionWater = document.getElementById("ID-water-caption");
var toggleWater = 1;
buttonWater.addEventListener("click", function(){
    
    // 2. When clicked, change the background image and unhide the caption
    if (toggleWater == 2){
        toggleWater = 1;
        captionWater.style.visibility = "hidden";
        buttonWater.style.backgroundImage = "url(../images/About/Water-1.jpeg)";
    }
    else{
        toggleWater = 2;
        captionWater.style.visibility = "visible";
        buttonWater.style.backgroundImage = "none";
    }
});

// B. For food
// 1. Capture button
var buttonFood = document.getElementById("ID-food-button");
var captionFood = document.getElementById("ID-food-caption");
var toggleFood = 1;
buttonFood.addEventListener("click", function(){
    
    // 2. When clicked, change the background image and unhide the caption
    if (toggleFood == 2){
        toggleFood = 1;
        captionFood.style.visibility = "hidden";
        buttonFood.style.backgroundImage = "url(../images/About/Food-1.jpeg)";
    }
    else{
        toggleFood = 2;
        captionFood.style.visibility = "visible";
        buttonFood.style.backgroundImage = "none";
    }
});

// C. For sweat
// 1. Capture button
var buttonSweat = document.getElementById("ID-sweat-button");
var captionSweat = document.getElementById("ID-sweat-caption");
var toggleSweat = 1;
buttonSweat.addEventListener("click", function(){
    
    // 2. When clicked, change the background image and unhide the caption
    if (toggleSweat == 2){
        toggleSweat = 1;
        captionSweat.style.visibility = "hidden";
        buttonSweat.style.backgroundImage = "url(../images/About/Sweat-1.jpeg)";
    }
    else{
        toggleSweat = 2;
        captionSweat.style.visibility = "visible";
        buttonSweat.style.backgroundImage = "none";
    }
});

// D. For brain
// 1. Capture button
var buttonBrain = document.getElementById("ID-brain-button");
var captionBrain = document.getElementById("ID-brain-caption");
var toggleBrain = 1;
buttonBrain.addEventListener("click", function(){
    
    // 2. When clicked, change the background image and unhide the caption
    if (toggleBrain == 2){
        toggleBrain = 1;
        captionBrain.style.visibility = "hidden";
        buttonBrain.style.backgroundImage = "url(../images/About/Brain-1.jpeg)";
    }
    else{
        toggleBrain = 2;
        captionBrain.style.visibility = "visible";
        buttonBrain.style.backgroundImage = "none";
    }
});



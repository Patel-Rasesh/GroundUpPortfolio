// var button = document.getElementsByClassName("");
var button = document.getElementById("ID-button-div");
console.log(button);
console.log("Script has been envoked");
var image = document.getElementById("ID-image");
console.log(image);
// Fetch nextsibling with index as it is also going to be an array

button.addEventListener("click", function(){
    if (image.style.display == "block"){
        image.style.display = "none";
        button.style.height = "200px";
        button.style.transition = "0.8s";
        button.style.backgroundColor = "orange";
    }
    else{
        image.style.display = "block";
        button.style.height = "50px";
        button.style.transition = "0.8s";
        button.style.backgroundColor = "yellow";
    }
});
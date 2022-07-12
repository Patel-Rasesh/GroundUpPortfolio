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
    }
    else{
        image.style.display = "block";
    }
});

// var index;
// for(index = 0; index<aboutButton.length; index++){
//     aboutButton[index].addEventListener("click", function(){
//         this.classList.toggle("active");
//         var aboutButtonExpanded = this.nextElementSibling;
//         // console.log(aboutButtonExpanded);
//         parentElement = document.getElementById("ID-carousel");
//         // console.log(parentElement);
//         if (aboutButtonExpanded.style.display == "block"){
//             aboutButtonExpanded.style.display = "none";
//             // TODO - Put a relative height
//             parentElement.style.height = "107px";
//         }else{
//             aboutButtonExpanded.style.display = "block";
//             parentElement.style.height = "400px";
//         }
//     });
// }
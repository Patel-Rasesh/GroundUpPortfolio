var aboutButton = document.getElementsByClassName("about-button");
var index;
ScrollReveal({ 
    reset: true,
    distance: '20px',
    duration: 900,
    delay: 200
   });
for(index = 0; index<aboutButton.length; index++){
    aboutButton[index].addEventListener("click", function(){
        this.classList.toggle("active");
        // if (index == 0){
        var aboutPhotoContainer = document.getElementById("ID-about-water-container");
        // }
        // else if (index == 1){
        //     var aboutPhotoContainer = document.getElementById("ID-about-food-container");
        // }
        if (aboutPhotoContainer.style.display == "block"){
            aboutPhotoContainer.style.display = "none";
        }
        else{
            // TODO - Reclicking does not work
            // ScrollReveal().reveal(aboutPhotoContainer, { delay: 200 });
            aboutPhotoContainer.style.display = "block";
        }
    });
}
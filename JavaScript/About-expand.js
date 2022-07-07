var aboutButton = document.getElementsByClassName("about-button");

var index;
for(index = 0; index<aboutButton.length; index++){
    aboutButton[index].addEventListener("click", function(){
        this.classList.toggle("active");
        var aboutButtonExpanded = this.nextElementSibling;
        console.log(aboutButtonExpanded);
        parentElement = document.getElementById("ID-carousel");
        console.log(parentElement);
        if (aboutButtonExpanded.style.display == "block"){
            aboutButtonExpanded.style.display = "none";
            // TODO - Put a relative height
            parentElement.style.height = "107px";
            console.log("Block->None");
        }else{
            aboutButtonExpanded.style.display = "block";
            parentElement.style.height = "400px";
            console.log("None->Block");
        }
    });
}
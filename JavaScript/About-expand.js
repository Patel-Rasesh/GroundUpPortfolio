var aboutButtonClass = document.getElementsByClassName("about-button-class");
var index;
for(index = 0; index<aboutButtonClass.length; index++){
    aboutButtonClass[index].addEventListener("click", function(){
        this.classList.toggle("active");
        var aboutButtonExpanded = this.nextElementSibling;

        var currentButtonClass = this;    
        // currentButtonClass.style.backgroundColor 
    
        var aboutButton = document.getElementById("ID-about-button");
        var buttonCaption = document.getElementById("ID-button-caption");
        if (aboutButtonExpanded.style.display == "flex"){
            aboutButtonExpanded.style.display = "none";
            aboutButton.style.height = "150px";
            buttonCaption.style.display = "block";
            
        }else{
            aboutButtonExpanded.style.display = "flex";
            aboutButton.style.height = "1px";
            buttonCaption.style.display = "none";
        }
    });
}
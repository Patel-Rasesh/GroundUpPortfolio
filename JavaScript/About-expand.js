var aboutButton = document.getElementsByClassName("about-button-class");

var index;
for(index = 0; index<aboutButton.length; index++){
    aboutButton[index].addEventListener("click", function(){
        this.classList.toggle("active");
        var aboutButtonExpanded = this.nextElementSibling;
        console.log(aboutButtonExpanded);
        // parentElement = document.getElementById("ID-carousel");
        // // console.log(parentElement);
        if (aboutButtonExpanded.style.display == "flex"){
            aboutButtonExpanded.style.display = "none";
            console.log("Block->None");
            // TODO - Put a relative height
            // parentElement.style.height = "107px";
        }else{
            aboutButtonExpanded.style.display = "flex";
            aboutButtonExpanded.style.opacity = '1';
            console.log("None->Block");
            // parentElement.style.height = "400px";
        }
    });
}
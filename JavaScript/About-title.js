var aboutButton = document.getElementsById("ID-about-button");
console.log(aboutButton);
var index;
for(index = 0; index<aboutButton.length; index++){
    aboutButton[index].addEventListener("click", function(){
        // const bgColor = aboutButton.style.backgroundColor;
        aboutButton.style.backgroundImage =  "url(../images/ProjectB.png)";
    });
}
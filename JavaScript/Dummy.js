var buttonMoreItems = document.getElementById("ID-more-items-button");
console.log(buttonMoreItems);

var additionalProjects = document.getElementById("ID-extended-container");
buttonMoreItems.addEventListener("click", function(){
    buttonMoreItems.style.display = "none";
    additionalProjects.style.display = "flex";
});
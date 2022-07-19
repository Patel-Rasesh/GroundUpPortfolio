const nameBox = document.querySelector('.name-text-box');
const messageBox = document.getElementById('message-box');

const trashButton = document.querySelector('.clear');
const sendButton = document.querySelector('.send');

trashButton.addEventListener("click", function(){
    nameBox.style.border = "none";
    messageBox.style.border = "none";
    nameBox.value = '';
    messageBox.value = '';
});

sendButton.addEventListener("click", function(){
    // If nameBox and messageBox are already empty
    if (nameBox.value == '' && messageBox.value == ''){
        nameBox.style.border = "thin solid red";
        messageBox.style.border = "thin solid red";
    }
    else if (nameBox.value == ''){
        console.log("Please enter your name before sending!");
        nameBox.style.border = "thin solid red";
    }
    else if(messageBox.value == ''){
        console.log("Please fill the message before sending!");
        messageBox.style.border = "thin solid red";
    }
    else{
        nameBox.style.border = "none";
        messageBox.style.border = "none";
        var toast = document.getElementById("toast");
        nameBox.value = '';
        messageBox.value = '';
        toast.style.visibility = 'visible'
        setTimeout(function(){ toast.style.visibility = toast.style.visibility.replace("visible", "hidden"); }, 1500);
    }
});
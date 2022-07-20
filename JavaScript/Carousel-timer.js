const trackArray = document.querySelector('.carousel__track');
const horses = Array.from(trackArray.children);
const nextButton = document.querySelector('.carousel__button--next');
const previousButton = document.querySelector('.carousel__button--previous');
const dotsArray = document.querySelector('.carousel__dots');
const dots = Array.from(dotsArray.children);

// 0a. Position horses - Each horse should be next to another horse
const horseWidth = horses[0].getBoundingClientRect().width;

const positionHorses = (horse, index) => {
    horse.style.left = horseWidth * index + 'px';
}
horses.forEach(positionHorses);
// var amountToMove = 0;

// 0b. Function to move horses in either direction
const moveHorses= (trackArray, currentHorse, targetHorse) =>{
    // amountToMove += 496.8;
    // if (amountToMove > 993.6){
    //     amountToMove = 0;
    // }
    if (targetHorse == null){
        targetHorse = horses[0];
    }
    const amountToMove = targetHorse.style.left;
    var tempAmountToMove = amountToMove+'px';
    trackArray.style.transform = 'translateX(-'+amountToMove+')';
    // trackArray.style.transform = 'translateX(-'+tempAmountToMove+')';
    currentHorse.classList.remove('current-horse');
    targetHorse.classList.add('current-horse');

}

// 0c. Function to move dots in the nagivation bar
const moveDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-horse');
    if(targetDot == null){
        targetDot = dots[0];
    }
    targetDot.classList.add('current-horse');
}

// 1. Click Next for image on the right
nextButton.addEventListener('click', nextClick);
function nextClick(){
    const currentHorse = trackArray.querySelector('.current-horse');
    const nextHorse = currentHorse.nextElementSibling;
    const currentDot = dotsArray.querySelector('.current-horse');
    const nextDot = currentDot.nextElementSibling;

    moveHorses(trackArray, currentHorse, nextHorse);
    moveDots(currentDot, nextDot);
}

// 2. Click Previous for image on the left
previousButton.addEventListener('click', previousClick);

function previousClick(){
    const currentHorse = trackArray.querySelector('.current-horse');
    const previousHorse = currentHorse.previousElementSibling;
    const currentDot = dotsArray.querySelector('.current-horse');
    const previousDot = currentDot.previousElementSibling;

    moveHorses(trackArray, currentHorse, previousHorse);
    moveDots(currentDot, previousDot);
}

// Automatic rotation of carousel
setInterval(function(){
    nextButton.click();
}, 3000);


// 3. Go to the respective image when clicked on any dot
dotsArray.addEventListener('click', event=>{

    targetDot = event.target.closest('button');
    // We are not entering the function, if the click is not registered on the button    
    if (!targetDot) return;

    const targetIndex = dots.findIndex(sampleDot => sampleDot === targetDot);
    targetHorse = horses[targetIndex];

    currentHorse = trackArray.querySelector('.current-horse');
    currentDot = dotsArray.querySelector('.current-horse');

    moveHorses(trackArray, currentHorse, targetHorse);
    moveDots(currentDot, targetDot);
})
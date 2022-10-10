// TODO - Link this with Leetcode API
let submissionDate = new Date("10/09/2022");
// TODO - Link this with Watch API
let jogginDate = new Date("10/07/2022");

let today = new Date();
const dayFraction = (1000*60*60*24);

// For LEETCODE card
const last_leetcode = document.querySelector('.timestamp');

let diff_LC = today.getTime() - submissionDate.getTime();
let days_LC = Math.round(diff_LC/dayFraction);
last_leetcode.innerHTML = days_LC +" days ago";

// For Run card
const last_run = document.querySelector('.jogging-card .date');
let diff_run = today.getTime() - jogginDate.getTime();
let days_run = Math.round(diff_run/dayFraction);
last_run.innerHTML = days_run +" days ago";
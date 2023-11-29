$(document).ready(function () {
    console.log("I am working");

 //jQuery DOM variables
 const currentTime = $('#currentTime');

 // other variables
 let now;
 let intervalId;

 // Functions
 function displayDateTime() {
    intervalId = setInterval(newTime, 1000);
 }
 function newTime() {
    now = dayjs().format('MMM D, YYYY') + " at " +  dayjs().format('hh:mm:ss a');
    currentTime.text(`Current time and date: ${now}`)
 }
 
displayDateTime();

});
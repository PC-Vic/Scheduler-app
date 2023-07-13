var containerFluid = document.querySelector(".container-fluid")
var saveButtons = document.querySelectorAll('.saveBtn');
var presentDay = document.querySelector("#currentDay")

var hour9Div = document.getElementById('hour-9')
var hour10Div = document.getElementById('hour-10')
var hour11Div = document.getElementById('hour-11')
var hour12Div = document.getElementById('hour-12')
var hour13Div = document.getElementById('hour-13')
var hour14Div = document.getElementById('hour14')
var hour15Div = document.getElementById('hour-15')
var hour16Div = document.getElementById('hour-16')
var hour17Div = document.getElementById('hour-17')

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  

  saveButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var timeBlockId = button.parentElement.id;
      var userInput = button.previousElementSibling.value;
      localStorage.setItem(timeBlockId, userInput);
    })
  })

  var currentTime = dayjs().format("dddd, MMMM D YYYYY")
  console.log(currentTime);
  presentDay.textContent = currentTime
  



  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?




});


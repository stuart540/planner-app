// The app should:

// * Display the current day at the top of the calender when a user opens the planner.
// PC use moment to access the current day subtitle
 
// * Present timeblocks for standard business hours when the user scrolls down.
// PC create a 9 row table template from bootstrap
/* <div class="table-responsive">
          <table class="table table-bordered custom-table"></table> */
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// PC dynamically colour the background of the table according to the time from moment
 
// * Allow a user to enter an event when they click a timeblock
// PC Use jquery to dynamically update the table contents from the user

// * Save the event in local storage when the save button is clicked in that timeblock.
// PC set a button event listener for the save function, when clicked, the information will be stored to client local storage

// * Persist events between refreshes of a page

// save reference to important DOM elements
var dateDisplayEl = $('#currentDay');


// handle displaying the time
function displayDate() {
  var rightNow = moment().format('dddd, MMMM Do');
  dateDisplayEl.text(rightNow);
}


setInterval(displayDate, 1000);

// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {          // a HoF that uses other functions to apply filters to the image
  for (var r = 0; r < image.length; r++) {      
    var row = image[r];

    for (var c = 0; c < row.length; c++) {
      var rgbString = row[c];
      rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      row[c] = rgbString;
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground() {
  var backgroundColor = image[0][0]

  for (var r = 0; r < image.length; r++) {
    var row = image[r];

    for (var c = 0; c < row.length; c++) {
      var rgbString = row[c];
      rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      row[c] = rgbString;
    }
  }
}
// TODO 5: Create the keepInBounds function
function keepInBounds(inside) {   // another filter to pass thru applyFilter 
  if (inside <= 0) {
    return 0;
  } else if (inside > 255) {
    return 255;
  } else return inside;
}
// TODO 3: Create reddify function
function reddify(imageArray) { // filter function 
  imageArray[RED] = 200;
}
// TODO 6: Create more filter functions
function decreaseBlue(decrease) {
  decrease[BLUE] = keepInBounds(decrease[BLUE] - 50); // subtracts 50 from blue to get a different color 
}

function increaseGreenByBlue(increase) {
  increase[GREEN] = keepInBounds(increase[BLUE] + increase[GREEN]); // Green filter is changed 
}
// CHALLENGE code goes below here
// comments and explain what the functions do 
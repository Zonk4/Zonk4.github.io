/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  var KEY = {
    "LEFT" : 37,
    "RIGHT" : 39,
    "UP" : 38,
    "DOWN" : 40,
    }

    var positionX = 0;
    var positonY = 0;
    var speedX = 0;
    var speedY = 0;

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
     if (event.which === KEY.LEFT) {   
      console.log("LEFT Key Pressed"); 
      speedX = -5;
    }
    else if (event.which === KEY.RIGHT) { 
      console.log("RIGHT Key Pressed");
      speedX = 5;
    }                                // Tells that which arrow key is pressed in consle 
    else if (event.which === KEY.UP) {
      console.log("UP Key Pressed");
      speedY = -5;
    }
    else if (event.which === KEY.DOWN) {
      console.log("DOWN Key Pressed");
      speedY = 5;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem() {
    positionX += speedX;
    positionY += speedY;
  }
  
  function redrawGameItem() {
    $("#walker").css("top", positionY);    // draw the box in the new location, positionX pixels away from the "left"
    $("#walker").css("left", positionX);    // draw the box in the new location, positionX pixels away from the "left"
  }
  
  
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}

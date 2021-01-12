/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let int_time = parseInt(time.split(":"));
  if (int_time < 12) {
    return "Good Morning";
  } else if (int_time > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}

function displayMessage(hour){
  let greeting = document.getElementById("greeting");
  greeting.innerText = hour; 
}

/* Write your implementation of displayMessage() */

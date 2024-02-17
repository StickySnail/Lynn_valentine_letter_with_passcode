const inputs = document.querySelectorAll("input"),
  button = document.querySelector("button");

// iterate over all inputs
inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    // This code gets the current input element and stores it in the currentInput variable
    // This code gets the next sibling element of the current input element and stores it in the nextInput variable
    // This code gets the previous sibling element of the current input element and stores it in the prevInput variable
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;

    // if the value has more than one character then clear it
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }
    // if the next input is disabled and the current value is not empty
    //  enable the next input and focus on it
    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // if the backspace key is pressed
    if (e.key === "Backspace") {
      // iterate over all inputs again
      inputs.forEach((input, index2) => {
        // if the index1 of the current input is less than or equal to the index2 of the input in the outer loop
        // and the previous element exists, set the disabled attribute on the input and focus on the previous element
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          prevInput.focus();
        }
      });
    }
    //if the fourth input( which index number is 3) is not empty and has not disable attribute then
    //add active class if not then remove the active class.
    if (!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active");
      button.focus();
      return;
    }
    button.classList.remove("active");
  });
});

let messageContainer = document.getElementsByClassName('message-container')[0];
button.addEventListener('click', function (event) {
  // Prevent the form from being submitted.
  event.preventDefault;
  let code = "";
  inputs.forEach((input) => {
    code += String(input.value);
  });

  if (code === '1111') {
    // hide passcode div
    let passcode = document.getElementsByClassName('passcode-container')[0];

    // Gradually hide the element
    let opacity = 1; // Start with full opacity
    let timer = setInterval(function () {
      if (opacity <= 0) {
        clearInterval(timer);
        passcode.style.display = 'none'; // Hide the element after it's fully transparent

        // show author
        // show message bleow message section
        let author = document.getElementsByClassName('author')[0];
        author.style.display = 'block';
        messageContainer.style.display = 'block';
      }
      passcode.style.opacity = opacity;
      opacity -= 0.01; // Decrease the opacity
    }, 10); // Run every 10 milliseconds
  } else {
    alert('Wrong Code! Try again :) \uD83D\uDE17');
    refershpage();
  }
});

function refershpage() {
  // Reload banner gif to force load  
  location.reload();
}

//messages
// Get all the messages and the next button
var messages = Array.from(document.querySelectorAll('.message'));
var nextButton = document.querySelector('.button-next');

// Initialize a counter to keep track of the current message
var currentMessageIndex = 0;

// Function to show the next message
function showNextMessage() {
  // Hide the current message
  if (messages[currentMessageIndex]) {
    messages[currentMessageIndex].style.display = 'none';
  }

  // Increment the counter
  currentMessageIndex++;
  console.log(currentMessageIndex);
  // If there is a next message, show it
  if (currentMessageIndex < messages.length) {
    messages[currentMessageIndex].style.display = 'block';
  } else {
    // If there are no more messages, hide the button
    nextButton.style.display = 'none';
    messageContainer.style.display = 'none';
  }
}

nextButton.addEventListener('click', showNextMessage);

// Show the first message initially
if (messages[0]) {
  messages[0].style.display = 'block';
}


//focus the first input which index is 0 on window load
window.addEventListener("load", () => inputs[0].focus());

// Choloate Rain
document.querySelectorAll('.drop').forEach(drop => {
  drop.style.animationDuration = `${Math.random() * 2 + 3.5}s`;
  drop.style.animationDelay = `${Math.random() * 5}s`;
  drop.style.width = `${Math.random() * 100}px`;
  drop.style.left = `${Math.random() * 100}vw`; // Randomize the horizontal
});
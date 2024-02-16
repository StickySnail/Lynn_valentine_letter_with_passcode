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
      return;
    }
    button.classList.remove("active");
  });
});

button.addEventListener('click', function (event) {
  // Prevent the form from being submitted.
  event.preventDefault;
  let code = "";
  inputs.forEach((input) => {
    code += String(input.value);
    console.log(code);
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

        // show message div
        let message = document.getElementsByClassName('message')[0];
        let author = document.getElementsByClassName('author')[0];
        message.style.display = 'block';
        author.style.display = 'block'; 
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

let messages = Array.from(document.getElementsByClassName('message'));
let buttons = Array.from(document.getElementsByClassName('button-next'));
buttons.forEach((button, index) => {
  button.addEventListener('click', function () {
    messages[index].classList.remove('active');
    if (index < messages.length - 1) {
      messages[index + 1].classList.add('active');
    }
  });
});

//focus the first input which index is 0 on window load
window.addEventListener("load", () => inputs[0].focus());

// Choloate Rain
document.querySelectorAll('.drop').forEach(drop => {
  drop.style.animationDuration = `${Math.random() * 2 + 2}s`;
  drop.style.animationDelay = `${Math.random() * 5}s`;
  drop.style.width = `${Math.random() * 100}px`;
  drop.style.left = `${Math.random() * 100}vw`; // Randomize the horizontal
});
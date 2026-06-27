// Display element
const display = document.querySelector("#display");

// Sab buttons select karo
const buttons = document.querySelectorAll("button");

// Loop through buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const btnValue = button.textContent;

    // AC button → clear display
    if (button.id === "ac") {
      display.textContent = "";
    }
    // DE button → delete last character
    else if (button.id === "de") {
      display.textContent = display.textContent.slice(0, -1);
    }
    // Equal button → evaluate expression
    else if (button.id === "isequal") {
      try {
        display.textContent = eval(display.textContent); // 👈 basic eval
      } catch {
        display.textContent = "Error";
      }
    }
    // Otherwise → add button value to display
    else {
      display.textContent += btnValue;
    }
  });
});
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Numbers & operators
  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    display.textContent += key;
  }
  // Enter → calculate
  else if (key === "Enter") {
    try {
      display.textContent = eval(display.textContent);
    } catch {
      display.textContent = "Error";
    }
  }
  // Backspace → delete last char
  else if (key === "Backspace") {
    display.textContent = display.textContent.slice(0, -1);
  }
  // Escape → AC
  else if (key === "Escape") {
    display.textContent = "";
  }
});

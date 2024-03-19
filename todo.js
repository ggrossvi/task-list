//import "./css/styles.css";

function myFunction() {
  // Identifies the input element
  const input = document.getElementById("to-do-input");
  // Gets the value of the input element
  const inputValue = input.value;
  // Sets the content of the insert area
  document.getElementById("insert-area").innerHTML += `${inputValue}<br>`;
  // Resets the form
  input.value = ' ';
}

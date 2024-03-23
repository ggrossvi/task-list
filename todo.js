//import "./css/styles.css";

function myFunction() {
  // Identifies the to do input text element
  const input = document.getElementById("to-do-input");
  
  // Gets the value of the input element
  const inputValue = input.value;
  //create checkbox element
  let checkbox = document.createElement("input");
  // Assigning the attributes to created checkbox
  
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  // creating label for checkbox
  let label = document.createElement("label");
  // assigning attributes for the created label tag
  label.htmlFor = "id";

  // appending the created text to the created label tag
  //label.appendChild(document.createTextNode(inputValue));

  
  //div area to insert text into
  var divInsertArea = document.getElementById("insert-area");
  // Create a new text node with the input value
  var textNode = document.createTextNode(inputValue);

  // Create a new div to contain the checkbox and text
  var containerDiv = document.createElement("div");

  // Append the checkbox and text node to the container div
  containerDiv.appendChild(checkbox);
  containerDiv.appendChild(textNode);
  var inputCheckbox = divInsertArea.appendChild(containerDiv);
  input.value = "";
}

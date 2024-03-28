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
  const importantUrgent = document.getElementById("important-urgent");
  const importantNotUrgent = document.getElementById("important-not-urgent");
  const notImportantUrgent = document.getElementById("not-important-urgent");
  const notImportantNotUrgent = document.getElementById("not-important-not-urgent");



  // Create a new text node with the input value
  var textNode = document.createTextNode(inputValue);

  // Create a new div to contain the checkbox and text
  var containerDiv = document.createElement("div");

  // Append the checkbox and text node to the container div
  containerDiv.appendChild(checkbox);
  containerDiv.appendChild(textNode);

  //var inputCheckbox = divInsertArea.appendChild(containerDiv);

  // Get the select element
  var selectElement = document.getElementById("prioritySelect");

  // Get the selected option value
  var selectedValue = selectElement.value;

  /*
  if (selectedValue === "1") {
    importantUrgent.appendChild(containerDiv);
  }
  if (selectedValue ==="Important - Urgent") {
    importantUrgent.textContent = "This todo is important and urgent.";
    //importantUrgent.appendChild(containerDiv);
  }
  */

  console.log(selectedValue);

  switch(selectedValue) {
    case "1":
      // Get the paragraph element within the div
      var paragraphElement = importantUrgent.querySelector("p");
      // Append the containerDiv to the paragraph element
      paragraphElement.appendChild(containerDiv);
      break;
    case "2":
      // Get the paragraph element within the div
      var paragraphElement = importantNotUrgent.querySelector("p");
      // Append the containerDiv to the paragraph element
      paragraphElement.appendChild(containerDiv);
      break;
    case "3":
      // Get the paragraph element within the div
      var paragraphElement = notImportantUrgent.querySelector("p");
      // Append the containerDiv to the paragraph element
      paragraphElement.appendChild(containerDiv);
      break;
    case "4":
      // Get the paragraph element within the div
      var paragraphElement = notImportantNotUrgent.querySelector("p");
      // Append the containerDiv to the paragraph element
      paragraphElement.appendChild(containerDiv);
      break;
    default:
      console.log("Invalid priority selected");
  }



  input.value = "";
}

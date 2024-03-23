//import "./css/styles.css";

function myFunction() {
  // Identifies the input element
  const input = document.getElementById("to-do-input");
  
  // Gets the value of the input element
  const inputValue = input.value;
  //create checkbox element
  let checkbox = document.createElement("input");
  // Assigning the attributes to created checkbox
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "id";
  // creating label for checkbox
  let label = document.createElement("label");

  // assigning attributes for the created label tag
  label.htmlFor = "id";

  // appending the created text to the created label tag
  //label.appendChild(document.createTextNode(inputValue));

  // appending the checkbox and label to div
  
  var divInsertArea = document.getElementById("insert-area");
  var inputCheckbox = divInsertArea.appendChild(checkbox);

  // const paragraph = document.createElement("p");
  //  paragraph.appendChild(checkbox);
  // paragraph.appendChild(label);
  
  // divInsertArea.appendChild(checkbox);
  //divInsertArea.appendChild(paragraph);
  //divInsertArea.appendChild(document.createElement("br"));

  //var inputLabel = divInsertArea.appendChild(label);
  //divInsertArea.appendChild(label);
  //let brElement = document.createElement("br")
  //divInsertArea.appendChild(brElement);
  //divInsertArea.innerHTML += `${</br>}`;
  //insert.innerHTML += `${inputCheckbox}${inputLabel}<br>`;
  
  //divInsertArea.innerHTML += `${inputLabel}<br>`;

  // Sets the content of the insert area
  //document.getElementById("insert-area").innerHTML += `${inputValue}`;
  divInsertArea.innerHTML += `${inputValue}`;
  divInsertArea.innerHTML += `<br>`;
  
  // Resets the form
  input.value = "";
}

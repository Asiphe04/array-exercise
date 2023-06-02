//CREATE AN ARRAY and add values from HTML to array & display array Array on HTML
//CREATE AN ARRAY of Objects(person) and add 3 people, then display in browser (HTML)
let array1 = [];

function add() {
  let value = document.getElementById("input").value;
  array1.push(value);
  document.getElementById("output").innerHTML = array1;
}
// let people = [];
// function addInfo() {
//   let firstName = document.getElementById("firstName").value;
//   let lastName = document.getElementById("lastName").value;
//   let age = document.getElementById("age").value;

//   let newRow = document.createElement("tr");
//   let firstNameCell = document.createElement("td");
//   firstNameCell.textContent = firstName;
//   let lastNameCell = document.createElement("td");
//   lastNameCell.textContent = lastName;
//   let ageCell = document.createElement("td");

//   ageCell.textContent = age;
//   newRow.appendChild(firstNameCell);
//   newRow.appendChild(lastNameCell);
//   newRow.appendChild(ageCell);
//   document
//     .getElementById("table")
//     .getElementsByTagName("tbody")[0]
//     .appendChild(newRow);

// }
let people = [];

function addInfo() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;

  let person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  people.push(person);
  saveToLocalStorage();
  updateTable();

  // Clear input fields
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("age").value = "";
}

function saveToLocalStorage() {
  localStorage.setItem("people", JSON.stringify(people));
}

function loadFromLocalStorage() {
  let storedPeople = localStorage.getItem("people");
  if (storedPeople) {
    people = JSON.parse(storedPeople);
    updateTable();
  }
}

function updateTable() {
  let tableBody = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";

  for (let i = 0; i < people.length; i++) {
    let person = people[i];

    let newRow = document.createElement("tr");
    let firstNameCell = document.createElement("td");
    firstNameCell.textContent = person.firstName;
    let lastNameCell = document.createElement("td");
    lastNameCell.textContent = person.lastName;
    let ageCell = document.createElement("td");
    ageCell.textContent = person.age;

    newRow.appendChild(firstNameCell);
    newRow.appendChild(lastNameCell);
    newRow.appendChild(ageCell);

    tableBody.appendChild(newRow);
  }
}

// Load data from local storage when the page is loaded
loadFromLocalStorage();

function clearLocalStorage() {
  localStorage.removeItem("people");
  people = [];
  updateTable();
}

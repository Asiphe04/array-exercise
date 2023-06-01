//CREATE AN ARRAY and add values from HTML to array & display array Array on HTML
//CREATE AN ARRAY of Objects(person) and add 3 people, then display in browser (HTML)
let array1 = [];

function add() {
  let value = document.getElementById("input").value;
  array1.push(value);
  console.log(value);
  console.log(array1);
}

function addPerson() {}
let person = [
//   { id: 1, firsName: "Asiphe", lastName: "Ndimlana", age: 13 },
//   { id: 2, firsName: "Samkelo", lastName: "Mpokela", age: 21 },
//   { id: 3, firsName: "Zubair", lastName: "Matthee", age: 24 },
//   { id: 4, firsName: "Lisa", lastName: "Mbuwa", age: 20 },
//   { id: 5, firsName: "Ethan", lastName: "Oliver", age: 19 },
//   { id: 6, firsName: "Mufuniwa", lastName: "Mbedzi", age: 20 },
//   { id: 7, firsName: "Laeeq", lastName: "Majal", age: 18 },
//   { id: 8, firsName: "Liyabona", lastName: "Mxhalise", age: 12 },
//   { id: 9, firsName: "Inam", lastName: "Nkabi", age: 67 },
];
let dispperson = document.querySelector("table");
person.forEach((data) => {
  dispperson.innerHTML += `<table border="1" id="table">
    <tr id= "tbody">
    <td id="value">${data.firsName}</td>
    <td id="value">${data.lastName}</td>
    <td id="value">${data.age}</td>
</tr>
</table>
  `;
});
function addInfo() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  let newRow = document.createElement("tr");
 let firstNameCell = document.createElement("td");
  firstNameCell.textContent = firstName;
  let lastNameCell = document.createElement("td");
  lastNameCell.textContent = lastName;
  let ageCell = document.createElement("td");
  ageCell.textContent = age;
  newRow.appendChild(firstNameCell);
  newRow.appendChild(lastNameCell);
  newRow.appendChild(ageCell);
  document
    .getElementById("table")
    .getElementsByTagName("tbody")[0]
    .appendChild(newRow);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const tableBody = document.querySelector("#dataTable tbody");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.getElementById("gender").value;
    const foods = [];
    const foodCheckboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    foodCheckboxes.forEach((checkbox) => {
      foods.push(checkbox.value);
    });
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    // Check if any field is empty
    if (
      !firstName ||
      !lastName ||
      !address ||
      !pincode ||
      !gender ||
      foods.length < 2 ||
      !state ||
      !country
    ) {
      alert("All fields are mandatory. Please fill out all the fields.");
      return;
    }

    // Create a new table row
    const newRow = document.createElement("tr");

    // Insert data into the table row
    newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${foods.join(", ")}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;

    // Append the new row to the table
    tableBody.appendChild(newRow);

    // Clear the form fields
    form.reset();
  });
});

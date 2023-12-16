// JavaScript to handle form submission and update the table
document.getElementById('dataForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Create a new table row
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td>' + (document.getElementById('tableBody').childElementCount + 1) + '</td>' +
                       '<td>' + name + '</td>' +
                       '<td>' + email + '</td>';

    // Append the new row to the table
    document.getElementById('tableBody').appendChild(newRow);

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
});

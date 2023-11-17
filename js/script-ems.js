/*eslint-env browser*/

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let selectedTable = document.querySelector('#empTable');
let empCount = document.querySelector('#empCount');

// INITIAL EMPLOYEES
var employees = [];

if( localStorage.getItem('employees') !== null ) {
    employees = JSON.parse(localStorage.getItem('employees'));
}
else {
    employees = [[123, "George", 3255, "g@gmail.com", "Executive"],
    [ 234, "Christine", 3256, "c@gmail.com", "Engineering" ],
    [ 345, "Zak", 3257, "z@gmail.com", "Sales" ],
    [ 456, "Sally", 3258, "s@gmail.com", "Administrative" ]];
}

// LOAD EVENT
window.addEventListener("load", (e) => {
    buildGrid();
    addEmployee();
    deleteEmployee();
});

function buildGrid() {
    // SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
    let count = 0;

    // CLEAR THE TABLE EVERYTIME AND BUILD GRID AFRESH, JUST TO AVOID ADDING THE EMPLOYEES ARRAY REPEATEDLY
    selectedTable.lastElementChild.remove();

    let tbody = document.createElement('tbody');

      employees.forEach(emp => {

        let row = tbody.insertRow();
        Object.values(emp).forEach(text => {

            let cell = row.insertCell();
            cell.innerHTML = text;

        })

        let cellDelete = row.insertCell();
        cellDelete.className = 'btn btn-sm btn-danger delete'; 
        cellDelete.innerHTML = 'X';
          
      });

        // BIND THE TBODY TO THE EMPLOYEE TABLE
        selectedTable.appendChild(tbody);

        // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
        count = employees.length;
        empCount.value = count;

  }


function addEmployee() {
// ADD EMPLOYEE
   form.addEventListener('submit', (e)=> { 

        // PREVENT FORM SUBMISSION
        e.preventDefault();

        // GET THE VALUES FROM THE TEXT BOXES
        let newId = document.querySelector('#id').value;
        let newName = document.querySelector('#name').value;
        let newExtn = document.querySelector('#extension').value;
        let newEmail = document.querySelector('#email').value;
        let newDept = document.querySelector('#department').value;

        // CREATE NEW EMPLOYEE ARRAY USING THE VALUES EXTRACTED FROM THE TEXT BOXES
        let newEmployee = [newId, newName, newExtn, newEmail, newDept];

        // ADD THIS NEWLY ADDED EMPLOYEE TO THE MAIN EMPLOYEES ARRAY
        employees.push(newEmployee);

        // UPDATE THE EMPLOYEES ARRAY TO THE LOCAL STORAGE 
        localStorage.setItem('employees', JSON.stringify(employees));

        // CALL BUILD GRID METHOD
        buildGrid(employees);

        // CALL RESET THE FORM FIELDS METHOD
        form.reset();

        // SET FOCUS BACK TO THE ID TEXT BOX
        document.querySelector('#id').focus;
   });
}


// DELETE EMPLOYEE
function deleteEmployee() {
    selectedTable.addEventListener('click', (e)=> {
        if(confirm('Are you sure you want to delete the employee?')) {

                let selectedRow = e.target.parentElement;

                // DELETE THE SELECTED ROW IN THE TABLE
                let rowIndex = selectedTable.deleteRow(e.target.parentElement.parentElement.rowIndex);

                // DELETE THE EMPLOYEE IN THE EMPLOYEES ARRAY THAT WAS SELECTED FOR DELETION
                employees.splice(rowIndex, 1);

                // UPDATE THE EMPLOYEES ARRAY TO THE LOCAL STORAGE 
                localStorage.setItem('employees', JSON.stringify(employees));

                // CALL BUILD GRID METHOD
                buildGrid(employees);
        }
    });
}

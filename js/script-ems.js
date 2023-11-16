/*eslint-env browser*/

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let selectedTable = document.querySelector('#empTable');
let tableBody = selectedTable.getElementsByTagName('tbody')[0];

// STORAGE OBJECT
let storage = "";

// INITIAL EMPLOYEES
let employees = [];

// LOAD EVENT
window.addEventListener("load", (e) => {
    employees = createInitialEmployees(employees);
    buildGrid(employees);
    addEmployee(employees);
    deleteEmployee(employees);
});


function createInitialEmployees(employees) {

     // if there are no employees in employees array, check storage
     if (employees.length === 0) {
        // get tasks from storage or empty string if nothing in storage
        storage = JSON.parse(localStorage.getItem('employees')) || "";

        // if not empty, convert to array and store in global employees variable
        if (storage.length > 0) {
            storage.forEach(element => {
                employees.push(element);
            });
        }

        // if storage is also empty, then create initial set of employees and return the global employees array
        else {
            employees = [
                    { id: 123, name:"George", extension:3255, email:"g@gmail.com", dept:"Executive"},
                    { id: 234, name:"Christine", extension:3256, email:"c@gmail.com", dept:"Engineering" },
                    { id: 345, name:"Zak", extension:3257, email:"z@gmail.com", dept:"Sales"},
                    { id: 456, name:"Sally", extension:3258, email:"s@gmail.com", dept:"Administrative"}
                ]
            // ADD THE INITIAL EMPLOYEES TO THE LOCAL STORAGE 
            localStorage.setItem('employees', JSON.stringify(employees));
        }

     }

    return employees;
 
}


function buildGrid(employees) {
    // SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
    let count = 0;

    // CLEAR THE TABLE EVERYTIME AND BUILD GRID AFRESH, JUST TO AVOID ADDING THE EMPLOYEES ARRAY REPEATEDLY
    tableBody.innerHTML = "";

    employees.forEach(emp => {

        let row = tableBody.insertRow();
        Object.values(emp).forEach(text => {

            let cell = row.insertCell();
            cell.innerHTML = text;

        })

        let cellDelete = row.insertCell();
        cellDelete.innerHTML = 'X';
        
        // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
         count+= 1;
         document.getElementById('empCount').value = count;
    });
  }


function resetFormAndSetFocus() {
        // RESET THE FORM
        document.querySelector('#id').value = '';
        document.querySelector('#name').value = '';
        document.querySelector('#extension').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#department').value = '';

        // SET FOCUS BACK TO THE ID TEXT BOX
        document.querySelector('#id').focus;
}


function addEmployee(employees) {
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
        let newEmployee = {id: newId, name: newName, extension: newExtn, email: newEmail, dept: newDept};

        // ADD THIS NEWLY ADDED EMPLOYEE TO THE MAIN EMPLOYEES ARRAY
        employees.push(newEmployee);

        // UPDATE THE EMPLOYEES ARRAY TO THE LOCAL STORAGE 
        localStorage.setItem('employees', JSON.stringify(employees));

        // CALL BUILD GRID METHOD
        buildGrid(employees);

        // CALL RESET THE FORM FIELDS METHOD
        resetFormAndSetFocus();
   });
}


// DELETE EMPLOYEE
function deleteEmployee(employees) {
    selectedTable.addEventListener('click', (e)=> {
        if(confirm('Are you sure you want to delete the employee?')) {

                console.log(e.target.parentElement);
                let selectedRow = e.target.parentElement;
                let cells = selectedRow.getElementsByTagName('td');

                // DELETE THE ROW IN THE TABLE
                selectedTable.deleteRow(e.target.parentElement.rowIndex.value);
                
                // DELETE THE EMPLOYEE IN THE EMPLOYEES ARRAY THAT WAS SELECTED FOR DELETION
                employees = employees.filter(emp => emp.name !== cells[1].innerHTML);

                // UPDATE THE EMPLOYEES ARRAY TO THE LOCAL STORAGE 
                localStorage.setItem('employees', JSON.stringify(employees));

                // CALL BUILD GRID METHOD
                buildGrid(employees);
        }
    });
}

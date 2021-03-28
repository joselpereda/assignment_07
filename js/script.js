// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let empTable = document.querySelector('#employees');


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCounter = 0;


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const $ = (id) => {
        return document.getElementById(id);
    }

    let employeeId =            $('id').value;
    let employeeName =          $('name').value;
    let extension =             $('extension').value;
    let email =                 $('email').value;
    let department =            $('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow(employeeCounter+1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cell_0 = row.insertCell(0);
    let cell_1 = row.insertCell(1);
    let cell_2 = row.insertCell(2);
    let cell_3 = row.insertCell(3);
    let cell_4 = row.insertCell(4);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cell_0.innerHTML = employeeId;
    cell_1.innerHTML = employeeName;
    cell_2.innerHTML = extension;
    cell_3.innerHTML = email;
    cell_4.innerHTML = department;

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    // ADD NECESSARY CLASSES TO BUTTON
    deleteBtn.className = 'btn btn-danger btn-xs float-right';
    // CREATE TEXT NODE, SET IT TO 'X', AND APPEND TO DELETE BUTTON
    deleteBtn.appendChild(document.createTextNode('X'));
    // APPEND DELETE BUTTON TO THE LI
    row.appendChild(deleteBtn);

    // RESET THE FORM
    document.querySelector('#id').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#extension').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#department').value = '';

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE BY 1
    employeeCounter++;

    // DISPLAY EMPLOYEE COUNT ON THE SCREEN
    document.querySelector('#empCount').value = employeeCounter;
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // DEELETE SELECTED ROWN
    empTable.deleteRow(e.target.parentNode.rowIndex); 
    // DECREASE EMPLOYEE COUNT BY 1
    employeeCounter--;
    // UPDATE EMPLOYEE COUNT ON PAGE
    document.querySelector('#empCount').value = employeeCounter;
});
let studentName = document.getElementById('studentName');
let studentEmail = document.getElementById('studentEmail');
let PhoneNumber = document.getElementById('phone');
let Course = document.getElementById('course');
let submitBtn = document.getElementById('submit-btn');
let result = document.getElementById('studentDataList');
let editIndex = null;

let StudentData = [];

let table;  

$(document).ready(function () {
    table = $('#myTable').DataTable({
        pageLength: 5,
        lengthMenu: [5, 10, 20, 50]
    });
});

submitBtn.addEventListener("click", () => {
    if (studentName.value === "" || studentEmail.value === "" || PhoneNumber.value === "" || Course.value === "") {
        alert("All fields are required");
        return;
    }

    let stdObj = {
        stdName: studentName.value,
        stdEmail: studentEmail.value,
        stdPhone: parseInt(PhoneNumber.value),
        stdCourse: Course.value
    }

    if (editIndex === null) {
        // ADD
        StudentData.push(stdObj);
    } else {
        // UPDATE
        StudentData[editIndex] = stdObj;
        editIndex = null;
        submitBtn.innerText = "Submit";
        submitBtn.classList.remove("btn-success");
        submitBtn.classList.add("btn-primary");
    }

    showStudentInfo();
    clearInputs();
});

// Show Data in Table
function showStudentInfo() {
    table.clear(); 

    StudentData.forEach((elem, index) => {
        table.row.add([
            elem.stdName,
            elem.stdEmail,
            elem.stdPhone,
            elem.stdCourse,
            `
            <button class='btn btn-danger btn-sm' onclick='DeleteData(${index})'>Delete</button>
            <button class='btn btn-success btn-sm' onclick='EditData(${index})'>Edit</button>
            `
        ]);
    });

    table.draw();
}

// Clear Inputs
function clearInputs() {
    studentName.value = "";
    studentEmail.value = "";
    PhoneNumber.value = "";
    Course.value = "";
}

function DeleteData(index) {
    StudentData.splice(index, 1);
    showStudentInfo();
}

function EditData(index) {
    editIndex = index;

    studentName.value = StudentData[index].stdName;
    studentEmail.value = StudentData[index].stdEmail;
    PhoneNumber.value = StudentData[index].stdPhone;
    Course.value = StudentData[index].stdCourse;

    submitBtn.innerText = "Update";
    submitBtn.classList.remove("btn-primary");
    submitBtn.classList.add("btn-success");
}

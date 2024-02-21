let students = [];

function Student(studentID, fullName, dob, classInfo, gpa) {
    this.studentID = studentID;
    this.fullName = fullName;
    this.dob = dob;
    this.classInfo = classInfo;
    this.gpa = gpa;
}

Student.prototype.updateInfo = function (fullName, dob, classInfo, gpa) {
    this.fullName = fullName;
    this.dob = dob;
    this.classInfo = classInfo;
    this.gpa = gpa;
};

function addStudent() {
    const studentID = document.getElementById("studentID").value;
    const fullName = document.getElementById("fullName").value;
    const dob = document.getElementById("dob").value;
    const classInfo = document.getElementById("class").value;
    const gpa = document.getElementById("gpa").value;

    const existingStudent = students.find((s) => s.studentID === studentID);
    if (existingStudent) {
        alert("Student already exists!!!");
        return;
    }

    const student = new Student(studentID, fullName, dob, classInfo, gpa);
    students.push(student);
    displayStudents();
}

function updateStudent() {
    const studentID = document.getElementById("studentID").value;
    const fullName = document.getElementById("fullName").value;
    const dob = document.getElementById("dob").value;
    const classInfo = document.getElementById("class").value;
    const gpa = document.getElementById("gpa").value;

    const existingStudent = students.find((s) => s.studentID === studentID);
    if (!existingStudent) {
        alert("Please add full information");
        return;
    }

    existingStudent.updateInfo(fullName, dob, classInfo, gpa);
    displayStudents();
}

function displayStudents() {
    const studentTable = document.getElementById("studentTable");
    studentTable.innerHTML = `
            <tr>
                <th>Mã SV</th>
                <th>Họ và tên</th>
                <th>Ngày sinh</th>
                <th>Lớp học</th>
                <th>GPA</th>
            </tr>
        `;

    students.forEach((student) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                <td>${student.studentID}</td>
                <td>${student.fullName}</td>
                <td>${student.dob}</td>
                <td>${student.classInfo}</td>
                <td>${student.gpa}</td>
            `;
        studentTable.appendChild(row);
    });
}

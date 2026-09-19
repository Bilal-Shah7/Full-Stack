let student = {
    name: "",
    id: "",
    program: "",
    semester: 0,
    assignment: 0,
    quiz: 0,
    exam: 0,
    attendance: 0
};

function analyzeStudent() {
    student.name = document.getElementById("studentName").value;
    student.id = document.getElementById("studentId").value;
    student.program = document.getElementById("program").value;
    student.semester = Number(document.getElementById("semester").value);
    student.assignment = Number(document.getElementById("assignment").value);
    student.quiz = Number(document.getElementById("quiz").value);
    student.exam = Number(document.getElementById("exam").value);
    student.attendance = Number(document.getElementById("attendance").value);

    let overallMarks =
        (student.assignment * 0.20) +
        (student.quiz * 0.20) +
        (student.exam * 0.60);

    let grade;

    if (overallMarks >= 85) {
        grade = "A";
    } else if (overallMarks >= 75) {
        grade = "B";
    } else if (overallMarks >= 65) {
        grade = "C";
    } else if (overallMarks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let status;
    let resultClass;

    if (student.attendance < 75) {
        status = "Attendance Requirement Not Satisfied";
        resultClass = "warning";
    } else if (overallMarks >= 50) {
        status = "Successful";
        resultClass = "success";
    } else {
        status = "Unsuccessful";
        resultClass = "danger";
    }

    document.getElementById("result").innerHTML = `
        <div class="result-card ${resultClass}">
            <h3>${status}</h3>
            <hr>
            <p><strong>Student:</strong> ${student.name}</p>
            <p><strong>Student ID:</strong> ${student.id}</p>
            <p><strong>Program:</strong> ${student.program}</p>
            <p><strong>Semester:</strong> ${student.semester}</p>
            <p><strong>Overall Marks:</strong> ${overallMarks.toFixed(2)}%</p>
            <p><strong>Grade:</strong> ${grade}</p>
            <p><strong>Attendance:</strong> ${student.attendance}%</p>
        </div>
    `;
}
let student = {
    name: "",
    program: "",
    semester: 0,
    cgpa: 0,
    income: 0,
    attendance: 0,
    performance: "",
    credits: 0
};

function checkScholarship() {
    student.name = document.getElementById("name").value;
    student.program = document.getElementById("program").value;
    student.semester = Number(document.getElementById("semester").value);
    student.cgpa = Number(document.getElementById("cgpa").value);
    student.income = Number(document.getElementById("income").value);
    student.attendance = Number(document.getElementById("attendance").value);
    student.performance = document.getElementById("performance").value;
    student.credits = Number(document.getElementById("credits").value);

    let conditions = [];

    let academicRequirement =
        student.cgpa >= 3.00 &&
        student.performance === "good";

    let financialRequirement = student.income <= 100000;

    let attendanceRequirement = student.attendance >= 75;

    let semesterRequirement = student.semester >= 3;

    let creditRequirement = student.credits >= 60;

    if (academicRequirement) {
        conditions.push("Academic requirement satisfied.");
    } else {
        conditions.push("Academic requirement not satisfied.");
    }

    if (financialRequirement) {
        conditions.push("Financial requirement satisfied.");
    } else {
        conditions.push("Family income is above the scholarship limit.");
    }

    if (attendanceRequirement) {
        conditions.push("Attendance requirement satisfied.");
    } else {
        conditions.push("Attendance requirement not satisfied.");
    }

    if (semesterRequirement) {
        conditions.push("Semester requirement satisfied.");
    } else {
        conditions.push("Student must be in semester 3 or above.");
    }

    if (creditRequirement) {
        conditions.push("Credit requirement satisfied.");
    } else {
        conditions.push("Required completed credits are not satisfied.");
    }

    let status;
    let resultClass;

    if (
        academicRequirement &&
        financialRequirement &&
        attendanceRequirement &&
        semesterRequirement &&
        creditRequirement
    ) {
        status = "Eligible";
        resultClass = "eligible";
    } else if (
        academicRequirement &&
        attendanceRequirement &&
        semesterRequirement &&
        creditRequirement
    ) {
        status = "Requires Further Review";
        resultClass = "review";
    } else {
        status = "Not Eligible";
        resultClass = "not-eligible";
    }

    document.getElementById("result").innerHTML = `
        <div class="result ${resultClass}">
            <h3>${status}</h3>
            <p><strong>Student:</strong> ${student.name}</p>
            <p><strong>Program:</strong> ${student.program}</p>

            <h5>Eligibility Explanation</h5>

            <ul>
                ${conditions.map(condition => `<li>${condition}</li>`).join("")}
            </ul>
        </div>
    `;
}
let student = {
    name: "",
    semester: 0,
    cgpa: 0,
    standing: "",
    prerequisite: "",
    fee: ""
};

let course = {
    name: "",
    availability: ""
};

function checkEligibility() {
    student.name = document.getElementById("studentName").value;
    student.semester = Number(document.getElementById("semester").value);
    student.cgpa = Number(document.getElementById("cgpa").value);
    student.standing = document.getElementById("standing").value;
    student.prerequisite = document.getElementById("prerequisite").value;
    student.fee = document.getElementById("fee").value;

    course.name = document.getElementById("course").value;
    course.availability = document.getElementById("availability").value;

    let reasons = [];

    if (student.semester < 5) {
        reasons.push("Student must be in semester 5 or above.");
    }

    if (student.cgpa < 2.50) {
        reasons.push("Minimum CGPA requirement of 2.50 is not satisfied.");
    }

    if (student.prerequisite !== "completed") {
        reasons.push("The prerequisite course has not been completed.");
    }

    if (student.standing !== "Good") {
        reasons.push("Student is not in good academic standing.");
    }

    if (student.fee !== "paid") {
        reasons.push("There is an unresolved fee issue.");
    }

    if (course.availability !== "available") {
        reasons.push("The selected course is currently unavailable.");
    }

    let output;

    if (reasons.length === 0) {
        output = `
            <div class="result approved">
                <h3>Registration Approved</h3>
                <p>${student.name} satisfies all registration requirements.</p>
                <p><strong>Course:</strong> ${course.name}</p>
            </div>
        `;
    } else {
        output = `
            <div class="result rejected">
                <h3>Registration Cannot Be Completed</h3>
                <p><strong>Course:</strong> ${course.name}</p>
                <ul>
                    ${reasons.map(reason => `<li>${reason}</li>`).join("")}
                </ul>
            </div>
        `;
    }

    document.getElementById("result").innerHTML = output;
}
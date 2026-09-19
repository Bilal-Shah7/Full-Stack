let vehicle = {
    ownerType: "",
    vehicleType: "",
    parkingArea: "",
    spaces: 0,
    universityId: "",
    permit: "",
    visitorAuth: "",
    specialAccess: ""
};

function checkParking() {
    vehicle.ownerType = document.getElementById("ownerType").value;
    vehicle.vehicleType = document.getElementById("vehicleType").value;
    vehicle.parkingArea = document.getElementById("parkingArea").value;
    vehicle.spaces = Number(document.getElementById("spaces").value);
    vehicle.universityId = document.getElementById("universityId").value;
    vehicle.permit = document.getElementById("permit").value;
    vehicle.visitorAuth = document.getElementById("visitorAuth").value;
    vehicle.specialAccess = document.getElementById("specialAccess").value;

    let status = "";
    let resultClass = "";

    if (vehicle.spaces <= 0) {
        status = "Parking Area Full";
        resultClass = "full";
    } else if (
        vehicle.ownerType === "visitor" &&
        vehicle.parkingArea === "visitor" &&
        vehicle.visitorAuth !== "approved"
    ) {
        status = "Authorization Required";
        resultClass = "authorization";
    } else if (
        vehicle.universityId !== "valid" &&
        vehicle.ownerType !== "visitor"
    ) {
        status = "Parking Not Approved: Invalid University ID";
        resultClass = "denied";
    } else if (
        vehicle.parkingArea === "faculty" &&
        vehicle.ownerType !== "faculty" &&
        vehicle.specialAccess !== "yes"
    ) {
        status = "Parking Not Approved: Faculty Area Restricted";
        resultClass = "denied";
    } else if (
        vehicle.parkingArea === "student" &&
        vehicle.ownerType !== "student" &&
        vehicle.specialAccess !== "yes"
    ) {
        status = "Parking Not Approved: Student Area Restricted";
        resultClass = "denied";
    } else if (
        vehicle.ownerType !== "visitor" &&
        vehicle.permit !== "valid"
    ) {
        status = "Parking Not Approved: Valid Permit Required";
        resultClass = "denied";
    } else {
        status = "Parking Approved";
        resultClass = "approved";
    }

    document.getElementById("result").innerHTML = `
        <div class="result ${resultClass}">
            <h3>${status}</h3>
            <hr>
            <p><strong>Owner Type:</strong> ${vehicle.ownerType}</p>
            <p><strong>Vehicle Type:</strong> ${vehicle.vehicleType}</p>
            <p><strong>Parking Area:</strong> ${vehicle.parkingArea}</p>
            <p><strong>Available Spaces:</strong> ${vehicle.spaces}</p>
            <p><strong>University ID:</strong> ${vehicle.universityId}</p>
            <p><strong>Permit:</strong> ${vehicle.permit}</p>
        </div>
    `;
}
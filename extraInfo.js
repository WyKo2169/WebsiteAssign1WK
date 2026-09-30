const form = document.getElementById("complaintForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const make = document.getElementById("make").value.trim();
    const model = document.getElementById("model").value.trim();
    const vin = document.getElementById("vin").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const description = document.getElementById("description").value.trim();
    let valid = true;
    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });
    document.getElementById("successMessage").textContent = "";
    if (name === "") {
        document.getElementById("nameError").textContent =
            "Please enter your full name.";
        valid = false;}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent =
            "Please enter your email address.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        valid = false;}
    const phonePattern = /^[0-9+\-\s()]{7,20}$/;
    if (phone === "") {
        document.getElementById("phoneError").textContent =
            "Please enter your phone number.";
        valid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent =
            "Please enter a valid phone number.";
        valid = false;}
    if (make === "") {
        document.getElementById("makeError").textContent =
            "Please enter the vehicle make.";
        valid = false;}
    if (model === "") {
        document.getElementById("modelError").textContent =
            "Please enter the vehicle model.";
        valid = false;}
    if (vin === "") {
        document.getElementById("vinError").textContent =
            "Please enter the VIN.";
        valid = false;
    } else if (vin.length !== 17) {
        document.getElementById("vinError").textContent =
            "VIN must contain exactly 17 characters.";
        valid = false;}
    if (subject === "") {
        document.getElementById("subjectError").textContent =
            "Please enter a subject.";
        valid = false;}
    if (description === "") {
        document.getElementById("descriptionError").textContent =
            "Please describe the issue.";
        valid = false;
    } else if (description.length < 20) {
        document.getElementById("descriptionError").textContent =
            "Please provide at least 20 characters describing the issue.";
        valid = false;}
    if (valid) {
        document.getElementById("successMessage").textContent =
            "Your complaint has been submitted successfully!";
        form.reset();}
});
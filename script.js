var _a;
// listing element
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // type assertion
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"profilePicture\" class=\"profilePicture\">") : "", "\n    <p><strong>Name:</strong><span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n    <p><strong>Email:</strong><span id=\"edit-edit\" class=\"editable\">").concat(email, "</span></p>\n    <p><strong>Phone Number:</strong><span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n    \n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error("ine or more output elements are missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currrentElement = element;
            var currentValue = currrentElement.textContent || "";
            // replace content
            if (currrentElement.tagName === "P" || currrentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currrentElement.textContent = input_1.value;
                    currrentElement.style.display = 'inline';
                    input_1.remove();
                });
                currrentElement.style.display = 'none';
                (_a = currrentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currrentElement);
                input_1.focus();
            }
        });
    });
}

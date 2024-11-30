


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        const formTitle = document.getElementById("form-title");
        const registerFields = document.getElementById("register-fields");
        const toggleText = document.getElementById("toggle-text");
        const toggleLink = document.getElementById("toggle-link");
        const submitButton = document.getElementById("submit-button");
        const successMessage = document.getElementById("success-message");

        const passwordField = document.getElementById("password");
        const togglePasswordIcon = document.getElementById("toggle-password");
        const confirmPasswordField = document.getElementById("confirm-password");
        const toggleConfirmPasswordIcon = document.getElementById("toggle-confirm-password");

        let isLogin = true;

        toggleLink.addEventListener("click", () => {
            isLogin = !isLogin;
            formTitle.innerText = isLogin ? "Login" : "Register";
            toggleText.innerText = isLogin
                ? "Don't have an account? "
                : "Already have an account? ";
            toggleLink.innerText = isLogin ? "Register" : "Login";
            submitButton.innerText = isLogin ? "Login" : "Register";
            registerFields.style.display = isLogin ? "none" : "block";
            successMessage.style.display = "none"; // Hide success message on toggle
        });

        togglePasswordIcon.addEventListener("click", () => {
            if (passwordField.type === "password") {
                passwordField.type = "text";
                togglePasswordIcon.textContent = "🙈";
            } else {
                passwordField.type = "password";
                togglePasswordIcon.textContent = "👁️";
            }
        });

        toggleConfirmPasswordIcon.addEventListener("click", () => {
            if (confirmPasswordField.type === "password") {
                confirmPasswordField.type = "text";
                toggleConfirmPasswordIcon.textContent = "🙈";
            } else {
                confirmPasswordField.type = "password";
                toggleConfirmPasswordIcon.textContent = "👁️";
            }
        });

        submitButton.addEventListener("click", () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (!validateEmail(email)) {
                document.getElementById("POPUP-P").textContent = "Please enter a valid email address.";
                popupl();
                return;
            }
            if (!isLogin) {
                const passwordRestrictions = validatePassword(password);

                if (passwordRestrictions.length > 0) {
                    document.getElementById("POPUP-P").textContent = `Password does not meet the following criteria:\n- ${passwordRestrictions.join("\n- ")}`;
                    popupl();

                    return;
                }




                const firstName = document.getElementById("first-name").value;
                const lastName = document.getElementById("last-name").value;
                const confirmPassword = document.getElementById("confirm-password").value;

                if (!validateNames(firstName)) {

                    document.getElementById("POPUP-P").textContent = "First name must be at least 2 characters long.";
                    popupl();
                    return;
                }

                if (password !== confirmPassword) {
                    document.getElementById("POPUP-P").textContent = "Passwords do not match!";
                    popupl();
                    return;
                }

                // Check if email already exists
                let users = JSON.parse(localStorage.getItem("users")) || [];
                const emailExists = users.some(user => user.email === email);

                if (emailExists) {
                    document.getElementById("POPUP-P").textContent = "This email is already used. Please register with another one.";
                    popupl();
                    return;
                }

                // Save user to localStorage
                const userData = { email, password, firstName, lastName };
                users.push(userData);
                localStorage.setItem("users", JSON.stringify(users));

                successMessage.style.display = "block";
                successMessage.textContent = "You have registered successfully!";
                setTimeout(() => { window.location.href = "Profile.html"; }, 1000);
            } else {
                // Check for login
                let users = JSON.parse(localStorage.getItem("users")) || [];
                const storedUser = users.find(user => user.email === email && user.password === password);

                if (storedUser) {
                    localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
                    successMessage.style.display = "block";
                    successMessage.textContent = `Welcome back, ${storedUser.firstName}!`;
                    setTimeout(() => { window.location.href = "Profile.html"; }, 1000);

                } else {
                    document.getElementById("POPUP-P").textContent = "Invalid credentials. Please try again.";
                    popupl();
                }
            }
        });
    }
});



function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    const restrictions = [];
    if (!/[a-z]/.test(password)) restrictions.push("Include at least one lowercase letter.");
    if (!/[A-Z]/.test(password)) restrictions.push("Include at least one uppercase letter.");
    if (!/\d/.test(password)) restrictions.push("Include at least one number.");
    if (!/[!@#$%^&*()_+-=":|;]/.test(password)) restrictions.push("Include at least one special character.");
    if (password.length < 8) restrictions.push("Password must be at least 8 characters long.");
    return restrictions;
}

function validateNames(name) {
    return name.length > 1;
}














document.addEventListener("DOMContentLoaded", () => {
    const profileLink = document.getElementById("profile-link");
    if (profileLink) {
        profileLink.addEventListener("click", (event) => {
            event.preventDefault();

            const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

            if (loggedInUser) {
                window.location.href = "Profile.html";
            } else {
                window.location.href = "register.html";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {

    const logoutlink = document.getElementById("logout-link");
    if (logoutlink) {

        logoutlink.addEventListener("click", (event) => {
            event.preventDefault();

            localStorage.removeItem("loggedInUser");

            window.location.href = "index.html";
        });
    }
});













function popupl(x) {
    const b = document.getElementById("POPUP");
    b.style.display = "block";

    console.log("popup");

}
function removePopup() {
    const b = document.getElementById("POPUP");
    b.style.display = "none";
}
// Function to update the authentication button based on login status
function updateAuthButton() {
    const authBtnContainer = document.getElementById("auth-btn-container");
    const authBtnMobile = document.getElementById("auth-btn-container-mobile");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
        // Replace with Logout button if user is logged in
        authBtnContainer.innerHTML = `<a class="main-btn navbar-btn" style="padding: 2px 20px; color: rgb(237, 242, 244);" id="logout-btn-desktop">Logout 🚪</a>`;
        authBtnMobile.innerHTML = `<a class="main-btn navbar-btn" style="padding: 2px 20px; color: rgb(237, 242, 244);" id="logout-btn-mobile">Logout 🚪</a>`;

        // Attach click events to both Logout buttons
        document.getElementById("logout-btn-desktop").addEventListener("click", logout);
        document.getElementById("logout-btn-mobile").addEventListener("click", logout);

    } else {
        // Show Login/Register button if user is not logged in
        authBtnContainer.innerHTML = `<a class="main-btn navbar-btn" style="padding: 2px 20px; color: rgb(237, 242, 244);" href="./loginPage.html">Login/Register 💻</a>`;
        authBtnMobile.innerHTML = `<a class="main-btn navbar-btn" style="padding: 2px 20px; color: rgb(237, 242, 244);" href="./loginPage.html">Login/Register 💻</a>`;
    }
}

// Common logout function
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.reload();
}

// Call updateAuthButton on page load
document.addEventListener("DOMContentLoaded", updateAuthButton);

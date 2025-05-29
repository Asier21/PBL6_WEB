//==============LOGIN=====================
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const dashboardLink = document.getElementById("dashboard-link");
  const loginLink = document.getElementById("login-link");
  const logoutLink = document.getElementById("logout-link");
  const adminLink = document.getElementById("admin-link");

  if (dashboardLink) {
    dashboardLink.style.display = isLoggedIn ? "list-item" : "none";
  }

  if (loginLink) {
    loginLink.style.display = isLoggedIn ? "none" : "list-item";
  }

  if (logoutLink) {
    logoutLink.style.display = isLoggedIn ? "list-item" : "none";
  }

  if (adminLink) {
    adminLink.style.display = isLoggedIn && isAdmin ? "list-item" : "none";
  }

  // Formulario de login...
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!username || !password) {
        alert("Por favor, completa ambos campos: usuario y contraseña.");
        return;
      }
      if (username === "admin" && password === "admin") {
        localStorage.setItem("isAdmin", "true");
      } else {
        localStorage.setItem("isAdmin", "false");
      }

      localStorage.setItem("loggedIn", "true");
      window.location.href = "party.html";
    });
  }
});

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("isAdmin");

  window.location.href = "login.html"; // O recarga actual: location.reload();
}
window.logout = logout;

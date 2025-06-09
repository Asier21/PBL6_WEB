//==============LOGIN=====================
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const dashboardLink = document.getElementById("dashboard-link");
  const loginLink = document.getElementById("login-link");
  const logoutLink = document.getElementById("logout-link");
  const adminLink = document.getElementById("admin-link");

  const notifLink = document.getElementById("notif-link");

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
  if (notifLink) notifLink.style.display = isLoggedIn ? "list-item" : "none";

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

//Campanita
function toggleNotifications() {
  const panel = document.getElementById("notif-panel");
  panel.classList.toggle("hidden");
}

function saveNotificationPrefs() {
  // Aquí recogerías los estados de los checkboxes y harías fetch/post al servidor
  const checked = Array.from(
    document.querySelectorAll("#notif-panel input[type=checkbox]:checked")
  ).map((cb) => cb.parentNode.textContent.trim());
  console.log("Preferencias guardadas:", checked);
  // Cierra el panel
  document.getElementById("notif-panel").classList.add("hidden");
  // Mostrar toast/aviso de éxito si quieres…
}

// Opcional: cierra al hacer clic fuera
document.addEventListener("click", (e) => {
  const panel = document.getElementById("notif-panel");
  const btn = document.getElementById("btn-notifications");
  if (!panel.contains(e.target) && !btn.contains(e.target)) {
    panel.classList.add("hidden");
  }
});

// erabiltzaileak.js

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("users-table-body");
  const newBtn = document.getElementById("new-user-btn");
  const modal = document.getElementById("user-modal");
  const modalTitle = document.getElementById("modal-title");
  const closeBtn = document.getElementById("modal-close");
  const form = document.getElementById("user-form");

  const idInput = document.getElementById("user-id");
  const nameInput = document.getElementById("user-name");
  const surnameInput = document.getElementById("user-surname");
  const passwordInput = document.getElementById("user-password");
  const emailInput = document.getElementById("user-email");

  let users = JSON.parse(localStorage.getItem("users") || "[]");

  function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
  }

  function renderTable() {
    tableBody.innerHTML = "";
    users.forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="px-4 py-2 text-blue-800 dark:text-cyan-300">${user.id}</td>
        <td class="px-4 py-2 text-blue-800 dark:text-cyan-300">${user.name}</td>
        <td class="px-4 py-2 text-blue-800 dark:text-cyan-300">${user.surname}</td>
        <td class="px-4 py-2 text-blue-800 dark:text-cyan-300">${user.password}</td>
        <td class="px-4 py-2 text-blue-800 dark:text-cyan-300">${user.email}</td>
        <td class="px-4 py-2 space-x-2">
          <button data-id="${user.id}" class="edit-btn rounded bg-cyan-700 hover:bg-cyan-800 px-2 py-1 text-white">Editatu</button>
          <button data-id="${user.id}" class="delete-btn rounded bg-red-600 hover:bg-red-700 px-2 py-1 text-white">Ezabatu</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
    attachRowEvents();
  }

  function openModal(edit = false, user = {}) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    modalTitle.textContent = edit
      ? "Erabiltzailea editatu"
      : "Erabiltzaile berria";
    idInput.value = user.id || "";
    nameInput.value = user.name || "";
    surnameInput.value = user.surname || "";
    passwordInput.value = user.password || "";
    emailInput.value = user.email || "";
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    form.reset();
  }

  function attachRowEvents() {
    document.querySelectorAll(".edit-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const u = users.find((u) => u.id == btn.dataset.id);
        openModal(true, u);
      });
    });
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (confirm("Erabiltzailea ezabatu nahi duzu?")) {
          users = users.filter((u) => u.id != btn.dataset.id);
          saveUsers();
          renderTable();
        }
      });
    });
  }

  newBtn.addEventListener("click", () => openModal());
  closeBtn.addEventListener("click", closeModal);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = idInput.value;
    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    const password = passwordInput.value.trim();
    const email = emailInput.value.trim();

    if (id) {
      users = users.map((u) =>
        u.id == id ? { id, name, surname, password, email } : u
      );
    } else {
      const newId = users.length ? Math.max(...users.map((u) => +u.id)) + 1 : 1;
      users.push({ id: newId, name, surname, password, email });
    }

    saveUsers();
    renderTable();
    closeModal();
  });

  renderTable();
});

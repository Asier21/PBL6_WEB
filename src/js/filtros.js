// function applyFilter(filter) {
//   const image = document.getElementById("filteredImage");
//   if (image) {
//     image.style.filter = filter;
//   }
// }
// window.applyFilter = applyFilter;

// // ===== ❤️ HEART RANGE (color + confetti) =====
// document.addEventListener("DOMContentLoaded", function () {
//   const range = document.getElementById("heartRange");
//   const heart = document.getElementById("heartIcon");
//   const confettiContainer = document.getElementById("confettiContainer");

//   if (range && heart) {
//     let confettiShown = false;

//     range.addEventListener("input", function () {
//       const value = parseInt(range.value, 10);
//       const red = Math.round((value / 100) * 255);
//       heart.style.color = `rgb(${red}, 0, 0)`;

//       if (value === 100 && !confettiShown && confettiContainer) {
//         confettiShown = true;
//         launchConfetti();
//       }

//       if (value < 100) {
//         confettiShown = false;
//       }
//     });

//     function launchConfetti() {
//       confettiContainer.innerHTML = "";
//       confettiContainer.classList.remove("hidden");

//       for (let i = 0; i < 30; i++) {
//         const confetti = document.createElement("div");
//         confetti.className = "absolute w-2 h-2 rounded-full";
//         confetti.style.backgroundColor = randomColor();
//         confetti.style.top = `${Math.random() * 20 + 10}%`;
//         confetti.style.left = `${Math.random() * 100}%`;
//         confetti.style.animation = `fall 1s ease-out forwards`;
//         confetti.style.opacity = "0.9";
//         confettiContainer.appendChild(confetti);
//       }

//       setTimeout(() => {
//         confettiContainer.classList.add("hidden");
//       }, 1500);
//     }

//     function randomColor() {
//       const colors = [
//         "#FF3B3B",
//         "#FFD93B",
//         "#3BFF99",
//         "#3BD9FF",
//         "#D93BFF",
//         "#FF7F3B",
//       ];
//       return colors[Math.floor(Math.random() * colors.length)];
//     }
//   }
// });

// // ===== 🎯 TILT IMAGE EFFECT =====
// document.addEventListener("DOMContentLoaded", () => {
//   const image = document.getElementById("tiltImage");

//   if (image && image.parentElement) {
//     image.parentElement.addEventListener("mousemove", (e) => {
//       const rect = image.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;
//       const rotateX = ((y - centerY) / centerY) * -40;
//       const rotateY = ((x - centerX) / centerX) * 40;
//       image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//     });

//     image.parentElement.addEventListener("mouseleave", () => {
//       image.style.transform = "rotateX(0deg) rotateY(0deg)";
//     });
//   }
// });

// // ===== 🔁 RESET CONTAINER SIZE =====
// function resetSize() {
//   const container = document.getElementById("resizableContainer");
//   if (container) {
//     container.style.width = "100%";
//   }
// }
// window.resetSize = resetSize;

// // ===== 📧 FORM #harpidetuForm =====
// document.addEventListener("DOMContentLoaded", function () {
//   const harpidetuForm = document.getElementById("harpidetuForm");

//   if (harpidetuForm) {
//     harpidetuForm.addEventListener("submit", function (e) {
//       e.preventDefault();

//       const name = document.getElementById("fieldName")?.value.trim();
//       const email = document.getElementById("fieldEmail")?.value.trim();
//       const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//       if (name && emailValid) {
//         window.location.href = "party.html";
//       } else {
//         alert("Mesedez, bete izena eta eposta baliozkoa.");
//       }
//     });
//   }
// });

// Inicializa el tema al cargar la página
function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// Alterna y guarda la selección
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  // Matomo tracking
  if (isDark) {
    _paq.push(["trackEvent", "UI", "Enable Dark Mode"]);
  } else {
    _paq.push(["trackEvent", "UI", "Disable Dark Mode"]);
  }
}

// Espera a tener el DOM listo, inicializa y enlaza el botón correcto
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  // Aquí tienes que usar el mismo ID que en tu HTML
  const btn = document.getElementById("themeToggleDarkMode");
  if (btn) {
    btn.addEventListener("click", toggleTheme);
  }
});

//Pricing
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("plan-modal");
  const closeBtn = document.getElementById("modal-close");
  const planDisplay = document.getElementById("selected-plan");
  const planHiddenInput = document.getElementById("selected-plan-hidden");
  const openButtons = document.querySelectorAll(".open-plan-modal");

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const planName = button.getAttribute("data-plan");
      planDisplay.textContent = planName;
      planHiddenInput.value = planName;
      modal.classList.remove("hidden");

      //Matomo
      if (typeof _paq !== "undefined") {
        _paq.push(["trackEvent", "Planes", "Click - Planes", planName]);
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    // Matomo: Cierre con la X
    const selectedPlan = planHiddenInput.value;
    if (typeof _paq !== "undefined") {
      _paq.push(["trackEvent", "Planes", "Cerrar Form princing", selectedPlan]);
    }
  });

  // Opcional: cerrar si clicas fuera del modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }

    // Matomo: Cierre haciendo clic fuera del modal
    const selectedPlan = planHiddenInput.value;
    if (typeof _paq !== "undefined") {
      _paq.push(["trackEvent", "Planes", "Cerrar Form princing", selectedPlan]);
    }
  });

  document.getElementById("plan-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const modal = document.getElementById("plan-modal");
    const alertBox = document.getElementById("success-alert");

    //  Matomo envío del formulario
    const selectedPlan = document.getElementById("selected-plan-hidden").value;
    if (typeof _paq !== "undefined") {
      _paq.push([
        "trackEvent",
        "Planes",
        "Formulario Princing enviado",
        selectedPlan,
      ]);
    }

    // 1) Cierra el modal
    modal.classList.add("hidden");

    // 2) Muestra la alerta
    alertBox.classList.remove("hidden", "opacity-0");
    alertBox.classList.add("opacity-100");

    // 3) Después de 2 segundos, despídela con fade-out
    setTimeout(() => {
      alertBox.classList.remove("opacity-100");
      alertBox.classList.add("opacity-0");
    }, 2000);

    // 4) Finalmente, tras la transición (0.5s), vuelve a ocultar del todo
    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 2500);

    // 5) Resetea el form
    this.reset();
  });
});

//confeti
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const wrapper = document.getElementById("newsletter-wrapper");
  const thankyou = document.getElementById("thankyou-message");
  const confettiContainer = document.getElementById("confettiContainer");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //Matomo
    _paq.push([
      "trackEvent",
      "Newsletter",
      "Submit - Newsletter",
      "Harpidetza buletina",
    ]);

    // 1) Mostrar confeti
    launchConfetti();

    // 2) Ocultar form y mostrar mensaje de agradecimiento
    form.classList.add("hidden");
    thankyou.classList.remove("hidden");
  });

  function launchConfetti() {
    confettiContainer.innerHTML = "";
    confettiContainer.classList.remove("hidden");

    // genera 50 confetis
    for (let i = 0; i < 100; i++) {
      const conf = document.createElement("div");
      conf.className = "absolute w-2 h-2 rounded-full";
      conf.style.backgroundColor = randomColor();
      conf.style.top = `${Math.random() * 100}%`;
      conf.style.left = `${Math.random() * 100}%`;
      conf.style.opacity = "0.9";
      conf.style.transform = `translateY(-100px)`;
      conf.style.animation = `fall 3s ease-out forwards`;
      confettiContainer.appendChild(conf);
    }
  }

  function randomColor() {
    const colors = [
      "#FF3B3B",
      "#FFD93B",
      "#3BFF99",
      "#3BD9FF",
      "#D93BFF",
      "#FF7F3B",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
});

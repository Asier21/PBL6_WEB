function applyFilter(filter) {
  const image = document.getElementById("filteredImage");
  if (image) {
    image.style.filter = filter;
  }
}
window.applyFilter = applyFilter;

// ===== ❤️ HEART RANGE (color + confetti) =====
document.addEventListener("DOMContentLoaded", function () {
  const range = document.getElementById("heartRange");
  const heart = document.getElementById("heartIcon");
  const confettiContainer = document.getElementById("confettiContainer");

  if (range && heart) {
    let confettiShown = false;

    range.addEventListener("input", function () {
      const value = parseInt(range.value, 10);
      const red = Math.round((value / 100) * 255);
      heart.style.color = `rgb(${red}, 0, 0)`;

      if (value === 100 && !confettiShown && confettiContainer) {
        confettiShown = true;
        launchConfetti();
      }

      if (value < 100) {
        confettiShown = false;
      }
    });

    function launchConfetti() {
      confettiContainer.innerHTML = "";
      confettiContainer.classList.remove("hidden");

      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");
        confetti.className = "absolute w-2 h-2 rounded-full";
        confetti.style.backgroundColor = randomColor();
        confetti.style.top = `${Math.random() * 20 + 10}%`;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animation = `fall 1s ease-out forwards`;
        confetti.style.opacity = "0.9";
        confettiContainer.appendChild(confetti);
      }

      setTimeout(() => {
        confettiContainer.classList.add("hidden");
      }, 1500);
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
  }
});

// ===== 🎯 TILT IMAGE EFFECT =====
document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("tiltImage");

  if (image && image.parentElement) {
    image.parentElement.addEventListener("mousemove", (e) => {
      const rect = image.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -40;
      const rotateY = ((x - centerX) / centerX) * 40;
      image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    image.parentElement.addEventListener("mouseleave", () => {
      image.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }
});

// ===== 🔁 RESET CONTAINER SIZE =====
function resetSize() {
  const container = document.getElementById("resizableContainer");
  if (container) {
    container.style.width = "100%";
  }
}
window.resetSize = resetSize;

// ===== 📧 FORM #harpidetuForm =====
document.addEventListener("DOMContentLoaded", function () {
  const harpidetuForm = document.getElementById("harpidetuForm");

  if (harpidetuForm) {
    harpidetuForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("fieldName")?.value.trim();
      const email = document.getElementById("fieldEmail")?.value.trim();
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (name && emailValid) {
        window.location.href = "party.html";
      } else {
        alert("Mesedez, bete izena eta eposta baliozkoa.");
      }
    });
  }
});

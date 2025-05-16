function applyFilter(filter) {
    const image = document.getElementById('filteredImage');
    image.style.filter = filter;
}

window.applyFilter = applyFilter;

// Cambia el color del corazón según el valor del rango (de gris a rojo)
document.addEventListener('DOMContentLoaded', function () {
    const range = document.getElementById('heartRange');
    const heart = document.getElementById('heartIcon');

    range.addEventListener('input', function () {
        const value = parseInt(range.value, 10); // 0 a 100
        const red = Math.round((value / 100) * 255);
        const color = `rgb(${red}, 0, 0)`; // Más rojo según avance
        heart.style.color = color;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const range = document.getElementById('heartRange');
    const heart = document.getElementById('heartIcon');
    const confettiContainer = document.getElementById('confettiContainer');
    let confettiShown = false;

    range.addEventListener('input', function () {
        const value = parseInt(range.value, 10);
        const red = Math.round((value / 100) * 255);
        heart.style.color = `rgb(${red}, 0, 0)`;

        // Mostrar confeti una vez
        if (value === 100 && !confettiShown) {
            confettiShown = true;
            launchConfetti();
        }

        if (value < 100) {
            confettiShown = false; // Reinicia para permitir que se muestre de nuevo si baja
        }
    });

    function launchConfetti() {
        confettiContainer.innerHTML = ''; // Limpia confeti anterior
        confettiContainer.classList.remove('hidden');

        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'absolute w-2 h-2 rounded-full';
            confetti.style.backgroundColor = randomColor();
            confetti.style.top = `${Math.random() * 20 + 10}%`;
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animation = `fall 1s ease-out forwards`;
            confetti.style.opacity = '0.9';

            confettiContainer.appendChild(confetti);
        }

        // Oculta confeti después de 2 segundos
        setTimeout(() => {
            confettiContainer.classList.add('hidden');
        }, 1500);
    }

    function randomColor() {
        const colors = ['#FF3B3B', '#FFD93B', '#3BFF99', '#3BD9FF', '#D93BFF', '#FF7F3B'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('tiltImage');

    image.parentElement.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -40; // Invertido
        const rotateY = ((x - centerX) / centerX) * 40;

        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    image.parentElement.addEventListener('mouseleave', () => {
        image.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});




function resetSize() {
    const container = document.getElementById("resizableContainer");
    container.style.width = "100%";
}



document.getElementById('harpidetuForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se envíe el formulario

    const name = document.getElementById('fieldName').value.trim();
    const email = document.getElementById('fieldEmail').value.trim();

    // Validación mínima: ambos campos deben estar completos y el email tener formato básico
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (name && emailValid) {
        window.location.href = 'party.html';
    } else {
        alert('Mesedez, bete izena eta eposta baliozkoa.');
    }
});
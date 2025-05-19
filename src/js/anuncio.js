//============Anuncio=================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcome-modal");
  const closeBtn = document.getElementById("close-modal");

  // Mostrar siempre la modal (modo pruebas)
  modal.classList.remove("hidden");

  // Cerrar modal al pulsar la X
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Cerrar modal si se hace clic fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});

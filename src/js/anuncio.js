//============Anuncio=================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcome-modal");
  const closeBtn = document.getElementById("close-modal");
  const seenAd = localStorage.getItem("seenNewsletterAd");

  // Solo mostrar si no se ha visto antes
  if (!seenAd) {
    modal.classList.remove("hidden");
  }

  function closeModal(reason) {
    modal.classList.add("hidden");
    localStorage.setItem("seenNewsletterAd", "true"); // marcar como mostrado

    if (typeof _paq !== "undefined") {
      _paq.push(["trackEvent", "Anuncio", "Cerrar Anuncio", reason]);
    }
  }

  // Cerrar con la X
  closeBtn?.addEventListener("click", () => closeModal("Iragarkia X"));

  // Cerrar haciendo clic fuera
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal("Iragarkia Out");
    }
  });

  // Si clican el CTA, cerrar y hacer scroll al formulario
  const ctaBtn = modal.querySelector("a[href='#newsletter-form']");
  ctaBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal("Harpidetu Btn");
    document
      .querySelector("#newsletter-form")
      ?.scrollIntoView({ behavior: "smooth" });
  });
});

//zerbitzuak

document.addEventListener("DOMContentLoaded", () => {
  const monitoringTab = document.getElementById("monitoringTab");
  const apiTab = document.getElementById("apiTab");
  const contentBox = document.getElementById("contentBox");
  const visualBox = document.getElementById("visualBox");

  // Contenido para cada tab
  const monitoringContent = `
    <h3 class="text-2xl font-bold mb-2 dark:text-white">IoT Monitorizazioa</h3>
    <p class="text-black dark:text-white mb-4">
  Zure IoT ekosistema osoaren ikusgarritasuna denbora errealean.
    </p>
    <ul class="space-y-2 text-sm text-gray-700 dark:text-white">
      <li class="flex items-start gap-2">
        <span>✔</span>Milisegundoko zehaztasunarekin denbora errealeko monitorizazioa
      </li>
      <li class="flex items-start gap-2">
        <span>✔</span> Pertsonalizatu daitezkeen kontrol-panelak
      </li>
      <li class="flex items-start gap-2">
        <span>✔</span>  Alertak adimendunak eta mantentze prediktiboa
      </li>
      <li class="flex items-start gap-2">
        <span>✔</span> Datu historikoak eta kontsultak
      </li>
    </ul>
  `;

  const monitoringVisual = `
    <div class="text-center">
     <img src="./img/IoT_10.png" alt="Nature" class="w-full h-full object-cover rounded">
    </div>
  `;

  const apiContent = `
    <h3 class="text-2xl font-bold mb-2 dark:text-white">IoT API Integratua</h3>
    <p class="text-gray-600 dark:text-white mb-4">
      Gure IoT API-k zure gailuak, datuak eta sistemak integratzeko aukera ematen du.
    </p>
    <ul class="space-y-2 text-sm text-gray-700 dark:text-white">
      <li class="flex items-start gap-2">
        <span>✔</span> REST API erraza eta dokumentatua
      </li>
      <li class="flex items-start gap-2">
        <span>✔</span> Gailu kudeaketa automatizatua
      </li>
      <li class="flex items-start gap-2">
        <span>✔</span> Datuen bilketa denbora errealean
      </li>
      <li class="flex items-start gap-2">
        <span>✔</span> Autentikazio eta baimen sistema segurua
      </li>
      <li class="flex items-start gap-2">
        <span>✔</span> SDKak eta adibideak hizkuntza ezberdinetan
      </li>
    </ul>
  `;

  const apiVisual = `
   <div class="text-center">
     <img src="./img/IoT_11.png" alt="Nature" class="w-full h-full object-cover rounded">
    </div>
  `;

  function activateTab(tab) {
    if (tab === "monitoring") {
      monitoringTab.classList.add("bg-gray-100");
      apiTab.classList.remove("bg-gray-100");
      contentBox.innerHTML = monitoringContent;
      visualBox.innerHTML = monitoringVisual;
    } else {
      apiTab.classList.add("bg-gray-100");
      monitoringTab.classList.remove("bg-gray-100");
      contentBox.innerHTML = apiContent;
      visualBox.innerHTML = apiVisual;
    }
  }

  // Event listeners
  monitoringTab.addEventListener("click", () => activateTab("monitoring"));
  apiTab.addEventListener("click", () => activateTab("api"));

  // Inicializar con el contenido de Monitoring
  activateTab("monitoring");
});

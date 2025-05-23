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


//zerbitzuak

document.addEventListener("DOMContentLoaded", () => {
  const monitoringTab = document.getElementById("monitoringTab");
  const apiTab = document.getElementById("apiTab");
  const contentBox = document.getElementById("contentBox");
  const visualBox = document.getElementById("visualBox");

  // Contenido para cada tab
  const monitoringContent = `
    <h3 class="text-2xl font-bold mb-2">Comprehensive IoT Monitoring</h3>
    <p class="text-gray-600 mb-4">
      Real-time visibility into your entire IoT ecosystem.
    </p>
    <ul class="space-y-2 text-sm text-gray-700">
      <li class="flex items-start gap-2">
        <span>✔</span> Real-time monitoring with millisecond precision
      </li>
      <li class="flex items-start gap-2">
        <span>✔</span> Customizable dashboards and reports
      </li>
      <li class="flex items-start gap-2">
        <span>✔</span> Intelligent alerting & predictive maintenance
      </li>
      <li class="flex items-start gap-2">
        <span>✔</span> Historical data and querying
      </li>
    </ul>
  `;

  const monitoringVisual = `
    <div class="text-center">
      <p class="text-lg font-semibold mb-2">IoT Monitoring Dashboard</p>
      <p class="text-gray-300 text-sm">Real-time visualization of your IoT system</p>
    </div>
  `;

  const apiContent = `
    <h3 class="text-2xl font-bold mb-2">IoT API Integratua</h3>
    <p class="text-gray-600 mb-4">
      Gure IoT API-k zure gailuak, datuak eta sistemak integratzeko aukera ematen du.
    </p>
    <ul class="space-y-2 text-sm text-gray-700">
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
    <pre class="text-green-400 font-mono text-sm overflow-x-auto">
GET /api/v1/devices
{
  "id": "dev_1234",
  "status": "online",
  "battery": 87
}
    </pre>
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

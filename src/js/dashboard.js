const chartData = [
  { time: "00:00", temperature: 21, humidity: 65 },
  { time: "04:00", temperature: 18, humidity: 72 },
  { time: "08:00", temperature: 23, humidity: 60 },
  { time: "12:00", temperature: 29, humidity: 50 },
  { time: "16:00", temperature: 33, humidity: 45 },
  { time: "20:00", temperature: 26, humidity: 58 },
];

let chartInstance;

function initLineChart() {
  const canvas = document.getElementById("lineChart");
  if (!canvas) return;

  if (chartInstance) {
    chartInstance.destroy(); // Limpia gráfico previo
  }

  const ctx = canvas.getContext("2d");
  const isDark = document.documentElement.classList.contains("dark");

  const textColor = isDark ? "#FFFFFF" : "#000000";
  const gridColor = isDark ? "#D3D3D3" : "#d1d5db";

  chartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: chartData.map((d) => d.time),
      datasets: [
        {
          label: "Temperatura (°C)",
          data: chartData.map((d) => d.temperature),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          tension: 0.4,
        },
        {
          label: "Hezetasuna (%)",
          data: chartData.map((d) => d.humidity),
          borderColor: "rgb(59, 130, 246)",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: textColor },
        },
      },
      scales: {
        x: {
          title: { display: true, text: "Time", color: textColor },
          ticks: { color: textColor },
          grid: { color: gridColor },
        },
        y: {
          title: { display: true, text: "Value", color: textColor },
          ticks: { color: textColor },
          grid: { color: gridColor },
        },
      },
    },
  });
}

// 🔁 Observa cambios en el modo oscuro
const observer = new MutationObserver(() => {
  initLineChart();
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["class"],
});

//IoT examples
const iotDevices = [
  {
    id: "DEV001",
    name: "Tenperatura Sentsorea A1",
    status: "online",
    location: "Eraikina A - 1. Solairua",
    lastSeen: "2 minutu lehenago",
  },
  {
    id: "DEV002",
    name: "Hezetasun Neurgailua B2",
    status: "online",
    location: "Eraikina B - 2. Solairua",
    lastSeen: "1 minutu lehenago",
  },
  {
    id: "DEV003",
    name: "Presio Neurgailua C1",
    status: "offline",
    location: "Eraikina C - 1. Solairua",
    lastSeen: "15 minutu lehenago",
  },
  {
    id: "DEV004",
    name: "Mugimendu Detektagailua A3",
    status: "online",
    location: "Eraikina A - 3. Solairua",
    lastSeen: "30 segundo lehenago",
  },
  {
    id: "DEV005",
    name: "Aire Kalitate Neurgailua B1",
    status: "online",
    location: "Eraikina B - 1. Solairua",
    lastSeen: "45 segundo lehenago",
  },
  {
    id: "DEV006",
    name: "Argi Sentsorea C2",
    status: "offline",
    location: "Eraikina C - 2. Solairua",
    lastSeen: "8 minutu lehenago",
  },
  {
    id: "DEV007",
    name: "Tremendu Sentsorea A2",
    status: "online",
    location: "Eraikina A - 2. Solairua",
    lastSeen: "1 minutu lehenago",
  },
  {
    id: "DEV008",
    name: "Gas Detektagailua B3",
    status: "online",
    location: "Eraikina B - 3. Solairua",
    lastSeen: "3 minutu lehenago",
  },
  {
    id: "DEV009",
    name: "Ur Maila Neurgailua C3",
    status: "offline",
    location: "Eraikina C - 3. Solairua",
    lastSeen: "22 minutu lehenago",
  },
  {
    id: "DEV010",
    name: "Energia Neurgailua A4",
    status: "online",
    location: "Eraikina A - 4. Solairua",
    lastSeen: "2 minutu lehenago",
  },
];

//Alert examples
const alertsData = [
  {
    id: "ALT001",
    timestamp: "2024-01-15 14:32:15",
    severity: "critical",
    message: "Tenperatura sentsorea DEV001 threshold-etik gora (35°C)",
    device: "DEV001",
  },
  {
    id: "ALT002",
    timestamp: "2024-01-15 14:28:42",
    severity: "warning",
    message: "DEV003 gailuaren konexioa moztuta detektatua",
    device: "DEV003",
  },
  {
    id: "ALT003",
    timestamp: "2024-01-15 14:15:33",
    severity: "info",
    message: "DEV007-rentzat programatutako mantenua burutua",
    device: "DEV007",
  },
  {
    id: "ALT004",
    timestamp: "2024-01-15 13:45:21",
    severity: "critical",
    message: "Gas ihes bat detektatua DEV008 sentsoreak",
    device: "DEV008",
  },
  {
    id: "ALT005",
    timestamp: "2024-01-15 13:22:18",
    severity: "warning",
    message: "DEV006 gailuarentzako bateria baxuaren alerta",
    device: "DEV006",
  },
  {
    id: "ALT006",
    timestamp: "2024-01-15 12:58:45",
    severity: "info",
    message: "DEV004 gailuaren firmwarea arrakastaz eguneratua",
    device: "DEV004",
  },
  {
    id: "ALT007",
    timestamp: "2024-01-15 12:33:12",
    severity: "warning",
    message: "Hezetasun mailak ohikoak baino altuagoak B eraikinean",
    device: "DEV002",
  },
  {
    id: "ALT008",
    timestamp: "2024-01-15 11:47:39",
    severity: "critical",
    message: "Ura maila kritiko baxua C3 edukiontziaren barruan",
    device: "DEV009",
  },
];

function renderDevices(devices) {
  const container = document.getElementById("device-list");
  container.innerHTML = "";

  // ¡OJO! Todo el SVG dentro de backticks
  const svgOnline = `
    <svg class="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.33309 8.07433C0.92156 8.44266 0.886539 9.07485 1.25487 9.48638C1.62319 9.89791 2.25539 9.93293 2.66691 9.5646L1.33309 8.07433ZM21.3331 9.5646C21.7446 9.93293 22.3768 9.89791 22.7451 9.48638C23.1135 9.07485 23.0784 8.44266 22.6669 8.07433L21.3331 9.5646ZM12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21V19ZM12.01 21C12.5623 21 13.01 20.5523 13.01 20C13.01 19.4477 12.5623 19 12.01 19V21ZM14.6905 17.04C15.099 17.4116 15.7315 17.3817 16.1031 16.9732C16.4748 16.5646 16.4448 15.9322 16.0363 15.5605L14.6905 17.04ZM18.0539 13.3403C18.4624 13.7119 19.0949 13.682 19.4665 13.2734C19.8381 12.8649 19.8082 12.2324 19.3997 11.8608L18.0539 13.3403ZM7.96372 15.5605C7.55517 15.9322 7.52524 16.5646 7.89687 16.9732C8.2685 17.3817 8.90095 17.4116 9.3095 17.04L7.96372 15.5605ZM4.60034 11.8608C4.19179 12.2324 4.16185 12.8649 4.53348 13.2734C4.90511 13.682 5.53756 13.7119 5.94611 13.3403L4.60034 11.8608ZM2.66691 9.5646C5.14444 7.34716 8.41371 6 12 6V4C7.90275 4 4.16312 5.54138 1.33309 8.07433L2.66691 9.5646ZM12 6C15.5863 6 18.8556 7.34716 21.3331 9.5646L22.6669 8.07433C19.8369 5.54138 16.0972 4 12 4V6ZM12 21H12.01V19H12V21ZM12 16C13.0367 16 13.9793 16.3931 14.6905 17.04L16.0363 15.5605C14.9713 14.5918 13.5536 14 12 14V16ZM12 11C14.3319 11 16.4546 11.8855 18.0539 13.3403L19.3997 11.8608C17.4466 10.0842 14.8487 9 12 9V11ZM9.3095 17.04C10.0207 16.3931 10.9633 16 12 16V14C10.4464 14 9.02872 14.5918 7.96372 15.5605L9.3095 17.04ZM5.94611 13.3403C7.54544 11.8855 9.66815 11 12 11V9C9.15127 9 6.55344 10.0842 4.60034 11.8608L5.94611 13.3403Z"/>
    </svg>
  `;

  const svgOffline = `
    <svg class="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.33309 8.07433C0.92156 8.44266 0.886539 9.07485 1.25487 9.48638C1.62319 9.89791 2.25539 9.93293 2.66691 9.5646L1.33309 8.07433ZM21.3331 9.5646C21.7446 9.93293 22.3768 9.89791 22.7451 9.48638C23.1135 9.07485 23.0784 8.44266 22.6669 8.07433L21.3331 9.5646ZM12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21V19ZM12.01 21C12.5623 21 13.01 20.5523 13.01 20C13.01 19.4477 12.5623 19 12.01 19V21ZM14.6905 17.04C15.099 17.4116 15.7315 17.3817 16.1031 16.9732C16.4748 16.5646 16.4448 15.9322 16.0363 15.5605L14.6905 17.04ZM18.0539 13.3403C18.4624 13.7119 19.0949 13.682 19.4665 13.2734C19.8381 12.8649 19.8082 12.2324 19.3997 11.8608L18.0539 13.3403ZM7.96372 15.5605C7.55517 15.9322 7.52524 16.5646 7.89687 16.9732C8.2685 17.3817 8.90095 17.4116 9.3095 17.04L7.96372 15.5605ZM4.60034 11.8608C4.19179 12.2324 4.16185 12.8649 4.53348 13.2734C4.90511 13.682 5.53756 13.7119 5.94611 13.3403L4.60034 11.8608ZM10.5705 4.06305C10.0204 4.1118 9.61391 4.59729 9.66266 5.14741C9.71141 5.69754 10.1969 6.10399 10.747 6.05525L10.5705 4.06305ZM17.3393 10.3798C16.8567 10.1114 16.2478 10.285 15.9794 10.7677C15.711 11.2504 15.8847 11.8593 16.3673 12.1277L17.3393 10.3798ZM3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L3.70711 2.29289ZM20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L20.2929 21.7071ZM12 6C15.5863 6 18.8556 7.34716 21.3331 9.5646L22.6669 8.07433C19.8369 5.54138 16.0972 4 12 4V6ZM12 21H12.01V19H12V21ZM12 16C13.0367 16 13.9793 16.3931 14.6905 17.04L16.0363 15.5605C14.9713 14.5918 13.5536 14 12 14V16ZM9.3095 17.04C10.0207 16.3931 10.9633 16 12 16V14C10.4464 14 9.02872 14.5918 7.96372 15.5605L9.3095 17.04ZM10.747 6.05525C11.1596 6.01869 11.5775 6 12 6V4C11.5185 4 11.0417 4.0213 10.5705 4.06305L10.747 6.05525ZM16.3673 12.1277C16.9757 12.466 17.5412 12.874 18.0539 13.3403L19.3997 11.8608C18.7751 11.2927 18.0844 10.7941 17.3393 10.3798L16.3673 12.1277ZM2.29289 3.70711L5.46648 6.8807L6.8807 5.46648L3.70711 2.29289L2.29289 3.70711ZM2.66691 9.5646C3.81213 8.53961 5.12648 7.70074 6.56232 7.09494L5.78486 5.25224C4.14251 5.94517 2.64069 6.904 1.33309 8.07433L2.66691 9.5646ZM5.46648 6.8807L9.46042 10.8746L10.8746 9.46042L6.8807 5.46648L5.46648 6.8807ZM9.46042 10.8746L20.2929 21.7071L21.7071 20.2929L10.8746 9.46042L9.46042 10.8746ZM5.94611 13.3403C7.15939 12.2367 8.67355 11.4612 10.3496 11.1508L9.98543 9.18424C7.93271 9.5644 6.08108 10.5139 4.60034 11.8608L5.94611 13.3403Z"/>
    </svg>
  `;

  devices.forEach((device) => {
    const badgeColor =
      device.status === "online"
        ? "bg-green-300 text-black"
        : "bg-gray-200 text-black";

    const icon = device.status === "online" ? svgOnline : svgOffline;

    container.innerHTML += `
        <a href="iot.html" class="block">
      <div class="flex items-center justify-between border p-3 rounded-md dark:bg-cyan-800 hover:bg-gray-50 dark:hover:bg-cyan-900 ">
        <div class="flex items-center gap-3">
          ${icon}
          <div>
          <p class="text-sm font-medium text-black dark:text-white">${device.name}</p>
<p class="text-xs text-black dark:text-white">${device.location}</p>

          </div>
        </div>
        <div class="text-right">
          <span class="text-xs px-2 py-0.5 rounded font-bold ${badgeColor}">${device.status}</span>
<p class="text-xs text-black dark:text-white mt-1">${device.lastSeen}</p>
        </div>
      </div>
      </a>
    `;
  });
}

function renderAlerts(alerts) {
  const container = document.getElementById("alert-list");
  container.innerHTML = "";

  const icons = {
    critical: `
    <svg class="h-5 w-5  text-red-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z" id="error">

    </svg>
  `,
    warning: `
    <svg class="w-5 h-5 text-yellow-500" viewBox="0 0 294.995 294.995" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M291.874,248.279L165.605,26.526c-4.007-7.037-10.776-11.26-18.107-11.26s-14.101,4.202-18.107,11.239L3.121,248.238
      c-3.979,6.989-4.164,15.013-0.493,21.326c3.67,6.313,10.663,10.165,18.705,10.165h252.329c8.042,0,15.035-3.852,18.705-10.165
      C296.038,263.251,295.854,255.268,291.874,248.279z M146.665,86.229c9.665,0,17.5,7.835,17.5,17.5v63
      c0,9.665-7.835,17.5-17.5,17.5c-9.665,0-17.5-7.835-17.5-17.5v-63C129.165,94.064,137,86.229,146.665,86.229z
      M147.498,204.005c9.665,0,17.5,7.835,17.5,17.5c0,9.665-7.835,17.5-17.5,17.5c-9.665,0-17.5-7.835-17.5-17.5
      C129.998,211.84,137.833,204.005,147.498,204.005z"/>
    </svg>
  `,
    info: `
    <svg class="w-5 h-5 text-blue-500" viewBox="0 0 416.979 416.979" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85
      c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786
      c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576
      c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765
      c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/>
    </svg>
  `,
  };

  const badgeColors = {
    critical: "bg-red-400 text-black",
    warning: "bg-yellow-400 text-black",
    info: "bg-blue-300 text-black",
  };

  alerts.forEach((alert) => {
    container.innerHTML += `
        <div class="border rounded-lg p-4 bg-white  dark:bg-cyan-800 dark:hover:bg-cyan-900 shadow-sm hover:bg-gray-50 dark:">
            <div class="flex gap-3 items-start">
                <div class="mt-1">
                    ${icons[alert.severity]}
                </div>
                <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                        <span class="flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full  ${
                          badgeColors[alert.severity]
                        }">
                            ${alert.severity}
                        </span>
                        <span class="text-xs text-black dark:text-white">${
                          alert.device
                        }</span>
                    </div>
                    <p class="text-sm text-black dark:text-white">${
                      alert.message
                    }</p>
                    <p class="text-xs text-black dark:text-white">${
                      alert.timestamp
                    }</p>
                </div>
            </div>
        </div>
        `;
  });
}

//Matomo
let lastTrackedSearch = "";
let lastTrackedStatus = "";

function applyDeviceFilter() {
  const term = document.getElementById("search-input").value.toLowerCase();
  const status = document.getElementById("status-filter").value;
  const filtered = iotDevices.filter((device) => {
    const matchesStatus = status === "all" || device.status === status;
    const matchesSearch = device.name.toLowerCase().includes(term);
    return matchesStatus && matchesSearch;
  });
  renderDevices(filtered);
  //Matomo

  if (term && term !== lastTrackedSearch) {
    lastTrackedSearch = term;
    if (typeof _paq !== "undefined") {
      _paq.push(["trackEvent", "IoT List", "Search", term]);
    }
  }

  // Track filter change
  if (status !== lastTrackedStatus) {
    lastTrackedStatus = status;
    if (typeof _paq !== "undefined") {
      _paq.push(["trackEvent", "IoT List", "Filter by Status", status]);
    }
  }
}

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  initLineChart();
  renderDevices(iotDevices);
  renderAlerts(alertsData);

  document
    .getElementById("search-input")
    .addEventListener("input", applyDeviceFilter);
  document
    .getElementById("status-filter")
    .addEventListener("change", applyDeviceFilter);
});

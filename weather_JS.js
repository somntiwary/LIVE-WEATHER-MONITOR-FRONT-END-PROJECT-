let unit = "metric"; // Default Celsius
let isDark = false;
let lastWeatherData = null; // Store last fetched weather data

const apiKey = "API_KEY"; // Replace this with your API Key

async function getWeather(city = null) {
  const input = document.getElementById("cityInput").value.trim();
  const cityName = city || input;
  const resultDiv = document.getElementById("weatherResult");

  if (!cityName) {
    resultDiv.innerHTML = "<p>⚠️ Please enter a city name.</p>";
    return;
  }

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`;

  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    lastWeatherData = structuredClone(data); // Store original data
    displayWeather(data);
    saveSearch(cityName);
  } catch (error) {
    resultDiv.innerHTML = `<p>❌ Error: ${error.message}</p>`;
  }
}

function displayWeather(data) {
  const resultDiv = document.getElementById("weatherResult");
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const cityTime = new Date((data.dt + data.timezone) * 1000)
    .toUTCString()
    .slice(17, 25);

  changeBackground(data.main.temp);

  resultDiv.innerHTML = `
  <h2>${data.name}, ${data.sys.country}</h2>
  <p>🕒 Local Time: ${cityTime}</p>

  <div class="info-container">
    <div class="info-box">🌡️ Temperature: ${data.main.temp.toFixed(1)} ${tempUnit}</div>
    <div class="info-box">🤗 Feels Like: ${data.main.feels_like.toFixed(1)} ${tempUnit}</div>
    <div class="info-box">💧 Humidity: ${data.main.humidity}%</div>
    <div class="info-box">🌬️ Wind Speed: ${data.wind.speed} m/s</div>
    <div class="info-box">🔍 Visibility: ${data.visibility / 1000} km</div>
    <div class="info-box">📊 Pressure: ${data.main.pressure} hPa</div>
  </div>
`;
}

function changeBackground(temp) {
  const body = document.body;
  if (unit === "metric") {
    if (temp <= 10) body.style.background = "linear-gradient(to right, #74ebd5, #ACB6E5)";
    else if (temp <= 25) body.style.background = "linear-gradient(to right, #fddb92, #d1fdff)";
    else body.style.background = "linear-gradient(to right, #ff6e7f, #bfe9ff)";
  } else {
    // Fahrenheit scale
    if (temp <= 50) body.style.background = "linear-gradient(to right, #74ebd5, #ACB6E5)";
    else if (temp <= 77) body.style.background = "linear-gradient(to right, #fddb92, #d1fdff)";
    else body.style.background = "linear-gradient(to right, #ff6e7f, #bfe9ff)";
  }
}

function toggleUnit() {
  unit = unit === "metric" ? "imperial" : "metric";

  if (lastWeatherData) {
    const convertedData = structuredClone(lastWeatherData);

    // Convert temperature values manually
    if (unit === "imperial") {
      convertedData.main.temp = (convertedData.main.temp * 9) / 5 + 32;
      convertedData.main.feels_like = (convertedData.main.feels_like * 9) / 5 + 32;
    } else {
      convertedData.main.temp = ((convertedData.main.temp - 32) * 5) / 9;
      convertedData.main.feels_like = ((convertedData.main.feels_like - 32) * 5) / 9;
    }

    displayWeather(convertedData);
  } else {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) getWeather(lastCity);
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  isDark = !isDark;
}

function saveSearch(city) {
  localStorage.setItem("lastCity", city);
  let history = JSON.parse(localStorage.getItem("history")) || [];
  if (!history.includes(city)) {
    history.unshift(city);
    if (history.length > 5) history.pop();
    localStorage.setItem("history", JSON.stringify(history));
    displayHistory();
  }
}

function displayHistory() {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const list = document.getElementById("historyList");
  list.innerHTML = "";
  history.forEach(city => {
    const li = document.createElement("li");
    li.textContent = city;
    li.onclick = () => getWeather(city);
    list.appendChild(li);
  });
}

function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async position => {
      const { latitude, longitude } = position.coords;
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
      const res = await fetch(apiURL);
      const data = await res.json();
      lastWeatherData = structuredClone(data);
      displayWeather(data);
      saveSearch(data.name);
    }, () => {
      alert("Location permission denied!");
    });
  } else {
    alert("Geolocation is not supported.");
  }
}

// Initialize
window.onload = displayHistory;

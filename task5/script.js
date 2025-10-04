const sampleData = {
  "delhi": {
    name: "Delhi",
    country: "IN",
    temp: 32,
    humidity: 55,
    wind: 3.5,
    main: "Clouds",
    description: "scattered clouds",
    icon: "03d"
  },
  "mumbai": {
    name: "Mumbai",
    country: "IN",
    temp: 30,
    humidity: 70,
    wind: 4,
    main: "Rain",
    description: "light rain",
    icon: "10d"
  },
  "bangalore": {
    name: "Bangalore",
    country: "IN",
    temp: 28,
    humidity: 60,
    wind: 2.5,
    main: "Clear",
    description: "clear sky",
    icon: "01d"
  }
};

function getWeather() {
  const city = document.getElementById('cityInput').value.trim().toLowerCase();
  const weatherDiv = document.getElementById('weatherInfo');

  if(!city) return alert("Please enter a city name");

  if(sampleData[city]) {
    const data = sampleData[city];
    weatherDiv.innerHTML = `
      <h2>${data.name}, ${data.country}</h2>
      <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png" alt="Weather Icon">
      <div class="info"><strong>${data.main}</strong> - ${data.description}</div>
      <div class="info">Temperature: ${data.temp} °C</div>
      <div class="info">Humidity: ${data.humidity}%</div>
      <div class="info">Wind Speed: ${data.wind} m/s</div>
    `;
  } else {
    weatherDiv.innerHTML = `<p>Sample data not available for "${city}". Try Delhi, Mumbai, or Bangalore.</p>`;
  }
}

// Show Delhi weather by default on page load
window.onload = () => {
  document.getElementById('cityInput').value = "Delhi";
  getWeather();
};

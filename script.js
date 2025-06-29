const apiKey = "14484e85f7c14e249fb171816252906";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Please enter a city name.");

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert("City not found.");
        return;
      }

      document.getElementById("location").innerText = `${data.location.name}, ${data.location.country}`;
      document.getElementById("condition").innerText = `${data.current.condition.text}`;
      document.getElementById("temperature").innerText = `🌡️ Temp: ${data.current.temp_c} °C`;
      document.getElementById("feels").innerText = `🤗 Feels Like: ${data.current.feelslike_c} °C`;
      document.getElementById("humidity").innerText = `💧 Humidity: ${data.current.humidity}%`;
      document.getElementById("wind").innerText = `💨 Wind: ${data.current.wind_kph} km/h`;
      document.getElementById("lastUpdated").innerText = `🕒 Updated: ${data.current.last_updated}`;
      document.getElementById("icon").src = `https:${data.current.condition.icon}`;

      document.getElementById("weatherInfo").classList.remove("hidden");
    })
    .catch(error => {
      console.error(error);
      alert("Something went wrong. Please try again.");
    });
}

document.getElementById("modeToggle").addEventListener("change", (e) => {
  document.body.classList.toggle("light", e.target.checked);
});

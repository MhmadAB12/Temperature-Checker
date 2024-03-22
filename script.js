const temperatureDiv = document.getElementById('temperature');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getTemperature);
} else {
  temperatureDiv.textContent = 'Geolocation is not supported by this browser.';
}

function getTemperature(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const apiKey = '5a4e1249629bf9175b13729909ca6fec';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      temperatureDiv.textContent = `${temperature}°C`;
    })
    .catch(error => {
      temperatureDiv.textContent = 'Error fetching temperature.';
      console.error(error);
    });
}
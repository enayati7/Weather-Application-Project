const APIKey = "549111750bad482f83faa2e63f98e1be";

function getWeather() {
  let city = document.getElementById("search-box").value;
  document.getElementById("search").style.display = "none";
  document.getElementById("loading").style.display = "block";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let temp = data.main.temp;
      let wind = data.wind.speed;
      let humidity = data.main.humidity;
      let pressure = data.main.pressure;
      let region = data.sys.country;
      let cityName = data.name;
      let currentWeather = data.weather[0].description;
      document.getElementById("temp-value").innerHTML = temp + " ° c";
      document.getElementById("wind-speed").innerHTML = wind + " km/h";
      document.getElementById("humidity").innerHTML = humidity + " %";
      document.getElementById("pressure").innerHTML = pressure + " mb";
      document.getElementById("current-weather").innerHTML = currentWeather;
      document.getElementById("city-name-text").innerHTML =
        cityName + " , " + region;
    })
    .catch((error) => {
      alert(error);
    });

  document.getElementById("status-page").style.display = "block";
  document.getElementById("loading").style.display = "none";
  document.getElementById("search").style.display = "block";
}

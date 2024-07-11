const apiKey = "723ea80a622e4fdf9affa23adafb3243";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "cloud.png"
    } 
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear-sky.png"
    } 
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rainy-day.png"
    } 
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzel.png"
    } 
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png"
    }
}


searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})


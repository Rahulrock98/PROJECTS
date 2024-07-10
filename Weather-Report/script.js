const apiKey = "723ea80a622e4fdf9affa23adafb3243";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=odisha&units=metric";

async function checkWeather(){
    const response  = await fetch(apiUrl + `&appid=${apiKey}`);
        var data =  await response.json();
        console.log(data);
    
}
checkWeather();
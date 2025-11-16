let btn = document.getElementById('searchBtn');
let city = document.getElementById('city');
let cityName = document.getElementById('cityName');
let temperature = document.getElementById('temperature');
let description = document.getElementById('description');
let icon = document.getElementById('icon');

async function weatherApp(url) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=8aeddb731ed7b529ca6a76ba42241d55&units=metric`;
    let Response = await fetch(url);
    let data = await Response.json();
    console.log(data);

    let Items = document.getElementById('Items');
    Items.style.display = 'flex'; 

    // display items

    cityName.innerHTML = data.name;
temperature.innerHTML = `${data.main.temp.toFixed(1)} °C`;  
    description.innerHTML = data.weather[0].description;
    let iconCode = data.weather[0].icon;
    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="Weather Icon">`;


}
btn.addEventListener('click', weatherApp);    
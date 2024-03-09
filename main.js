const cityInput = document.querySelector(".inputText")
const btn = document.querySelector(".btn")

//olay izleyicisi
btn.addEventListener("click", () => {
    const cityName = cityInput.value
    getData(cityName)
})

function getData(name){
    const API = "ca3c0d7195ae4d4aeb3a2813b5b640e6";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;

    fetch(baseURL)
    .then (res => res.json())
    .then(data =>{
       const {name, sys:{country}, main: {temp, feels_like, humidity}, weather:[{description}], wind:{speed}} = data;
       //console.log(name, country, temp, feels_like, humidity, description, speed)

       //verileri js e çekme
       const city = document.querySelector(".city")
       const temperature = document.querySelector(".temp")
       const hum = document.querySelector(".humidity")
       const wind = document.querySelector(".wind")
       const weatherDesc = document.querySelector(".weather")
       const feeling = document.querySelector(".feeling")
       console.log(city, temperature, hum, wind, weatherDesc, feeling)

       city.textContent = `${name}, ${country}`
       temperature.innerText = `${temp.toFixed(0)}°C`
       hum.textContent = `Nem: %${humidity}`
       wind.innerHTML = `Rüzgar: ${speed}km/s`
       weatherDesc.innerHTML = `<i>${description.toUpperCase()}</i>`
       feeling.textContent = `Hissedilen Sıcaklık  ${feels_like.toFixed(1)}°C`
    })
    .catch(err => console.log(err))

    cityInput.value = "";
    cityInput.focus();
}
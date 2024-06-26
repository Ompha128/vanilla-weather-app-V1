function changeCity(event){
    event.preventDefault();
    let inputElement = document.querySelector("#search-input");
    let cityElement=document.querySelector("#current-city");
    let currentCity=inputElement.value;
    cityElement.innerHTML=currentCity;
    fetchCity(currentCity);

}

function getTemperature(response){
  console.log(response);
  
  let temperatureElement = document.querySelector("#temperature-value");
  let currentTemperature =Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  let timeElement = document.querySelector("#current-time");
  let date=new Date(response.data.time * 1000);
  let descriptionElement=document.querySelector("#description");
  let humidityElement=document.querySelector("#humidity");
  let windElement=document.querySelector("#wind");
  let iconElement=document.querySelector("#icon");
  
  
  temperatureElement.innerHTML = currentTemperature;
  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML=response.data.condition.description;
  humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
  windElement.innerHTML=`${response.data.wind.speed}km/h`;
 iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="temp-icon" />`;
}
  

function formatDate(date) {
  
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day} ${hours}:${minutes}`;

}


function fetchCity(city){

let apiKey = "a745311c9tebfbc21o9ebe360e7a0417";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(getTemperature);
}


let form=document.querySelector("#search-form");
form.addEventListener("submit",changeCity);

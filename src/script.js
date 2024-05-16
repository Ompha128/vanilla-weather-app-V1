function changeCity(event){
    event.preventDefault();
    let inputElement = document.querySelector("#search-input");
    let cityElement=document.querySelector("#current-city");
    let currentCity=inputElement.value;
    cityElement.innerHTML=currentCity;
    fetchCity(currentCity);

}

function getTemperature(response){
  
  let temperatureElement = document.querySelector("#temperature-value");
  let currentTemperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = currentTemperature;
}

function fetchCity(city){

let apiKey = "a745311c9tebfbc21o9ebe360e7a0417";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(getTemperature);
}
let form=document.querySelector("#search-form");
form.addEventListener("submit",changeCity);
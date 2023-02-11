// data
// variable to store the element
// function to get the data from weather app
// manipulate the variables of already created element

let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temperature = document.getElementById("temperature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");


const getData = async (event) => {
    event.preventDefault();
    if(!inputBox.value){
        alert("Please Enter the city name");
        return;
    }

    // 
    const city = inputBox.value;
    // Fetch details
    const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=2330b4cff9df477bb0a105928231102&q=${city}`);

    const orgData = await fetchData.json();
    data = orgData;
    console.log(data);

    // display the
    countryName.innerHTML = data.location.country;
    stateName.innerHTML = data.location.region;
    cityName.innerHTML = data.location.name;
    humidity.innerHTML = data.current.humidity;
    windSpeed.innerHTML =data.current.wind_kph;
    logoImage.src = data.current.condition.icon;
    weatherStatus.innerHTML = data.current.condition.text;
    temperature.innerHTML = data.current.temp_c;
};







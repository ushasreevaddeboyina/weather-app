const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fc5174cc76msh41e25e86d04adc0p14dd36jsn70b2623701cc',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// Define an async function that accepts a city name
async function fetchWeather(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        // Update DOM elements with the fetched data
        document.getElementById('temp').innerHTML = result.temp;
        document.getElementById('feels_like').innerHTML = result.feels_like;
        document.getElementById('humidity').innerHTML = result.humidity;
        document.getElementById('min_temp').innerHTML = result.min_temp;
        document.getElementById('max_temp').innerHTML = result.max_temp;
        document.getElementById('wind_speed').innerHTML = result.wind_speed;
        document.getElementById('wind_degrees').innerHTML = result.wind_degrees;
        document.getElementById('sunrise').innerHTML = result.sunrise;
        document.getElementById('sunset').innerHTML = result.sunset;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Define the getWeather function
function getWeather(city) {
    document.getElementById('cityName').innerHTML = city;
    fetchWeather(city);
}

// Add event listener for the submit button
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getWeather(city);
});

// Call the fetchWeather function for the initial city
fetchWeather('Hyderabad');

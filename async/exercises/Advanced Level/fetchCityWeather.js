async function fetchData(url) {
    const response = await fetch(url);
    const data = response.json();
    return data;
}

async function fetchCityWeather(countryName) {
    const countryResponse = await fetchData(`https://restcountries.com/v3.1/name/${countryName}`);
    // const countryData = await fetchCountryData("Rwanda");
    const [lat, lon] = countryResponse[0].latlng;
    const capitalCity = countryResponse[0].capital.join("");
    const cityWeather = await fetchData(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    const currentWeather = cityWeather.current_weather.temperature;
    return {
        country: countryName,
        capital: capitalCity,
        weather: currentWeather
    }
}

fetchCityWeather("Rwanda")
    .then(data => {
        console.log(`Country: ${data.country}`);
        console.log(`Capital: ${data.capital}`);
        console.log(`Current Temperature: ${data.weather}°C`);
    }).catch(error => {
        console.error(error)
    })
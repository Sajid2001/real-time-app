const NewsModel = require('../Models/newsModel');
const WeatherModel = require('../Models/weatherModel');
const axios = require('axios');

const geocodeSearch = async(searchTerm) => {
    const geocodeResponse = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchTerm)}&count=10&language=en&format=json`)
    const { results } = geocodeResponse.data;
    if(results){
        const {latitude, longitude, name} = results[0]
        return {latitude, longitude, city:name}
    } else {
        throw new Error('No results found for the given search term');
    }

}

const fetchNewsData = async(searchTerm) => {
    const newAPIResponse = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&sortBy=relevancy&apiKey=${process.env.NEWS_API_KEY}&pageSize=12`)
    const results = newAPIResponse.data;
    if (results.articles.length > 0) {
        const { articles } = results;
        return { articles };
      } else {
        throw new Error('No results found for the given search term');
      }
}

const fetchWeatherData = async(long,lat) => {
    const {timezone, timezone_abbreviation, hourly_temp} = await fetchTemperatureData(long,lat);
    const {hourly_air} = await fetchAirData(long,lat)
    const totalWeatherData = {
        timezone, timezone_abbreviation, hourly_temp, hourly_air
    }
    return {totalWeatherData};
}

const fetchTemperatureData = async(long,lat) => {
    const tempResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&past_days=7`)
    const results = tempResponse.data;
    if(results){
        const {timezone, timezone_abbreviation,hourly} = results;
        return {
            timezone,
            timezone_abbreviation,
            hourly_temp: hourly
        }
    } else {
        throw new Error('No results found for the given search term');
    }
}

const fetchAirData = async(long,lat) => {
    const airResponse = await axios.get(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${long}&hourly=pm10,pm2_5,carbon_monoxide,ozone&timezone=America%2FNew_York&past_days=7`)
    const results = airResponse.data;
    if(results){
        const{hourly} = results;
        return{
            hourly_air:hourly
        }
    } else {
        throw new Error('No results found for the given search term');
    }
}   


const fetchFromAllAPIs = async(searchTerm, longitude, latitude, city) => {
    const {articles} = await fetchNewsData(searchTerm)
    const {totalWeatherData} = await fetchWeatherData(longitude, latitude);
        const addCityNews = await NewsModel.create({city, articles})
        const addCityWeather = await WeatherModel.create(
        {
            city, 
            timezone:totalWeatherData.timezone,
            timezone_abbreviation:totalWeatherData.timezone_abbreviation,
            temperatureData:{ hourly_temp: totalWeatherData.hourly_temp },
            airData:{ hourly_air: totalWeatherData.hourly_air },
        })

        const fullData = {
        city:city,
        articles:articles,
        weatherData:totalWeatherData
        }

        return fullData;

}

module.exports = {
    geocodeSearch, fetchFromAllAPIs
}
const {geocodeSearch, fetchFromAllAPIs} = require('./helperFunctions');
const NewsModel = require('../Models/newsModel');
const WeatherModel = require('../Models/weatherModel');

const getSearch = async(req,res) => {
    try{
        const searchTerm = req.query.query;
        const {latitude, longitude, city} = await geocodeSearch(searchTerm);

        const cityNews = await NewsModel.findOne({city})
        const cityWeather = await WeatherModel.findOne({city})

        if(cityNews && cityWeather){
            const fullData = {
                city: cityNews.city,
                articles: cityNews.articles,
                weatherData: {
                  timezone: cityWeather.timezone,
                  timezone_abbreviation: cityWeather.timezone_abbreviation,
                  temperatureData: cityWeather.temperatureData,
                  airData: cityWeather.airData,
                },
              };
              console.log('fetched from Database');
              res.status(200).json(fullData);
        } else{
            const fullData = await fetchFromAllAPIs(searchTerm, longitude, latitude, city)
            console.log('fetched from APIs');
            res.status(200).json(fullData);
            }
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
    getSearch
}
const mongoose = require('mongoose');

const temperatureSchema = new mongoose.Schema({
    hourly_temp:{
        time:[
            {
                type: String,
                required:true,
            },
        ],
        temperature_2m:[
            {
                type:Number,
                required:true,
            }
        ],
        relativehumidity_2m:[
            {
                type:Number,
                required:true, 
            }
        ],
        precipitation_probability:[
            {
                type:Number,
                required:true, 
            }
        ]
    }
})

const airSchema = new mongoose.Schema({
    hourly_air:{
        time:[
            {
                type: String,
                required:true,
            },
        ],
        pm10:[
            {
                type:Number,
            }
        ],
        pm2_5:[
            {
                type:Number,
            }
        ],
        carbon_monoxide:[
            {
                type:Number,
            }
        ],
        ozone:[
            {
                type:Number,
            }
        ]
    }
})


const WeatherSchema = new mongoose.Schema({
    city:{
        type: String,
        required:true,
        min: 6,
        max:255
    },
    timezone:{
        type: String,
        required:true,
        min: 6,
        max:255
    },
    timezone_abbreviation:{
        type: String,
        required:true,
        min: 6,
        max:255
    },
    temperatureData:temperatureSchema,
    airData:airSchema,
    timestamp: {
        type: Date,
        default: Date.now,
        expires: '2m', 
    },
})

const WeatherModel = mongoose.model("weather", WeatherSchema);
module.exports = WeatherModel;
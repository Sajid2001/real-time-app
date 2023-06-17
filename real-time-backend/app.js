const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const searchRoutes = require('./Routes/searchRoutes')

dotenv.config();
const app = express()
const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology:true})
    .then((result) => {
        app.listen(port)
        console.log('connected to db');
    })
    .catch((err) => console.log(err));

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/search', searchRoutes);


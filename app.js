const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Routes
const RatingRoutes = require('./routes/rating.routes');
app.use('/', RatingRoutes);



mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(res =>{
        console.log("Connected to db");
    })
    .catch(err =>{
        console.log("Error connecting to DB: ", err);
    });


app.listen(process.env.PORT || 8080, () => {
    console.log("Node server running");
});
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONG_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connection succesfull");
    })
    .catch((err) => {
        console.log(err.message);
    });

const server = app.listen(process.env.PORT, () =>{
    console.log(`Server listening to port ${process.env.PORT}`);
});
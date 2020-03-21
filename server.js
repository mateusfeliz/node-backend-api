const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir');
const cors = require('cors');


require('dotenv').config()
const app = express();
app.use(express.json());
app.use(cors());



/* conectando db*/

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
    
);

requireDir('./src/models/');






/* rotas */
app.use('/api', require('./src/routes'));






app.listen(3001)
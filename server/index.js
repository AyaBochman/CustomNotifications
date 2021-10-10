const express = require('express');
require('dotenv').config()
const connectDB = require('./config/db');
const colors = require('colors');

//connection to db
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV}, App listening on port ${PORT}`.green);
});

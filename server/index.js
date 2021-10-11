const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors')
const colors = require('colors');
const notifications = require('./routes/notifications');
const configurations = require('./routes/configurations');
const users = require('./routes/users');

//connection to db
connectDB();

const app = express();
app.use(express.json());
app.use(cors())

//Mount routers
app.use('/api/v1/notifications', notifications);
app.use('/api/v1/configurations', configurations);
app.use('/api/v1/users', users);


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV}, App listening on port ${PORT}`
      .green
  );
});

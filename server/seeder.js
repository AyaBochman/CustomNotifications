const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();

//Load models
const Notification = require('./models/Notification');
const Configuration = require('./models/Configuration');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI);

//Read the JSON files
const notifications = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/notifications.json`, 'utf-8')
);
const configurations = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/configurations.json`, 'utf-8')
);

//Import into DB
const importData = async () => {
  try {
    await Notification.create(notifications);
    await Configuration.create(configurations);
    console.log('Data imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

//Delete data
const deleteData = async () => {
  try {
    await Notification.deleteMany();
    await Configuration.deleteMany();
    await User.deleteMany();
    console.log('Data destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}

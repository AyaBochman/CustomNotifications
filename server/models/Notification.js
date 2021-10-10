const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  message: {
    type: [String],
  },
  iconSrc: {
    type: String,
  },
  color: {
    type: String,
  },
});

module.exports = mongoose.model('notification', NotificationSchema);

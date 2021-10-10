const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const { NotificationSchema } = require(__dirname + '/Notification.js').schema;

const UserSchema = new mongoose.Schema({
  uuid: {
    type: String,
    default: uuidv4(),
  },
  notifications: {
    type: [NotificationSchema],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('user', UserSchema);

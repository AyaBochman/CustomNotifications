const mongoose = require('mongoose');

const ConfigurationSchema = new mongoose.Schema({
  minShowTimePeriod: {
    type: Number,
  },
  maxShowTimePeriod: {
    type: Number,
  },
  minDuration: {
    type: Number,
  },
  maxDuration: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('configuration', ConfigurationSchema);

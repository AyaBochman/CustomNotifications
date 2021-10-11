const express = require('express');
const {
getNotifications
} = require('../controllers/notifications');

const router = express.Router();

router.route('/')
.get(getNotifications)

module.exports = router;

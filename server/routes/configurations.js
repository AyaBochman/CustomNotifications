const express = require('express');
const {
getConfigurations
} = require('../controllers/configurations');

const router = express.Router();

router.route('/')
.get(getConfigurations)

module.exports = router;

const express = require('express');
const {
getNotifications
} = require('../controllers/notifications');

const router = express.Router();

router.route('/')
.get(getNotifications)

// router
//   .route('/:id')
//   .get(getBootcamp)
//   .put(updateBootcamp)
//   .delete(deleteBootcamp);

module.exports = router;

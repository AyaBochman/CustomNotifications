const express = require('express');
const {
createUser,
getUsers,
updateUser
} = require('../controllers/users');

const router = express.Router();

router.route('/')
.get(getUsers)
.post(createUser)

router.route('/:id')
.put(updateUser)

module.exports = router;

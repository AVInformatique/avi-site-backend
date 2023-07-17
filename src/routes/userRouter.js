const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

router.get('/', (req, res) => {
    userService.getUsers()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

module.exports = router;

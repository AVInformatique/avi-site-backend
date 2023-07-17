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

router.post('/', (req, res) => {
    userService.addUser(req.body)
        .then((id) => {
            res.status(201).json(id);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.get('/:id', (req, res) => {
    userService.getUserById(req.params.id)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.put('/:id', (req, res) => {
    userService.updateUserById(req.params.id, req.body)
        .then(() => {
            res.status(200).json();
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.delete('/:id', (req, res) => {
    userService.deleteUserById(req.params.id)
        .then(() => {
            res.status(204).json();
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

module.exports = router;

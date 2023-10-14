const express = require('express');
const router = express.Router();
const alumniService = require('../services/alumniService');

router.get('/', (req, res) => {
    alumniService.getAlumnis()
        .then((alumnis) => {
            res.status(200).json(alumnis);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.post('/', (req, res) => {
    alumniService.addAlumni(req.body)
        .then((id) => {
            res.status(201).json(id);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.get('/:id', (req, res) => {
    alumniService.getAlumniById(req.params.id)
        .then((alumni) => {
            res.status(200).json(alumni);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.put('/:id', (req, res) => {
    alumniService.updateAlumniById(req.params.id, req.body)
        .then(() => {
            res.status(200).json();
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.delete('/:id', (req, res) => {
    alumniService.deleteAlumniById(req.params.id)
        .then(() => {
            res.status(204).json();
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

module.exports = router;

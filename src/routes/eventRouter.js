const express = require('express');
const router = express.Router();
const eventService = require('../services/eventService');

router.get('/', (req, res) => {
    eventService.getEvents()
        .then((events) => {
            res.status(200).json(events);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.post('/', (req, res) => {
    eventService.addEvent(req.body)
        .then((id) => {
            res.status(201).json(id);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.get('/time', (req, res) => {
    eventService.getEventsByTime(req.query["m"], req.query["y"])
        .then((events) => {
            res.status(200).json(events);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.get('/keywords/:keywords', (req, res) => {
    eventService.getEventsByKeywords(req.params.keywords)
        .then((events) => {
            res.status(200).json(events);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.get('/:id', (req, res) => {
    eventService.getEventById(req.params.id)
        .then((event) => {
            res.status(200).json(event);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.put('/:id', (req, res) => {
    eventService.updateEventById(req.params.id, req.body)
        .then(() => {
            res.status(200).json();
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.delete('/:id', (req, res) => {
    eventService.deleteEventById(req.params.id)
        .then(() => {
            res.status(204).json();
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

module.exports = router;

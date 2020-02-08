const express = require('express');
const router = express.Router();
const eventsService = require('./events.service');
var passport = require('passport');

// routes
router.post('/create', createEvent);
router.get('/getAll', getAllEvents);
router.patch('/update', updateEvent);
router.delete('/delete', deleteEvent);

module.exports = router;

function createEvent(req, res) {
  eventsService.createEvent(req.body, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function getAllEvents(req, res) {
  eventsService.getAllEvents(result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function updateEvent(req, res) {
  eventsService.updateEvent(req.body, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function deleteEvent(req, res) {
  eventsService.deleteEvent(req.body, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

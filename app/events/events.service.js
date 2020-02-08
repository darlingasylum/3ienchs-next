'use strict';

var config = require('../helpers/config');
const db = require('../helpers/db');

module.exports = {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent
};

function createEvent(body, callback) {
  db.createEvent(
    body,
    function(res) {
      return callback({
        success: true,
        message: 'Successfully created event.',
        event: res
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'The event creation failed.'
      });
    }
  );
}

function getAllEvents(callback) {
  db.getAllEvents(
    function(res) {
      return callback({
        success: true,
        message: 'Successfully got list of all events.',
        events: res
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'Cannot get list of all events.'
      });
    }
  );
}

function updateEvent(body, callback) {
  db.updateEvent(
    body,
    function(res) {
      return callback({
        success: true,
        message: 'Successfully updated event',
        event: res
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'Cannot update event.'
      });
    }
  );
}

function deleteEvent(body, callback) {
  db.deleteEvent(
    body,
    function(res) {
      return callback({
        success: true,
        message: 'Successfully deleted event',
        event: res
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'Cannot delete event.'
      });
    }
  );
}

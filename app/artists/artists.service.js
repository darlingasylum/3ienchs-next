'use strict';

const db = require('../helpers/db');

module.exports = {
  createArtist,
  getMusicArtists,
  getArtworkArtists,
  updateArtist,
  deleteArtist
};

function createArtist(body, callback) {
  db.createArtist(
    body,
    function(res) {
      return callback({
        success: true,
        message: 'Successfully created new artists.',
        artist: res
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'The artist creation failed.'
      });
    }
  );
}

function getArtworkArtists(callback) {
  db.getArtworkArtists(
    function(res) {
      return callback({
        success: true,
        message: 'Successfully got list of all artists.',
        artists: res
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'Cannot get list of all artists.'
      });
    }
  );
}

function getMusicArtists(callback) {
  db.getMusicArtists(
    function(res) {
      return callback({
        success: true,
        message: 'Successfully got list of all artists.',
        artists: res
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'Cannot get list of all artists.'
      });
    }
  );
}

function updateArtist(body, callback) {
  db.updateArtist(
    body,
    function(res) {
      return callback({
        success: true,
        message: 'Successfully updated artist',
        artist: res
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

function deleteArtist(body, callback) {
  db.deleteArtist(
    body,
    function(res) {
      return callback({
        success: true,
        message: 'Successfully deleted artist',
        artist: res
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'Cannot delete artist.'
      });
    }
  );
}

const express = require('express');
const router = express.Router();
const artistsService = require('./artists.service');

// routes
router.post('/create', createArtist);
router.get('/getArtworkArtists', getArtworkArtists);
router.get('/getMusicArtists', getMusicArtists);
router.patch('/update', updateArtist);
router.delete('/delete', deleteArtist);

module.exports = router;

function createArtist(req, res) {
  artistsService.createArtist(req.body, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function getArtworkArtists(req, res) {
  artistsService.getArtworkArtists(result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function getMusicArtists(req, res) {
  artistsService.getMusicArtists(result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function updateArtist(req, res) {
  artistsService.updateArtist(req.body, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function deleteArtist(req, res) {
  artistsService.deleteArtist(req.body, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

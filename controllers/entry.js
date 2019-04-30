const express = require('express');
const router = express.Router();

const Entry = require('../models/entry.js');

//Create Route
router.post('/', (req, res) => {
  Entry.create(req.body, (err, createdEntry) => {
    res.json(createdEntry);
  });
});


//Read Route
router.get('/', (req, res) => {
  Entry.find({}, (err, entries) => {
    res.json(entries);
  });
});

module.exports = router;

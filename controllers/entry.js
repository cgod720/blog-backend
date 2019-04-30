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

//Update Route
router.put('/:id', (req, res) => {
  Entry.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedEntry) => {
    res.json(updatedEntry);
  })
})

module.exports = router;

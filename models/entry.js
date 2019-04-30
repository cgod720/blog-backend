const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true
  },
  author: {
    type: String,
    require: true
  },
  body: String,
  publishDate: {
    type: Date,
    default: Date.now()
  },
  meta: {
    vote: Number,
    favs: Number
  }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;

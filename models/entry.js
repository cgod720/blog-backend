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
    votes: {
      type: Number,
      default: 0
    },
    favs: {
      type: Number,
      default: 0
    }
  }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;

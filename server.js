const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 5000;

//Database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/bloggin';

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  credentials: true
}

//Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

//Routes Controllers
const entryController = require('./controllers/entry.js');
app.use('/entry', cors(), entryController)

//Listener
app.listen(PORT, () => {
  console.log('Blog up\'n runnin\'');
});

mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log("Mongo online");
})

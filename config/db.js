const mongoose = require('mongoose');
const keys = require('./keys');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose
  .connect('mongodb://<marype>:<networkengineering12>@ds145584.mlab.com:45584/pusherpullfcc')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

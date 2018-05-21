const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/books', {
  //user & pass
});
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

// older Promise
// mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach(file => {
  // if (file.indexOf('.js') > 0 {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});

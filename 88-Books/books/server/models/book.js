const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    tequired: true,
    trim: true,
  },
  pages: {
    type: Number,
    required: true,
    min: 1,
  },
  publisher: String,
  year: Number,
  author: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
});

// collection => books
module.exports = mongoose.model('Book', bookSchema);

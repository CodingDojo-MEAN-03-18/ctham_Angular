// const mongoose = require('mongoose');
// const Book = mongoose.model('Book');
const mongoose = require('mongoose').model('Book');


module.exports = {
  // index: function (request, response) {}
  index(request, response) {
    console.log('requesting book data from server');
    Book.find({})
      .then(books => response.json(books))
      .catch(console.log);
  },
  show(request, response) {
    Book.findById(request.params.booksID)
      .then(book => response.json(book))
      .catch(console.log);
  },
  update(request, response) {
    Book.findByIdAndUpdate(
        request.params.bookID,
        request.body, {
          new: true
        }
      )
      .then(book => response.json(book))
      .catch(console.log);
  },
  create(request, response) {
    Book.find(request.body)
      .then(book => response.json(book))
      .catch(error => {
        const error = Object.keys(error.errors)
          .map(key => error.errors[key].message);
        response.json(errors);
      });
  },
  destory(request, response) {
    Book.findByIdAndRemove(request.params.bookID)
      .then(book => response.json(book))
      .catch(console.log);
  },
}

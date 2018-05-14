const bookController = require('../../controllers/books');

const router = require('express').Router();

// /books/:bookID

// /books

router
  .get('/', bookController.index)
  .post('/', bookController.create)
  .get('/:bookID', bookController.show)
  // .put('/:bookID', function (request, response) {
  //   bookController.update(request, response)
  // })
  .put('/:bookID', bookController.update)
  .delete('/:bookID', bookController.destory);

module.exports = router;

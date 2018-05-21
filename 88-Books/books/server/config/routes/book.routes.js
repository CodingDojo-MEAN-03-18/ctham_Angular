const bookConroller = require('../../controllers/books');

const router = require('express').Router();

//  /books/:bookID
//  /books

router
  .get('/', bookConroller.index)
  .post('/', bookConroller.create)
  .get('/:bookID', bookConroller.show)
  // .put('/:bookID', function (request, response) {
  //   bookConroller.update(request, response);
  // })
  .put('/:bookID', bookConroller.update)
  .delete('/:bookID', bookConroller.destory);

module.exports = router;

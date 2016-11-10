'use strict';

const Comment = use('App/Model/Comment');

class CommentController {

  * index(request, response) {
    const Comments = yield Comment.with('author', 'post').fetch();

    response.send(Comments);
  }

  * store(request, response) {
    const input = request.only('user_id', 'post_id', 'comment');
    const Comment = yield Comment.create(input);

    response.send(Comment);
  }

  * show(request, response) {
    const id = request.param('id');
    const Comment = yield Comment.with('author', 'post').where({ id }).firstOrFail();

    response.send(Comment);
  }

  * update(request, response) {
    const input = request.only('user_id', 'post_id', 'comment');
    const id = request.param('id');

    const Comment = yield Comment.with('author', 'post').where({ id }).firstOrFail();
    Comment.fill(input);
    yield Comment.save(input);

    response.send(Comment);
  }

  * destroy(request, response) {
    const id = request.param('id');
    const Comment = yield Comment.query().where({ id }).firstOrFail();
    yield Comment.delete();

    response.status(204).send();
  }

}

module.exports = CommentController;

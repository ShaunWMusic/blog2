'use strict';

const Comment = use('App/Model/Comment');

class CommentController {

  * index(request, response) {
    const comments = yield Comment.with('author', 'post').fetch();

    response.send(comments);
  }

  * store(request, response) {
    const input = request.only('user_id', 'post_id', 'comment');
    const comment = yield Comment.create(input);

    response.send(comment);
  }

  * show(request, response) {
    const id = request.param('id');
    const comment = yield Comment.with('author', 'post').where({ id }).firstOrFail();

    response.send(comment);
  }

  * update(request, response) {
    const input = request.only('user_id', 'post_id', 'comment');
    const id = request.param('id');

    const comment = yield Comment.with('author', 'post').where({ id }).firstOrFail();
    comment.fill(input);
    yield comment.save(input);

    response.send(comment);
  }

  * destroy(request, response) {
    const id = request.param('id');
    const comment = yield Comment.query().where({ id }).firstOrFail();
    yield comment.delete();

    response.status(204).send();
  }

}

module.exports = CommentController;

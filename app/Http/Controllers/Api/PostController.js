'use strict';

const Post = use('App/Model/Post');

class PostController {

  * index(request, response) {
    const Posts = yield Post.with('user').fetch();

    response.send(Posts);
  }

  * store(request, response) {
    const input = request.only('user_id', 'slug', 'title', 'posted_at', 'content');
    const Post = yield Post.create(input);

    response.send(Post);
  }

  * show(request, response) {
    const id = request.param('id');
    const Post = yield Post.with('user').where({ id }).firstOrFail();

    response.send(Post);
  }

  * update(request, response) {
    const input = request.only('user_id', 'slug', 'title', 'posted_at', 'content');
    const id = request.param('id');

    const Post = yield Post.with('user').where({ id }).firstOrFail();
    Post.fill(input);
    yield Post.save(input);

    response.send(Post);
  }

  * destroy(request, response) {
    const id = request.param('id');
    const Post = yield Post.query().where({ id }).firstOrFail();
    yield Post.delete();

    response.status(204).send();
  }

}

module.exports = PostController;

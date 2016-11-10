'use strict';

const Post = use('App/Model/Post');

class PostController {

  * index(request, response) {
    const posts = yield Post.with('user').fetch();

    response.send(posts);
  }

  * store(request, response) {
    const input = request.only('user_id', 'slug', 'title', 'posted_at', 'content');
    const post = yield Post.create(input);

    response.send(post);
  }

  * show(request, response) {
    const id = request.param('id');
    const post = yield Post.with('user').where({ id }).firstOrFail();

    response.send(post);
  }

  * update(request, response) {
    const input = request.only('user_id', 'slug', 'title', 'posted_at', 'content');
    const id = request.param('id');

    const post = yield Post.with('user').where({ id }).firstOrFail();
    post.fill(input);
    yield post.save(input);

    response.send(post);
  }

  * destroy(request, response) {
    const id = request.param('id');
    const post = yield Post.query().where({ id }).firstOrFail();
    yield post.delete();

    response.status(204).send();
  }

}

module.exports = PostController;

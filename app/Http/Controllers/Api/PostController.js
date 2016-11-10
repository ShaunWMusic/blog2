'use strict';

const Api.Post = use('App/Model/Api.Post');

class PostController {

  * index(request, response) {
    const api.Posts = yield Api.Post.with().fetch();

    response.send(api.Posts);
  }

  * store(request, response) {
    const input = request.only('user_id', 'slug', 'title', 'posted_at', 'content');
    const api.Post = yield Api.Post.create(input);

    response.send(api.Post);
  }

  * show(request, response) {
    const id = request.param('id');
    const api.Post = yield Api.Post.with().where({ id }).firstOrFail();

    response.send(api.Post);
  }

  * update(request, response) {
    const input = request.only('user_id', 'slug', 'title', 'posted_at', 'content');
    const id = request.param('id');

    const api.Post = yield Api.Post.with().where({ id }).firstOrFail();
    api.Post.fill(input);
    yield api.Post.save(input);

    response.send(api.Post);
  }

  * destroy(request, response) {
    const id = request.param('id');
    const api.Post = yield Api.Post.query().where({ id }).firstOrFail();
    yield api.Post.delete();

    response.status(204).send();
  }

}

module.exports = PostController;

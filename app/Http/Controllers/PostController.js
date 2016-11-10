'use strict'

const PostModel = use('App/Model/Post');
const slug = require('slug');

class PostController {

  * index(request, response) {
    const posts = yield PostModel.all();

    response.send(posts);
  }

  * create(request, response) {
    yield response.sendView('post.create');
  }

  * store(request, response) {
    // grab user inputs
    const {title, posted_at, content } = request.all();
    const { id } = request.currentUser;

    const post = yield PostModel.create({
      user_id: id,
      title, posted_at, content,
      slug: slug(title),
    });

    yield request.with({ success: `Your post "${post.title}" was created` }).flash();

    response.redirect('/posts');

  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = PostController

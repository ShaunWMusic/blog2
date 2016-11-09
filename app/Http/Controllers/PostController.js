'use strict'

const PostModel = use('App/Model/Post');
const slug = require('slug');

class PostController {

  // Show all posts
  * index(request, response) {
    const posts = yield PostModel.all();

    response.send(posts);
  }

  // Show the create new post form
  * create(request, response) {
    yield response.sendView('post.create');
  }

  // Submit new post
  * store(request, response) {
    // Grab User Inputs
    const { title, posted_at, content } =  request.all();
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

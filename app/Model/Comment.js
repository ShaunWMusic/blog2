'use strict';

const Lucid = use('Lucid');

class Comment extends Lucid {
  author() {
    return this.belongsTo('App/Model/User', 'id', 'user_id');
  }

  post() {
    return this.belongsTo('App/Model/Post', 'id', 'post_id');
  }
}

module.exports = Comment;

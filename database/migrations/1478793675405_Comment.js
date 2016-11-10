'use strict';

const Schema = use('Schema');

class CommentSchema extends Schema {

  up() {
    this.create('comments', (table) => {
      table.increments();
      table.integer('user_id').references('users.id');
      table.text('comment');
      table.integer('post_id').references('posts.id');
      table.timestamps();
    });
  }

  down() {
    this.drop('comments');
  }

}

module.exports = CommentSchema;

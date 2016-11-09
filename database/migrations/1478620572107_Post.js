'use strict'

const Schema = use('Schema')

class PostsTableSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      table.increments()
      table.timestamps()

      // Connect to our users table
      table.integer('user_id');

      // Fields to store data for a single Post
      table.string('slug');
      table.string('title');
      table.string('posted_at');
      table.string('content');
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostsTableSchema

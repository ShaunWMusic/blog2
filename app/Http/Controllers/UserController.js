'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {
  // Show a form to make a new account
  * create(request, response) {
    yield response.sendView('user.create');
  }

  // Save the account to the database
  * store(request, response) {
    // Grabbing inputs
    const { username, email, password } = request.all();

    try {
      // Save the user
      const user = yield User.create({
        username,
        email,
        password: yield Hash.make(password),
      });

      // Login the current user
      yield request.auth.login(user);

      // Give them a success message
      yield request.with({
        success: 'Congrats on your new account!',
      }).flash();

      // Redirect them to the main site
      response.redirect('/');
    } catch (e) {
      console.log(e);
      yield request
        .withOut('password') // shows us the old input values (except the password field)
        .andWith({ error: 'That username or email is already taken' }) // adds a message back
        .flash(); // Makes this data only last for one request

      response.redirect('back');
    }

  }

}

module.exports = UserController;

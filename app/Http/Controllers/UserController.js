'use strict'

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
      const user = yield User.create( {
        username,
        email,
        password: yield Hash.make(password),
      });

      yield request.auth.login(user);
      //login
      yield request.with({
        success: 'Congrats on your new account!',
      }).flash();
      //give them a success message
      //redirect them to the main site
      response.redirect('/');

    } catch(e) {
      yield request
        .withOut('password') // shows us the old input values
        .andWith({ error: 'That username or email is already taken' })
        .flash(); //Makes this data only last for one request

      response.redirect('back');
    }

  }

}
module.exports = UserController;

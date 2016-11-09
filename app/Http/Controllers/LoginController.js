'use strict'

class LoginController {

// show a login form to our user
  * create(request, response) {
    yield response.sendView('login.create');
  }

//respond to user trying to login
  * store(request, response) {
    const {email, password } = request.all();

    try {
      //look up user based on their emailcheck that users passwrod matches the input passwordreturn true if everything
      //return true if everything is ok
      //return false if anything fails
      const validLogin = yield request.auth.attempt(email, password)

      yield request.with({ success: 'You have logged in!' }).flash();

      response.redirect('/');
    }catch (e) {
      // send back the old inputs but not the password
        yield request.withOut('password')
        // send back an error message
          .andWith({ error: 'Credentials do not match.' })
          // only show the messages once
          .flash();

          // back from whence you come!


    response.redirect('back');
    }
  }

  // allow users to logout
  * destroy(request, response) {
    //
  }

}

module.exports = LoginController

'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

// show the welcome page if the user is logged in
Route.on('/').render('welcome').middleware('auth');
Route.on('/home').render('welcome');

// Make the Application respond to "sign-up" urls
Route.get('/sign-up', 'UserController.create');
Route.post('/sign-up', 'UserController.store');


Route.get('/login', 'LoginController.create');
Route.post('/login', 'LoginController.store');

// logout users on ANY type of request to "/logout"
Route.any('/logout', 'LoginController.destroy');


Route.resource('/posts', 'PostController');


Route.resource('/api/posts', 'Api/PostController').middleware('auth');
Route.resource('/api/comments', 'Api/CommentController').middleware('auth');

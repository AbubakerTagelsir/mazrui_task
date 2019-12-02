<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Auth::routes();

// POSTS APIS
Route::get('/posts', 'PostsController@index');

Route::get('/posts/new', 'PostsController@new');

Route::post('/posts/create', 'PostsController@create');

Route::get('/posts/{id}', 'PostsController@show');

Route::get('/posts/{id}/edit', 'PostsController@edit');

Route::get('/posts/{id}/update', 'PostsController@update');

Route::get('/posts/{id}/delete', 'PostsController@delete');

// comments APIS
Route::get('/posts/{post_id}/comments', 'CommentsController@index');

Route::get('/posts/{post_id}/comments/new', 'CommentsController@new');

Route::post('/posts/{post_id}/comments/create', 'CommentsController@create');

Route::get('/posts/{post_id}/comments/{id}', 'CommentsController@show');

Route::get('/comments/{id}/edit', 'CommentsController@edit');

Route::get('/comments/{id}/update', 'CommentsController@update');

Route::get('/comments/{id}/delete', 'CommentsController@delete');

// users

Route::prefix('v1')->group(function(){
    Route::post('login', 'Api\AuthController@login');
    Route::post('register', 'Api\AuthController@register');
    Route::group(['middleware' => 'auth:api'], function(){
    Route::post('getUser', 'Api\AuthController@getUser');
    });
   });
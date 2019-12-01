<?php

use Illuminate\Http\Request;

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


// POSTS APIS
Route::get('/posts', 'PostsController@index');

Route::get('/posts/new', 'PostsController@new');

Route::post('/posts/create', 'PostsController@create');

Route::get('/posts/{id}', 'PostsController@show');

Route::get('/posts/{id}/edit', 'PostsController@edit');

Route::get('/posts/{id}/update', 'PostsController@update');

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostsController extends Controller
{
    // list all posts 
    public function index(){
        $posts = Post::all();
        return $posts;
    }

    // create new post 
    public function new(){
        return "Form to create new Post";
    }

    // save new post
    public function create(Request $request){
        $input = $request->all();
        $post = Post::create($input);
        return $post;
    }

    // get post by id
    public function show($id){
        $post = Post::findOrFail($id);

        return $post;
    }
    // edit post by id
    public function edit($id){
        $post = Post::findOrFail($id);

        return $post;
    }
    // update post by id
    public function update(Request $request, $id){
        // $post = Post::findOrFail($id);
        $input = $request->all();
        $post = Post::findOrFail($id);
        $post->update($input);

        return $post;
    }
}

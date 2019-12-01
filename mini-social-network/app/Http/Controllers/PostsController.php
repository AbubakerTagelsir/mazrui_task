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
}

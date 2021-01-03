<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index(Request $request){
        return view('chat',['name'=>$request]);
    }

    public function formSubmit(Request $request)
    {
        return response()->json([
            'username' => $request->name
        ], 200);
    }
}

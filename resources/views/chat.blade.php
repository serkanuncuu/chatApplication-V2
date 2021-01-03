<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link href="{{'css/app.css'}}" rel="stylesheet"/>
    </head>
    <body>
        <div id="chat" data-text={{$_GET['username']}}></div>

        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>

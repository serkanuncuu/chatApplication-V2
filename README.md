# chatApplication-V2
<b>Chat Application Version 2 Installation :</b>

>Run the commands below in order.

1. `cd ProjectName` 
>We go to the directory where the project is located.
2. `composer install`
>Install all source code we run composer with the following command.
3. `npm install`
>Required to install the required Node packages in the project.
4. `cp .env.example .env`
>This will create a copy of the .env.example file in project and name the copy simply .env.
5. `php artisan key:generate`
>It is used to add a new APP_KEY to the env file we created. This code, which is specific to the project, is required in Laravel.
6. `php artisan serve`
>Used to run the project for Laravel. It should be run on a different terminal and stay on constantly. 
7. `npm run watch`
>It is optional. It is used to compile React codes and indicate if errors occur. It should be run on a different terminal and stay on constantly.
8. `nodemon server.js`
>It is written to run the web server in the server.js file. It should be run on a different terminal and stay on constantly.


![Laravel](https://i2.wp.com/ilirhushi.me/wp-content/uploads/2018/05/laravel-250x250.png?fit=250%2C250&ssl=1)
![React](https://habrastorage.org/files/5c6/c41/5ea/5c6c415ea9db484799eff2623f454571.png)
![Node.js](https://www.getaprogrammer.com.au/wp-content/uploads/2020/03/node-js.png)

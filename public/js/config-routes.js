app.config(function($routeProvider){
        $routeProvider
            .when("/",{
                templateUrl: "public/view/view-todo.html",
                controller: "controller-todo"
            })
});
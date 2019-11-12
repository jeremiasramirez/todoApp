app.config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when("/",{
                templateUrl: "public/view/view-todo.html",
                controller: "controller-todo"
            })
}]);
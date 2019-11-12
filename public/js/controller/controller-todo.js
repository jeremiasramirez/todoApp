app.controller("controller-todo", ["$scope", function($scope){

    $scope.listItems = ["comer a las 11am", "Ir a correr"];
    $scope.active = 0;
    $scope.addList = function(l){
        if ( l === ""){
            floatNotificationError("Rellene con algo")
        }
        else{
            $scope.listItems.unshift(l);
        }

    };

    $scope.deleteList = function(x){
       for(let i=0;i<$scope.listItems.length; i++){
           if($scope.listItems[i] === x){
                $scope.listItems[i] = 'deleted'
           }
       }
    }

}]);
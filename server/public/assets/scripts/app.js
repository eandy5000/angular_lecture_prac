var myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http){

    $scope.note = {};
    $scope.nameArray = [];






    $scope.test = function(){
      console.log("this is scope.note ",$scope.note);
        console.log("this is scope.nameArray ",$scope.nameArray);
    };

    //GET
    $scope.getPeople = function(){
        $http.get('/people').then(function(response){
            $scope.nameArray = res.data;
        });
    };


    $scope.getPeople();
    $scope.test();
//end welcome controller
}]);
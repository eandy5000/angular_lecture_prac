var myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http){

    $scope.note = {};
    $scope.nameArray = [];





    //POST
    $scope.clickButton = function(kittyFooFoo) {
        $http.post('/people', kittyFooFoo).then(function(response){
            $scope.getPeople();
        });
    };

    //GET
    $scope.getPeople = function(){
        $http.get('/people').then(function(response){
            $scope.nameArray = res.data;
        });
    };

    $scope.test = function(){
        console.log("this is scope.note ",$scope.note);
        console.log("this is scope.nameArray ",$scope.nameArray);
        console.log("this is kittyFoo ",kittyFooFoo);
    };


    $scope.getPeople();
    //$scope.test();
//end welcome controller
}]);


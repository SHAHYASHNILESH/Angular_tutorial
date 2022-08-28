var myNinjaApp = angular.module("myNinjaApp", ['ngRoute']);
myNinjaApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
    .when('/home',{
        templateUrl:'views/home.html'
    })
    .when('/directory',{
        templateUrl:'views/directory.html',
        controller:'NinjaController'
    })
    .otherwise({
        redirectTo:'/home'
    })
}]);
myNinjaApp.run(function () {});

myNinjaApp.controller("NinjaController", [
  "$scope",
  function ($scope) {
    $scope.message = "Hey!!";
    // $scope.ninjas=['yoshi','crystal','ryu','shaun'];
    $scope.removeNinja = function (ninja) {
      var removedNinja = $scope.ninjas.indexOf(ninja);
      $scope.ninjas.splice(removedNinja, 1);
    };
    $scope.addNinja = function () {
      $scope.ninjas.push({
        name: $scope.newninja.name,
        belt: $scope.newninja.belt,
        rate: parseInt($scope.newninja.rate),
        available: true,
      });
      $scope.newninja.name = "";
      $scope.newninja.belt = "";
      $scope.newninja.rate = "";
    };
    $scope.ninjas = [
      {
        name: "Yoshi",
        belt: "Green",
        rate: 50,
        available: true,
        thumb:"content/img/express-logo.png",
      },
      {
        name: "Crystal",
        belt: "Yellow",
        rate: 30,
        available: true,
        thumb:"content/img/Java-tutorials.jpg",
      },
      {
        name: "Ryu",
        belt: "Orange",
        rate: 10,
        available: true,
        thumb:"content/img/mongodb.png",
      },
      {
        name: "Shaun",
        belt: "Black",
        rate: 1000,
        available: true,
        thumb:"content/img/react-js.png",
      },
    ];
  },
]);

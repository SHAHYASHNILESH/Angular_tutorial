var myNinjaApp = angular.module("myNinjaApp", ["ngRoute", "ngAnimate"]);

myNinjaApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
        controller: "NinjaController",
      })
      .when("/contact", {
        templateUrl: "views/contact.html",
        controller: "NinjaController",
      })
      .when("/directory", {
        templateUrl: "views/directory.html",
        controller: "NinjaController",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);
myNinjaApp.run(function () {});

myNinjaApp.directive("randomNinja", [
  function () {
    return {
      restrict: "E",
      scope: {
        ninjas: "=",
        title: "=",
      },
      templateUrl: "views/random.html",
      transclude: true,
      replace: true,
      controller: function ($scope) {
        $scope.random = Math.floor(Math.random() * 4);
      },
    };
  },
]);

myNinjaApp.controller("NinjaController", [
  "$scope",
  "$http",
  function ($scope, $http) {
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

    $scope.removeAll = function () {
      $scope.ninjas = [];
    };

    $http.get("data/ninjas.json").then(function (response) {
      $scope.ninjas = response.data;
    });

    // $scope.ninjas = [
    //   {
    //     name: "Yoshi",
    //     belt: "Green",
    //     rate: 50,
    //     available: true,
    //     thumb:"content/img/express-logo.png",
    //   },
    //   {
    //     name: "Crystal",
    //     belt: "Yellow",
    //     rate: 30,
    //     available: true,
    //     thumb:"content/img/Java-tutorials.jpg",
    //   },
    //   {
    //     name: "Ryu",
    //     belt: "Orange",
    //     rate: 10,
    //     available: true,
    //     thumb:"content/img/mongodb.png",
    //   },
    //   {
    //     name: "Shaun",
    //     belt: "Black",
    //     rate: 1000,
    //     available: true,
    //     thumb:"content/img/react-js.png",
    //   },
    // ];
    //console.log(angular.toJson($scope.ninjas));
  },
]);

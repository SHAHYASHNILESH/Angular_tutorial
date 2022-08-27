var myNinjaApp=angular.module('myNinjaApp',[]);
myNinjaApp.config(function(){

});
myNinjaApp.run(function(){

});

myNinjaApp.controller('NinjaController',['$scope',function($scope){
    $scope.message='Hey!!';
    // $scope.ninjas=['yoshi','crystal','ryu','shaun'];
    $scope.ninjas=[
        {
            name:"Yoshi",
            belt:"Green",
            rate:50
        },
        {
            name:"Crystal",
            belt:"Yellow",
            rate:30
        },
        {
            name:"Ryu",
            belt:'Orange',
            rate:10
        },
        {
            name:'Shaun',
            belt:'Black',
            rate:1000
        }

    ]

}]);
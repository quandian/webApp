angular.module("myapp").controller("cookmainCtrl",function($scope,$http){
    var url="json/cookmenu.json";

    $http.get(url).success(function(data){
        $scope.data=data.result.data

    })
})
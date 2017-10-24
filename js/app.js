var app = angular.module('myApp', []);

app.factory('arrayFactory', function () {
    return {
        getArray: function () {
            var array = [];
            for (var i = 0; i < 100; i++) {
                array.push(i);
            }
            return array;
        }
    }
});

app.controller('interactiveDivs', ['$scope', 'arrayFactory',
    function ($scope, arrayFactory) {
        $scope.items = arrayFactory.getArray();
        console.log($scope.items);
        $scope.divVisible = true;
        $scope.toggle = false;
        $scope.third = false;
    }]);
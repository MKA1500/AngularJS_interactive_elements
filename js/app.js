var app = angular.module('myApp', []);

app.factory('arrayFactory', function () {
    return {
        getArray: function () {
            var array = [];
            for (var i = 0; i < 100; i++) {
                array.push(i.toString());
            }
            return array;
        }
    }
});

app.controller('interactiveDivs', ['$scope', 'arrayFactory',
    function ($scope, arrayFactory) {
        $scope.factoryArrayObject = arrayFactory.getArray();
        console.log($scope.factoryArrayObject);
    }]);
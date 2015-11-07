'use strict';

angular.module('fbPost.wall', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wall', {
    templateUrl: 'wall/wall.html',
    controller: 'WallCtrl'
  });
}])

.controller('WallCtrl', [function() {

}]);

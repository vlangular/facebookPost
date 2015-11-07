'use strict';

// Declare app level module which depends on views, and components
angular.module('fbPost', [
  'ngRoute',
  'fbPost.wall'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/wall'});
}]);

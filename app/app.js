'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('vamApp', [
  'ngRoute'/*,
  'vamApp.view1',
  'vamApp.view2',
  'vamApp.version'*/
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

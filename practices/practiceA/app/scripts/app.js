'use strict';

/**
 * @ngdoc overview
 * @name practice1App
 * @description
 * # practice1App
 *
 * Main module of the application.
 */
angular
  .module('practice1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'testCtrl'
      })
      .when('/test2', {
        templateUrl: 'views/test2.html',
        controller: 'Test2Ctrl',
        controllerAs: 'test2'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
'use strict';

/**
 * @ngdoc overview
 * @name practiceBApp
 * @description
 * # practiceBApp
 *
 * Main module of the application.
 */
angular
  .module('practiceBApp', [
    'ngAnimate',
    'ngCookies',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'aboutCtrl'
      })
      .state('about.example1', {
        parent: 'about',
        views: {
          aboutContent: {
            templateUrl: 'views/exampleview1.html'
          },
          aboutFooter: {
            templateUrl: 'views/exampleview2.html'
          }
        }
      })
      .state('about.example2', {
        parent: 'about',
        views: {
          aboutContent: {
            templateUrl: 'views/exampleview2.html'
          },
          aboutFooter: {
            templateUrl: 'views/exampleview3.html'
          }
        }
      })
      .state('about.example3', {
        parent: 'about',
        views: {
          aboutContent: {
            templateUrl: 'views/exampleview3.html'
          },
          aboutFooter: {
            templateUrl: 'views/exampleview4.html'
          }
        }
      })
      .state('about.example4', {
        parent: 'about',
        views: {
          aboutContent: {
            templateUrl: 'views/exampleview4.html'
          },
          aboutFooter: {
            templateUrl: 'views/exampleview1.html'
          }
        }
      })
      .state('404', {
        url: '*path',
        template: '<div>404 Not found!</div>'
      });
  });
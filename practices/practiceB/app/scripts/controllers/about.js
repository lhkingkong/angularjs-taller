'use strict';

/**
 * @ngdoc function
 * @name practiceBApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the practiceBApp
 */
angular.module('practiceBApp')
  .controller('AboutCtrl', function ($scope, wait) {
    console.log('AboutCtrl');
    $scope.noScopeDirectiveValue = 'test';
    $scope.withScopeDirectiveValue = 'test';
    $scope.isolatedScopeDirectiveValue = 'test';
    $scope.moduleNoScopeDirectiveValue = 'test';
    console.log(wait);

    $scope.$on('aboutCtrlListener', function (event, args) {
      console.log('from aboutCtrlListener');
      console.log(args);
    });
  });
'use strict';

/**
 * @ngdoc function
 * @name practiceBApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the practiceBApp
 */
angular.module('practiceBApp')
  .controller('AboutCtrl', function ($scope) {
    console.log('AboutCtrl');
    $scope.noScopeDirectiveValue = 'test';
    $scope.withScopeDirectiveValue = 'test';
    $scope.isolatedScopeDirectiveValue = 'test';
    $scope.moduleNoScopeDirectiveValue = 'test';
  });
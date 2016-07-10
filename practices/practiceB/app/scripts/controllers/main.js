'use strict';

/**
 * @ngdoc function
 * @name practiceBApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practiceBApp
 */
angular.module('practiceBApp')
  .controller('MainCtrl', function ($scope, taxesFactory, apiService) {
    $scope.getAmountWithTaxes = function () {
      return taxesFactory.getAmountWithTaxes($scope.factoryValue);
    }
    
    apiService.get('users/', {}).then(function(response){
      $scope.users = response.data;
    });
  });
'use strict';

/**
 * @ngdoc service
 * @name practiceBApp.taxesFactory
 * @description
 * # taxesFactory
 * Factory in the practiceBApp.
 */
angular.module('practiceBApp')
  .factory('taxesFactory', function () {
    var percentOfTaxes = 16;

    function getAmountWithTaxes(amount) {
      if (isNaN(amount)) {
        return 0;
      }
      return amount * (1 + (percentOfTaxes / 100));
    }

    return {
      getAmountWithTaxes: getAmountWithTaxes
    };
  });
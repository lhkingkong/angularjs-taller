'use strict';

/**
 * @ngdoc directive
 * @name practiceBApp.directive:isolatedScopeDirective
 * @description
 * # isolatedScopeDirective
 */
angular.module('practiceBApp')
  .directive('isolatedScopeDirective', function () {
    return {
      templateUrl: 'scripts/directives/isolated-scope-directive/isolated-scope-directive.html',
      restrict: 'E',
      replace: 'true',
      scope: {
        isolatedScopeDirectiveValue: '&'
      },
      link: function (scope) {
        scope.isolatedScopeDirectiveValue = scope.isolatedScopeDirectiveValue();
        
        console.log('from isolatedScopeDirective');
      }
    };
  });

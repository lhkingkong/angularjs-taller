'use strict';

/**
 * @ngdoc directive
 * @name practiceBApp.directive:withScopeDirective
 * @description
 * # withScopeDirective
 */
angular.module('practiceBApp')
  .directive('withScopeDirective', function () {
    return {
      templateUrl: 'scripts/directives/with-scope-directive/with-scope-directive.html',
      restrict: 'E',
      replace: 'true',
      scope: true,
      link: function () {
        console.log('from withScopeDirective');
      }
    };
  });

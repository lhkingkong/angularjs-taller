'use strict';

/**
 * @ngdoc directive
 * @name practiceBApp.directive:noScopeDirective
 * @description
 * # noScopeDirective
 */
angular.module('practiceBApp')
  .directive('noScopeDirective', function () {
    return {
      templateUrl: 'scripts/directives/no-scope-directive/no-scope-directive.html',
      restrict: 'E',
      replace: 'true',
      link: function postLink(scope, element, attrs) {
        console.log('something');
      }
    };
  });

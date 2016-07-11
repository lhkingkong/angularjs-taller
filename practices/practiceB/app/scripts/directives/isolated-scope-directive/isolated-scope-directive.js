'use strict';

/**
 * @ngdoc directive
 * @name practiceBApp.directive:isolatedScopeDirective
 * @description
 * # isolatedScopeDirective
 */
angular.module('practiceBApp')
  .directive('isolatedScopeDirective', function ($rootScope) {
    return {
      templateUrl: 'scripts/directives/isolated-scope-directive/isolated-scope-directive.html',
      restrict: 'E',
      replace: 'true',
      scope: {
        isolatedScopeDirectiveValue: '&'
      },
      link: function (scope) {
        scope.test = 1;
        scope.isolatedScopeDirectiveValue = scope.isolatedScopeDirectiveValue();
        
        console.log('from isolatedScopeDirective');
        
        scope.sendValue = function(){
          scope.$emit('aboutCtrlListener', scope.isolatedScopeDirectiveValue);
          $rootScope.$broadcast('otherModule', scope.isolatedScopeDirectiveValue);
        };
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name practiceBApp.directive:moduleNoScopeDirective
 * @description
 * # moduleNoScopeDirective
 */
angular.module('moduleNoScopeDirective', [])
  .directive('moduleNoScopeDirective', function () {
    return {
      templateUrl: 'scripts/modules/module-no-scope-directive/module-no-scope-directive.html',
      restrict: 'E',
      replace: 'true',
      controller: function () {
        console.log('directive controller');
      },
      compile: function () {
        return {
          pre: function preLink(scope, iElement, iAttrs, controller) {
            console.log('directive compile pre');
          },
          post: function postLink(scope, iElement, iAttrs, controller) {
            console.log('directive compile post');
          }
        }
      }
    };
  });
'use strict';

/**
 * @ngdoc function
 * @name practice1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practice1App
 */
angular.module('practice1App')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('TestCtrl1', function ($scope) {
    $scope.test = 'TestCtrl1';
  })
  .controller('TestCtrl2', function ($scope) {
    TestCtrl2Scope = $scope;
    $scope.test = 'TestCtrl2';

    /* ng-repeat example*/
    $scope.repeatArray = ['uno', 'dos', 'tres'];
    /* ng-repeat example end*/

    /* ng-click example p1*/
    $scope.clickParent = function (event) {
      event.stopImmediatePropagation();
      alert('Parent');
    };

    $scope.clickChild = function (event) {
      event.stopImmediatePropagation();
      alert($scope.test);
    };
    /* ng-click example p1 end*/

    /* ng-change example*/
    $scope.removeSpaces = function () {
      $scope.url = $scope.url.replace(/\s+/g, '-');
    };
    /* ng-change example end*/

    /* ng-options example*/
    $scope.people = [{
      id: 1,
      name: "Luis"
    }, {
      id: 2,
      name: "María"
    }];
    /* ng-options example end*/

  })
  .controller('Practice4', function ($scope, $filter) {
    $scope.filterArray = [
      { id: 1, name: "Luis" }, 
      { id: 2, name: "María" },
      { id: 3, name: "Lucia" }, 
      { id: 4, name: "Juan" }, 
      { id: 5, name: "Sofía" }
    ];
  
    $scope.filteredArray = $filter('filter')($scope.filterArray,{name:'lu'});
  })
  .filter('bytesFormat', function () {
    return function (size) {
      if (isNaN(size))
        size = 0;

      if (size < 1024)
        return size + ' Bytes';

      size /= 1024;

      if (size < 1024)
        return size.toFixed(2) + ' Kb';

      size /= 1024;

      if (size < 1024)
        return size.toFixed(2) + ' Mb';

      size /= 1024;

      if (size < 1024)
        return size.toFixed(2) + ' Gb';

      size /= 1024;

      return size.toFixed(2) + ' Tb';
    };
  });

/* ng-click example p2*/
var TestCtrl2Scope;

function onClickNotWork(event) {
  event.stopImmediatePropagation();
  alert(typeof $scope);
}

function onClickFromOutside(event) {
  event.stopImmediatePropagation();
  TestCtrl2Scope.$apply(function () {
    alert(TestCtrl2Scope.test);
  });
}
/* ng-click example p2 end*/
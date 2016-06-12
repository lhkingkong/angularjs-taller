'use strict';

describe('Controller: Test2Ctrl', function () {

  // load the controller's module
  beforeEach(module('practice1App'));

  var Test2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Test2Ctrl = $controller('Test2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Test2Ctrl.awesomeThings.length).toBe(3);
  });
});

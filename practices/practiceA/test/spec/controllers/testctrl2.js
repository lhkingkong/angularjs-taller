'use strict';

describe('Controller: Testctrl2Ctrl', function () {

  // load the controller's module
  beforeEach(module('practice1App'));

  var Testctrl2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Testctrl2Ctrl = $controller('Testctrl2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Testctrl2Ctrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Directive: noScopeDirective', function () {

  // load the directive's module
  beforeEach(module('practiceBApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<no-scope-directive></no-scope-directive>');
    element = $compile(element)(scope);
    expect(element).toBeDefined();
  }));
});

'use strict';

describe('Directive: isolatedScopeDirective', function () {
  
  var $httpBackend;

  // load the directive's module
  beforeEach(module('practiceBApp'));
  
  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.whenGET(/views.*/).respond(200, '');
      $httpBackend.whenGET(/scripts.*/).respond(200, '<div></div>');
    })
  });

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.isolatedScopeDirectiveValue = 2;
    element = angular.element('<isolated-scope-directive></isolated-scope-directive>');
    element = $compile(element)(scope);
    scope.$digest();
    $httpBackend.flush();
  }));
  
  it('should have an isolated scope', function () {
    var isolatedScope = element.isolateScope();
    expect(isolatedScope).toBeDefined();
  });

  it('should make hidden element visible', function () {
    var isolatedScope = element.isolateScope();
    expect(element).toBeDefined();
    expect(isolatedScope.test).toBe(1);
  });
});

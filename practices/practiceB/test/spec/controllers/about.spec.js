'use strict';

describe('Controller: AboutCtrl', function () {

  var $httpBackend;
  // load the controller's module
  beforeEach(module('practiceBApp'));
  
  beforeEach(function() {
    module(function($provide) {
      $provide.service('wait', function() {
        return '1'
      });
    });
  });
  
  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.whenGET(/views.*/).respond(200, '');
    })
  });

  var AboutCtrl,
      scope, $rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$rootScope_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    spyOn(scope,'$on').and.callThrough();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should be defined', function () {
    expect(AboutCtrl).toBeDefined();
  });
  
  describe('Controller: AboutCtrl', function () {
    it('should called console.log', function () {
      $rootScope.$broadcast('aboutCtrlListener');
      expect(scope.$on).toHaveBeenCalledWith('aboutCtrlListener', jasmine.any(Function));
    });
  });
});

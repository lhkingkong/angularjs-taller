'use strict';

describe('Service: apiService', function () {
  var $httpBackend, $timeout;

  // load the service's module
  beforeEach(module('practiceBApp'));

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.whenGET(/views.*/).respond(200, '');
    })
  });

  // instantiate service
  var apiService;
  beforeEach(inject(function (_$timeout_, _apiService_) {
    $timeout = _$timeout_;
    apiService = _apiService_;
  }));

  it('should do something', function () {
    expect(!!apiService).toBe(true);
  });

  describe('get', function () {
    it('should call getUser with username', inject(function () {
      $httpBackend.whenGET('http://127.0.0.1:8084/users').respond({
        data: 'test'
      });

      var result =apiService.get('users/', {});

      $httpBackend.flush();

      result.then(function(response){
        expect(response.data).toEqual('test');
      });
      
    }));

  });
  
  describe('wait', function () {
    it('should call getUser with username', inject(function () {
      var result =apiService.wait(1000);

      $timeout.flush();

      result.then(function(response){
        expect(response).toEqual('variable to be returned');
      });

    }));

  });

});

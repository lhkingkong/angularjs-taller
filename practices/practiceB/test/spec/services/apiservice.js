'use strict';

describe('Service: apiService', function () {

  // load the service's module
  beforeEach(module('practiceBApp'));
  
  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
    })
  });

  // instantiate service
  var apiService;
  beforeEach(inject(function (_apiService_) {
    apiService = _apiService_;
  }));

  it('should do something', function () {
    expect(!!apiService).toBe(true);
  });
  
  describe('getUser', function () {
    it('should call getUser with username', inject(function () {
      $httpBackend.expectGET('/api/index.php/users/test')
        .respond([{
          username: 'test'
        }]);

      var result =apiService.get('users/', {});

      $httpBackend.flush();
      
      /*result.then(function(response){
        $scope.users = response.data;
      });*/
      console.log(result);

      expect(result[0].username).toEqual('test');
    }));

  });

});

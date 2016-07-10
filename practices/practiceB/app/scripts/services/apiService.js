'use strict';

/**
 * @ngdoc service
 * @name practiceBApp.apiService
 * @description
 * # apiService
 * Service in the practiceBApp.
 */
angular.module('practiceBApp')
  .service('apiService', function ($http, $q, $timeout, $resource) {
    $http.defaults.useXDomain = true;
    var baseURL = 'http://127.0.0.1:8084/';

    var api = {
      get: get,
      wait: wait
    };

    return api;

    function get(url, params) {
      var resource = $resource(baseURL + url, {}, {
        'get': {
          method: 'GET',
          cache: false,
          responseType: 'application/json'
        }
      });

      return resource.get(params).$promise;
    };

    var serviceTimeout;

    function wait(milliseconds) {
      var defer = $q.defer();
      $timeout.cancel(serviceTimeout);
      serviceTimeout = $timeout(function () {
        defer.resolve('variable to be returned');
      }, milliseconds);
      return defer.promise;
    }

  });
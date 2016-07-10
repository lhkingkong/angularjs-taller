'use strict';

describe('Service: taxesFactory', function () {

  // load the service's module
  beforeEach(module('practiceBApp'));

  // instantiate service
  var taxesFactory;
  beforeEach(inject(function (_taxesFactory_) {
    taxesFactory = _taxesFactory_;
  }));

  it('should do something', function () {
    expect(!!taxesFactory).toBe(true);
  });

});

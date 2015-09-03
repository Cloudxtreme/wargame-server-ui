'use strict';

angular.module('app.common')
  .service('IncomeRates', IncomeRateService);
  
function IncomeRateService($resource, API) {
  return $resource(API + '/income-rates');
}
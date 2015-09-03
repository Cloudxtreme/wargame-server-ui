'use strict';

angular.module('app.common')
  .service('VictoryConditions', VictoryConditionsService);
  
function VictoryConditionsService($resource, API) {
  return $resource(API + '/victory-conditions');
}
'use strict';

angular.module('app.common')
  .service('Maps', MapService);
  
function MapService($resource, API) {
  return $resource(API + '/maps');
}
'use strict';

angular.module('app.common')
  .service('TeamSizes', TeamSizesService);
  
function TeamSizesService($resource, API) {
  return $resource(API + '/team-sizes');
}
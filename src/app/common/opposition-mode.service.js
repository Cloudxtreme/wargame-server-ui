'use strict';

angular.module('app.common')
  .service('OppositionModes', OppositionModesService);
  
function OppositionModesService($resource, API) {
  return $resource(API + '/opposition-modes');
}
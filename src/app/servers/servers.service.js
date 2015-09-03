'use strict';

angular.module('app.servers')
  .service('Servers', ServerService);
  
function ServerService($resource, API) {
  return $resource(API + '/servers/:serverId', {}, {
    'update': { method: 'PATCH' }
  });
}
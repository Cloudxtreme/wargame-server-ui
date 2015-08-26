'use strict';

angular.module('app.servers')
  .service('Servers', ServerService);
  
function ServerService($resource) {
  return $resource('/wargame-api/servers/:serverId');
}
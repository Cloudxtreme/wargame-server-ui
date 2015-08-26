'use strict';

angular.module('app.servers')
	.config(ServersConfig);
	
function ServersConfig($stateProvider) {
  	
	$stateProvider
  
    .state('servers', {
      abstract: true,
      url: '/servers',
      template: '<div ui-view></div>'
    })
    
    .state('servers.list', {
      url: '',
      templateUrl: 'servers/servers.list.tpl.html',
      controller: 'ServersController',
      controllerAs: 'servers',
      resolve: {
        serverListResolve: function(Servers) {
          return Servers.query().$promise;
        }
      }
    })
    
    .state('servers.detail', {
      url: '/:serverId',
      templateUrl: 'servers/servers.detail.tpl.html',
      controller: 'ServerDetailsController',
      controllerAs: 'serverDetails',
      resolve: {
        serverResolve: function($stateParams, Servers) {
          return Servers.get({serverId: $stateParams.serverId}).$promise;
        }
      }
    })
    ;
  
}
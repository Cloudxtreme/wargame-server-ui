'use strict';

angular.module('app.servers')
	.controller('ServersController', ServersController);


function ServersController(serverListResolve) {
	var vm = this;
  
  vm.servers = serverListResolve;
}
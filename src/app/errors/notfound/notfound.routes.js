'use strict';

angular.module('app.errors.notfound')
	.config(NotFoundConfig);
	
function NotFoundConfig($stateProvider) {
  	
	$stateProvider.state('notfound', {
    url: '/errors/notfound',
    templateUrl: 'errors/notfound/notfound.tpl.html',
    controller: 'NotFoundController',
    controllerAs: 'notfound'
  });
  
}
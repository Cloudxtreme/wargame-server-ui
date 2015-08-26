'use strict';

angular.module('app.signin')
	.config(SigninConfig);
	
function SigninConfig($stateProvider) {
  	
	$stateProvider
    .state('signin', {
      url: '/signin',
      templateUrl: 'signin/signin.tpl.html',
      controller: 'SigninController',
      controllerAs: 'signin'
    });
  
}
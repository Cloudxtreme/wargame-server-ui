'use strict';

angular.module('app')
	.run(AppRun);


function AppRun($rootScope, $state, $stateParams, usSpinnerService) {
	
  
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  
  /*jshint unused:false*/
  // ui router state change event handlers
  
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    console.log('$stateChangeStart');
    usSpinnerService.spin('loading');
  });
  $rootScope.$on('$stateNotFound', function(event, toState, toParams, fromState, fromParams) {
    console.log('$stateNotFound');
    usSpinnerService.stop('loading');
  });
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    console.log('$stateChangeError');
    usSpinnerService.stop('loading');
  });
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    console.log('$stateChangeSuccess');
    usSpinnerService.stop('loading');
  });
  /*jshint unused:true*/
}

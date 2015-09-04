'use strict';

angular.module('app')
	.config(appConfig);
	
function appConfig($urlRouterProvider) {
  
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');
  
  
	//removes # from URL
    //$locationProvider.html5Mode(true);
    
    //allow trailing /
    //$urlMatcherFactoryProvider.strictMode(false);
    /*$urlRouterProvider.rule(function ($injector, $location) {
        var path = $location.url();

        // check to see if the path already has a slash where it should be
        if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
            return;
        }

        if (path.indexOf('?') > -1) {
            return path.replace('?', '/?');
        }

        return path + '/';
    }); */
	
	
}
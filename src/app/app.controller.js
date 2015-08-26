'use strict';

angular.module('app')
	.controller('AppController', AppController);


function AppController() {
	var vm = this;
  
  vm.appTitle = 'Wargame Server Manager';
}
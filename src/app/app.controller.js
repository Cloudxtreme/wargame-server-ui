'use strict';

angular.module('app')
	.controller('AppController', AppController);


function AppController(Alerts) {
	var vm = this;
  
  vm.appTitle = 'Wargame Server Manager';
  
  vm.alerts = Alerts.alerts;
  vm.closeAlert = Alerts.closeAlert;
}
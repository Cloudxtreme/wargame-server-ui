'use strict';

angular.module('app.servers')
  .controller('ServerDetailsController', ServerDetailsController);
  
function ServerDetailsController() {
  var vm = this;
  vm.test = 'test';
}
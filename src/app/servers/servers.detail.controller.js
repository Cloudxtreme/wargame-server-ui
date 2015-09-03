'use strict';

angular.module('app.servers')
  .controller('ServerDetailsController', ServerDetailsController);
  
function ServerDetailsController(serverResolve, mapsResolve, incomeRatesResolve, oppositionModesResolve, teamSizesResolve,victoryConditionsResolve) {
  var vm = this;
  vm.server = serverResolve;
  vm.maps = mapsResolve;
  vm.incomeRates = incomeRatesResolve;
  vm.oppositionModes = oppositionModesResolve;
  vm.teamSizes = teamSizesResolve;
  vm.victoryConditions = victoryConditionsResolve;
}
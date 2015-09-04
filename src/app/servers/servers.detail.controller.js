'use strict';

angular.module('app.servers')
  .controller('ServerDetailsController', ServerDetailsController);
  
function ServerDetailsController(
    $log,
    serverResolve, 
    mapsResolve, 
    incomeRatesResolve, 
    oppositionModesResolve, 
    teamSizesResolve,
    victoryConditionsResolve,
    Servers,
    usSpinnerService,
    Alerts) {

  var vm = this;
  
  vm.server = serverResolve;
  vm.maps = mapsResolve;
  vm.incomeRates = incomeRatesResolve;
  vm.oppositionModes = oppositionModesResolve;
  vm.teamSizes = teamSizesResolve;
  vm.victoryConditions = victoryConditionsResolve;
  
  vm.updateServer = updateServer;
  vm.launchGame = launchGame;
  
  
  function updateServer(data, fieldName) {
    usSpinnerService.spin('loading');
    Servers.update({serverId: vm.server.id}, data).$promise
    .then(function(response) {
      // Success
      Alerts.addAlert('Successfully updated ' + fieldName, 'success', 2000);
      usSpinnerService.stop('loading');
    
    }, function(response) {
      // Failure
      $log.error(response);
      usSpinnerService.stop('loading');
      Alerts.addAlert('Error updating ' + fieldName, 'error');
    });
  }
  
  function launchGame(cancel) {
    usSpinnerService.spin('loading');
    Servers.update({serverId: vm.server.id, launch: cancel}).$promise
    .then(function(response) {
      // Success
      if(cancel) {
        Alerts.addAlert('Successfully cancelled launche', 'success', 2000);
      } else {
        Alerts.addAlert('Successfully launched game', 'success', 2000);
      }
      
      usSpinnerService.stop('loading');
    
    }, function(response) {
      // Failure
      $log.error(response);
      if(cancel) {
        Alerts.addAlert('Error cancelling launch', 'error');
      } else {
        Alerts.addAlert('Error launching game', 'error');
      }
      
      usSpinnerService.stop('loading');
    });
  }
}
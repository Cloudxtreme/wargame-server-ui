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
  
  vm.updateServerName = updateServerName;
  vm.updateMap = updateMap;
  vm.updateVictoryCondition = updateVictoryCondition;
  vm.updateOppositionMode = updateOppositionMode;
  vm.updateTeamSize = updateTeamSize;
  vm.updateTimeLimit = updateTimeLimit;
  vm.updateStartingPoints = updateStartingPoints;
  vm.updateVictoryPoints = updateVictoryPoints;
  vm.updateIncomeRate = updateIncomeRate;
  vm.launchGame = launchGame;
  vm.cancelLaunch = cancelLaunch;
  
  
  function updateServerName() {
    usSpinnerService.spin('loading');
    Servers.update(
      {serverId: vm.server.id}, 
      { serverName: vm.server.serverName })
      
    .$promise.then(function(response) {
      Alerts.addAlert('Successfully updated Server Name', 'success', 2000);
      usSpinnerService.stop('loading');
      
    }, function(response) {
      $log.error(response);
      usSpinnerService.stop('loading');
      Alerts.addAlert('Error updating Server Name', 'error');
    });
  }
  
  function updateMap() {
    usSpinnerService.spin('loading');
    Servers.update(
      {serverId: vm.server.id}, 
      { map: vm.server.map.serverId })
    
    .$promise.then(function(response) {
      // Success
      Alerts.addAlert('Successfully updated Map', 'success', 2000);
      usSpinnerService.stop('loading');
    
    }, function(response) {
      // Failure
      $log.error(response);
      usSpinnerService.stop('loading');
      Alerts.addAlert('Error updating Map', 'error');
    });
  }
  
  function updateVictoryCondition() {
    
  }
  
  function updateOppositionMode() {
    
  }
  
  function updateTeamSize() {
    
  }
  
  function updateTimeLimit() {
    
  }
  
  function updateStartingPoints() {
    
  }
  
  function updateVictoryPoints() {
    
  }
  
  function updateIncomeRate() {
    
  }
  
  function launchGame() {
    
  }
  
  function cancelLaunch() {
    
  }
}
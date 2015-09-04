'use strict';

angular.module('app.common')
  .service('Alerts', AlertsService);
  
function AlertsService() {
  var alerts = {};
  
  alerts.alerts = [];
  alerts.addAlert = addAlert;
  alerts.closeAlert = closeAlert;
  
  function addAlert(msg, type, timeout) {
    alerts.alerts.push({
      msg: msg, 
      type: type || 'info',
      timeout: timeout || 5000
    });
  }
  
  function closeAlert(index) {
    alerts.alerts.splice(index, 1);
  }
  
  return alerts;
}
'use strict';

angular.module('app.common')
  .filter('excludeNull', excludeNullFilter);
  
function excludeNullFilter() {
  return function(items) {
    var filtered = [];
    angular.forEach(items, function(item) {
      if(item.name && item.name.toUpperCase() !== 'NULL') {
        filtered.push(item);
      }
    });
    return filtered;
  };
}
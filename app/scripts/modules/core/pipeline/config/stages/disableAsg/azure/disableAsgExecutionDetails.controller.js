'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.core.pipeline.stage.disableAsg.azure.executionDetails.controller', [
  require('angular-ui-router'),
  require('../../../../../delivery/details/executionDetailsSection.service.js'),
  require('../../../../../delivery/details/executionDetailsSectionNav.directive.js'),
])
  .controller('azureDisableAsgExecutionDetailsCtrl', function ($scope, $stateParams, executionDetailsSectionService) {

    $scope.configSections = ['disableServerGroupConfig', 'taskStatus'];

    function initialize() {
      executionDetailsSectionService.synchronizeSection($scope.configSections);
      $scope.detailsSection = $stateParams.details;
    }

    initialize();

    $scope.$on('$stateChangeSuccess', initialize, true);

  });

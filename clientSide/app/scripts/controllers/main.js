'use strict';

/**
 * @ngdoc function
 * @name clientSideApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientSideApp
 */
angular.module('clientSideApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

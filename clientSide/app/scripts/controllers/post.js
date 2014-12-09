'use strict';

/**
 * @ngdoc function
 * @name clientSideApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientSideApp
 */
angular.module('clientSideApp')
  .controller('PostCtrl', function ($scope, $http) {
  	$http.get('http://localhost:3000/apiv1/posts').then(function(posts){
  		$scope.posts = posts.data;
  		console.log(posts);
  	});
  	$scope.save = function(){
  		$http.post('http://localhost:3000/apvi1/posts', $scope.newPost).success(function(post){
  		$scope.posts.push(post)
  		});
  	};
  });

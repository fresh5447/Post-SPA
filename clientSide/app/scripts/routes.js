angular.module('clientSideApp')
	.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		$urlRouterProvider
			.otherwise('/');
		// $locationProvider.html5Mode(true);
		$stateProvider.
			state('main', {
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
			.state('posts', {
				url: '/posts',
				templateUrl: 'views/posts.html',
				controller: 'PostCtrl'
			})
			.state('posts.new', {
				url: '/new',
				templateUrl: 'views/postsNew.html',
				controller: 'PostCtrl'
			});
	});
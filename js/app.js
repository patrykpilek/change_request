(function() {

	var app = angular.module('changeRequest', ['ui.router']);

	app.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'js/views/login.html',
				controller: 'LoginController'
			})

			.state('signup', {
				url: '/signup',
				templateUrl: 'js/views/signup.html',
				controller: 'SignupController'
			})

			.state('list', {
				url: '/list',
				templateUrl: 'js/views/list.html',
				controller: 'ListController'
			});

		$urlRouterProvider.otherwise('/login');
	});
	
}());
(function() {

	var app = angular.module('changeRequest', ['ui.router', , 'ui.bootstrap']);

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

			.state('requests', {
				url: '/requests',
				templateUrl: 'js/views/requests.html',
				controller: 'RequestsController'
			})

			.state('requestById', {
				url: '/requestById/:id',
				templateUrl: 'js/views/requestById.html',
				controller: 'RequestByIdController'
			});

		$urlRouterProvider.otherwise('/login');
	});

	app.filter('startFrom',function() {
		return function(input, start){
			if(input){
				start = +start;
				return input.slice(start);
			};
			return [];
		};
	});

}());
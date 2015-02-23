(function() {

	var app = angular.module('changeRequest', ['ui.router', 'ui.bootstrap']);

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
			})
			.state('newRequest',{
				url: '/newRequest',
				templateUrl: 'js/views/newRequest.html',
				controller: 'NewRequestControler'
			})
			.state('newRequest.q1', {
            	url: '/q1',
            	templateUrl: 'js/views/newRequest/newRequest-q1.html' 
        	})
        	.state('newRequest.q2', {
            	url: '/q2',
            	templateUrl: 'js/views/newRequest/newRequest-q2.html'
        	})   
        	.state('newRequest.q3', {
            	url: '/q3',
            	templateUrl: 'js/views/newRequest/newRequest-q3.html'
        	})
        	.state('newRequest.q4', {
            	url: '/q4',
            	templateUrl: 'js/views/newRequest/newRequest-q4.html'
        	})
        	.state('newRequest.q5', {
            	url: '/q5',
            	templateUrl: 'js/views/newRequest/newRequest-q5.html'
        	})
        	.state('newRequest.q6', {
            	url: '/q6',
            	templateUrl: 'js/views/newRequest/newRequest-q6.html'
        	})
        	.state('newRequest.q7', {
            	url: '/q7',
            	templateUrl: 'js/views/newRequest/newRequest-q7.html'
        	})
        	.state('newRequest.q8', {
            	url: '/q8',
            	templateUrl: 'js/views/newRequest/newRequest-q8.html'
        	})
        	.state('newRequest.q9', {
            	url: '/q9',
            	templateUrl: 'js/views/newRequest/newRequest-q9.html'
        	})
        	.state('newRequest.q10', {
            	url: '/q10',
            	templateUrl: 'js/views/newRequest/newRequest-q10.html'
        	})
        	.state('newRequest.q11', {
            	url: '/q11',
            	templateUrl: 'js/views/newRequest/newRequest-q11.html'
        	})
        	.state('newRequest.q12', {
            	url: '/q12',
            	templateUrl: 'js/views/newRequest/newRequest-q12.html'
        	})
        	.state('newRequest.q13', {
            	url: '/q13',
            	templateUrl: 'js/views/newRequest/newRequest-q13.html'
        	})
        	.state('newRequest.q14', {
            	url: '/q14',
            	templateUrl: 'js/views/newRequest/newRequest-q14.html'
        	})
        	.state('newRequest.q15', {
            	url: '/q15',
            	templateUrl: 'js/views/newRequest/newRequest-q15.html'
        	})
        	.state('newRequest.q16', {
            	url: '/q16',
            	templateUrl: 'js/views/newRequest/newRequest-q16.html'
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
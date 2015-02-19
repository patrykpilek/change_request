(function(){
	var LoginController = function($scope){
		$scope.txt = "Text number 2";

		$scope.display = function(){
			return "Patryk Pilek - Login Page.";
		};
	};

	LoginController.$inject = ['$scope'];

	angular.module('changeRequest')
		.controller('LoginController', LoginController);
}());
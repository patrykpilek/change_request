(function(){
	var SignupController = function($scope){
		$scope.txt = "Text number 2";

		$scope.display = function(){
			return "Patryk Pilek - Sign UP Page.";
		};
	};

	SignupController.$inject = ['$scope'];

	angular.module('changeRequest')
		.controller('SignupController', SignupController);
}());
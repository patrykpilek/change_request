(function(){
	var ListController = function($scope){
		$scope.txt = "Text number 2";

		$scope.display = function(){
			return "Patryk Pilek - List Page."
		};
	};

	ListController.$inject = ['$scope'];

	angular.module('changeRequest')
		.controller('ListController', ListController);
}());
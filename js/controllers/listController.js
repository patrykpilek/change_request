(function(){
	var ListController = function($scope){
		$scope.pageTitle = "Change Request - List";

		$scope.display = function(){
			return $scope.pageTitle;
		};
	};

	ListController.$inject = ['$scope'];

	angular.module('changeRequest')
		.controller('ListController', ListController);
}());
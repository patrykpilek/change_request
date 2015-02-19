// (function(){
// 	var ListController = function($scope, $log, $http){
// 		$scope.pageTitle = "Change Request - List";

// 		$scope.get_request = function() {
// 			$http.get("php/dbControllers.php?action=get_request").success(function(data){ 
// 					$scope.requestList = data;
// 				})
// 				.error(function(data, status, headers, config){
// 					$log.log(data.error + ' ' + status);
// 				});
// 		};

// 		$scope.display = function(){
// 			return $scope.pageTitle;
// 		};
// 	};

// 	ListController.$inject = ['$scope', '$log', '$http'];

// 	angular.module('changeRequest').controller('ListController', ListController);
// }());

(function(){
	var ListController = function($scope){
		$scope.txt = "Text number 34123";

		$scope.display = function(){
			return "Patryk Pilek - List Page.";
		};
	};

	ListController.$inject = ['$scope'];

	angular.module('changeRequest')
		.controller('ListController', ListController);
}());
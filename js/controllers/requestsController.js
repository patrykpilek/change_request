(function(){

	var RequestsController = function($scope, $log, requestFactory, $timeout){
		$scope.requestList = [];
		$scope.pageTitle = "Change Request - List";
    	$scope.orderByField = "";
    	$scope.reverseSort = false;

		function init() {
            requestFactory.getRequests()
                .success(function(data) {
                    $scope.requestList = data;
                    $scope.currentPage = 1;
            		$scope.entryLimit = 25;
            		$scope.filteredItems = $scope.requestList.length;
            		$scope.totalItems = $scope.requestList.length;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        };

        init();

        $scope.display = function () {
        	return $scope.pageTitle;
    	};

        $scope.numPages = function() {
        	return Math.ceil($scope.totalItems / $scope.entryLimit);
    	};

    	$scope.filteredPageNum = function(){
        	return Math.ceil($scope.filteredItems / $scope.entryLimit);
    	}

    	$scope.setPage = function(pageNo) {
        	$scope.currentPage = pageNo;
    	};

    	$scope.pageChanged = function() {
        	$log.log('Page changed to: ' + $scope.currentPage);
    	};

    	$scope.filter = function(){
        	$timeout(function() { 
            	$scope.filteredItems = $scope.filtered.length;
        	}, 10);
    	};
	};

	RequestsController.$inject = ['$scope', '$log', 'requestFactory', '$timeout'];

	angular.module('changeRequest').controller('RequestsController', RequestsController);

}());
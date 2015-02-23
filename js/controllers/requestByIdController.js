(function(){
	
	var RequestByIdController = function($scope, $stateParams, $log, $http, requestFactory, commmentFactory){
        var requestId = $stateParams.id;
        $scope.pageTitle = "Change Request Details";
		$scope.request = null;
        $scope.comment = null;

        function init() {
            requestFactory.getRequest(requestId)
                .success(function(data) {
                    $scope.request = data;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });

            commmentFactory.getComments(requestId)
                .success(function(data) {
                    $scope.comment = data;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        };        

        init();

        $scope.display = function () {
            return "Request No.: " + requestId + " created by - add author " ;
        };

        $scope.saveComment = function(){
            commmentFactory.saveComment($scope.newcomment.body, requestId, $scope.newcomment.email)
                .success(function (data, status, headers, config) {
                    init();
                    $scope.newcomment = {};
                    $log.log("Comment has been Submitted Successfully");
                }).error(function(data, status, headers, config){
                    $log.log("Comment hasn't been submitted");
            });
        };
	};

	RequestByIdController.$inject = ['$scope', '$stateParams', '$log', '$http', 'requestFactory', 'commmentFactory'];

	angular.module('changeRequest').controller('RequestByIdController', RequestByIdController);

}());
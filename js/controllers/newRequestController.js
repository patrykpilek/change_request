(function(){

	var NewRequestControler = function($scope){

		var txt = "New Change Request";
		$scope.newRequest = {};

		$scope.display = function(){
			return txt;
		};

	};

	NewRequestControler.$inject = ['$scope'];
	angular.module('changeRequest').controller('NewRequestControler', NewRequestControler);
}());
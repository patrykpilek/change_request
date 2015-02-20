(function() {
    var requestFactory = function($http) {
    
        var factory = {};
        
        factory.getRequests = function() {
            return $http.get("php/dbControllers.php?action=get_request");
        };

        factory.getRequest = function(requestId) {
        	return $http.post("php/dbControllers.php?action=get_requestById", {'id': requestId});
        };
        
        return factory;
    };
    
    requestFactory.$inject = ['$http'];
        
    angular.module('changeRequest').factory('requestFactory', requestFactory);
                                           
}());
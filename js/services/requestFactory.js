(function() {
    var requestFactory = function($http) {
    
        var factory = {};
        
        factory.getRequest = function() {
            return $http.get("php/dbControllers.php?action=get_request");
        };
        
        return factory;
    };
    
    requestFactory.$inject = ['$http'];
        
    angular.module('changeRequest').factory('requestFactory', requestFactory);
                                           
}());
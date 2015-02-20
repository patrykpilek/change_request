(function() {
    var commmentFactory = function($http) {
    
        var factory = {};

        factory.getComments = function(commentId) {
        	return $http.post("php/dbControllers.php?action=get_comment", {'id': commentId});
        };      
        
        return factory;
    };
    
    commmentFactory.$inject = ['$http'];
        
    angular.module('changeRequest').factory('commmentFactory', commmentFactory);
                                           
}());
(function() {
    var commmentFactory = function($http) {
    
        var factory = {};

        factory.getComments = function(commentId) {
        	return $http.post("php/dbControllers.php?action=get_comment", {'id': commentId});
        };
        
        factory.saveComment = function(body, requestId, email){
            return $http.post('php/dbControllers.php?action=save_comment', {
                'body': body,
                'request_id': requestId,
                'email': email
            });
        };

        return factory;
    };
    
    commmentFactory.$inject = ['$http'];
        
    angular.module('changeRequest').factory('commmentFactory', commmentFactory);
                                           
}());
(function(){

	function AppCtrl($rootScope, $auth, $scope) {
        $rootScope.$on('auth:login-success', function(ev, user) {
            alert('Welcome ', user.email);
        });

        $scope.$on('auth:registration-email-success', function(ev, message) {
		    alert("A registration email was sent to " + message.email);
		});

		$scope.$on('auth:registration-email-error', function(ev, reason) {
		    alert("Registration failed: " + reason.errors[0]);
		});

		$scope.$on('auth:account-destroy-success', function(ev) {
		  alert("Your account has been successfully destroyed!");
		});

		$scope.$on('auth:account-destroy-error', function(ev, reason) {
		  alert("Account deletion failed: " + reason.errors[0]);
		});

		$rootScope.$on('auth:oauth-registration', function(ev, user) {
		    alert('new user registered through oauth:' + user.email);
		});
	}

	angular
		.module('flux')
		.controller('AppCtrl', AppCtrl);
	
})();

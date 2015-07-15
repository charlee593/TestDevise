(function(){

	function MainCtrl($scope, $auth, $http) {

		$scope.handleRegBtnClick = function() {
	      $auth.submitRegistration($scope.registrationForm)
	        .then(function(resp) { 
	        	console.log(resp);
	          console.log("Awesome");
	        })
	        .catch(function(resp) {
	        console.log(resp); 
	          console.log("Fail");
	        });
	    };

        $scope.handleLoginBtnClick = function() {
	      $auth.submitLogin($scope.loginForm)
	        .then(function(resp) { 
	          // handle success response
	        })
	        .catch(function(resp) { 
	          // handle error response
	        });
	    };

	    $scope.handleDestroyAccountBtnClick = function() {
	      $auth.destroyAccount()
	        .then(function(resp) { 
	          // handle success response
	        })
	        .catch(function(resp) { 
	          // handle error response
	        });
	    };

	    $scope.handleBtnClick = function() {
	      $auth.authenticate('github')
	        .then(function(resp) { 
	          // handle success
	        })
	        .catch(function(resp) { 
	          // handle errors
	        });
	    };

	    $scope.hello = function(){
			$http.get($auth.apiUrl() + '/posts').
			  success(function(data, status, headers, config) {
			    console.log(data);
			  }).
			  error(function(data, status, headers, config) {
			    console.log(status);
			    console.log(data);
			  });
	    };



	}

	angular
		.module('flux')
		.controller('MainCtrl', MainCtrl);
		
})();
(function(){

  angular
    .module('flux', ['ui.router', 'templates', 'ng-token-auth'])
    .config(function($authProvider) {
        $authProvider.configure({
            apiUrl: 'http://localhost:3000',
            authProviderPaths: {
                facebook: '/auth/facebook' 
            }
        });
    })
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
        	.state('home', {
            	url: '/',
            	templateUrl: 'home/_home.html',
            	controller: 'MainCtrl'
                // resolve: {
                //   auth: function($auth) {
                //     return $auth.validateUser();
                //   }
                // }
        	});

    });

})();
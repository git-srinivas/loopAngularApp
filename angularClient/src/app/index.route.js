(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .config(routeConfig)
        .config(apiConfig);

        function apiConfig(LoopBackResourceProvider){
          // Change the URL where to access the LoopBack REST API server
          LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');
        }
    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            });

        $urlRouterProvider.otherwise('/');
    }

})();

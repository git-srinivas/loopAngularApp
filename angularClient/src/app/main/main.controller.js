(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope,Employee) {
      $scope.user = {}
      $scope.employees = [];
      $scope.submitForm = function(isValid) {
    		if (isValid) {
          Employee
          .create($scope.user)
          .$promise
          .then(function(response){
            $scope.user = {}
             $scope.userForm.$setPristine();
            console.log(response)
            $scope.getAllEmployees();
          },function(error){
            console.log(error)
          })

    		}
    	};

      $scope.getAllEmployees = function(){
        Employee
          .find(
          function(list) {
               console.log(list)
               $scope.employees = list;
          },
          function(errorResponse) {
              console.log(error)
          });

      }
      $scope.getAllEmployees();
      $scope.deleteEmployee = function(employee){
        Employee.deleteById({
            id: employee.id
          })
          .$promise
          .then(function(response) {
            console.log(response);
            $scope.getAllEmployees();
          },function(error){
            console.log(error);
          });

      }
    }

})();

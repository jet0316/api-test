var master = angular.module('master', ['ngRoute']);
console.log('hello')

master.controller('main', function($scope, $routeParams, $http){
	// console.log($routeParams.ID)
	$http.get('api/products').then(function(response){
		$scope.products = response.data
		// console.log($scope.products)
	})
	$scope.post = function(){
		console.log($scope.product)
		$http.post('api/products', $scope.product).then(function(response){
			$http.get('api/products').then(function(response){
			$scope.products = response.data
			// console.log($scope.products)
			})
			$scope.product = {}
	
		})
	}
})
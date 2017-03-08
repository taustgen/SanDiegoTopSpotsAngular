angular
	.module('app')
	.controller('HomeController', HomeController);

function HomeController($http){
	var vm = this;

$http.get('../topspots.json').then(function(response){
		vm.in = response.data;
});
}

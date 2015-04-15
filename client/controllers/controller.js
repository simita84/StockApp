var myAppModule = angular.module('myAppModule',[]);

myAppModule.controller('StockController',function ($scope,$http) {
	//alert("-------controller Ready----------")
 $scope.data ={};
 var data ={}
  $scope.companies =[{
  	name: "Groupon",code:"GRPN"},
  	{name:"Apple" ,code :'AAPL'},
  	{name:"Google",code :"GOOG"}
  ] ;
  
  $scope.add_company =function(newCompany){
  	console.log(newCompany);
  	$scope.companies.push(newCompany); 
  	$scope.newCompany ={};

  }

	$scope.get_data = function(code){
		$http.post('/data',{code:code}).success(function(server_response){
			console.log(server_response);
			//$scope.data = server_response;
			data = server_response;
			 

			var string = server_response;
			eval('var obj='+string);
			$scope.data=obj;
			console.log($scope.data);
		});
	}
 



});
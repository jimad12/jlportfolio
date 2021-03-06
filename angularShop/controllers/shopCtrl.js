
angular.module("shop")
.controller("shopCtrl", function($scope){
	
	//Load the data with a jax
	$scope.data = {
		
		products: [
	{ "Category": "Shoppers", "description":"How people shop online", "name":"Shoppers",  "price": "650.500"},
	{ "Category": "Shoppers", "description":"Users game playing online habits", "name":"Gamers",  "price": "234.16"},
	{ "Category": "Investors", "description":"Market makers & risk takers", "name":"Bull Market", "price": "5890"},
	{ "Category": "Investors", "description":"The pessimist investors non-risk takers", "name":"Bear Market",  "price": "4560.20"},
	{ "Category": "Shoppers", "description":"facebook viewers music streaming habits", "name":"Music Lovers",  "price": "300.10"},
	{ "Category": "Chest", "description":"Improve your brain efficiency by 10%", "name":"Smarty", "price": "15.50"},
	{ "Category": "Chest", "description":"Learn to think critically", "name":"MindCap", "price": "25.92"},
	{ "Category": "Film Data", "description":"People streaming Netfix at night", "name":"Tube Watchers", "price": "879.41"},
	{ "Category": "Investors", "description":"Foreign Exchange Market data", "name":"Forex", "price": "9345.67"},
	{ "Category": "Film Data", "description":"AMC Theater movie goers", "name":"Movie Goers", "price": "1279.43"}]
	
	};

});
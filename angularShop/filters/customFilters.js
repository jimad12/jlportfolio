//create a new module "customFilter to contain other filter
angular.module("customFilters", [])
.filter("unique", function(){ //recursive factory function
	
	return function(data, propertyName){
		//check if data is an Array & its contents are the type string
		if(angular.isArray(data) && angular.isString(propertyName)){
			
			//Declare some variable to stores
			var results = [];
			var keys = {};
			//Loop through array to increment the result/adding
			for(var i =0; i < data.length; i++){
				//now do data assignment
				var val = data[i][propertyName];
				//if unknown property, push the data to val identifies
				if(angular.isUndefined(keys[val])){
					keys[val] = true;
					results.push(val);
				}
			}//end for()
			return results; //Generate & return an array of the unique property name
			
			//end if()
		} else{ //otherwise return the data that was passed
			return data;
		}
	}
})


//Filters to support pagination

//Return a range in the array, corresponding to a page of products
.filter("range", function($filter){
	return function(data, page, size){
		if(angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)){
			var start_index = (page -1) * size;
			if(data.length < start_index){
				return [];
			} else{
				return $filter("limitTo")(data.splice(start_index), size);
			}
		} else{
			return data;
		}
	}
})
//return page count
.filter("pageCount", function(){
	return function(data, size){
		if(angular.isArray(data)){
			var result = [];
			for(var i=0; i <  Math.ceil(data.length / size); i++){
				result.push(i);
			}
			return result;
		} else{
			return data;
		}
	}
});

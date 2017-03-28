angular.module('sample-angular.Service', [])

.factory('File', ['$http', function($http) {
var baseURL = 'api-base-url';
var file = {};

file.upload = function(input){
/*
Can return an HTTP Request to an API
*/
}
return file;
}])
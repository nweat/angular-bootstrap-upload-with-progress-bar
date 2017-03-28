angular.module('sample-angular.Controller', [])

.controller('UploadCtrl', ['$scope', '$http', 'File', function ($scope, $http, File) {
$scope.css = 'reveal-animation';

/*
This function can call a service that interacts with an external API to perform actions on the file
See Service.js for sample
*/
$scope.upload = function(file){
    var progressPercentage = 0;
    $scope.result = ''
    $scope.progressPerc = progressPercentage;
    if (file && file.length){
        progressPercentage = parseInt(100.0);
        $scope.progressPerc = progressPercentage;
        $scope.result = file[0].name + " Uploaded"
    }
}
}])

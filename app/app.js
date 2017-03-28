/*
REFERENCES:
http://stackoverflow.com/questions/14791361/how-to-achieve-a-safe-authentication-system-in-an-angularjs-app
http://blog.brunoscopelliti.com/deal-with-users-authentication-in-an-angularjs-web-app/
http://www.frederiknakstad.com/2013/08/04/authentication-in-single-page-applications-with-angular-js-part-2/
http://riadbenguella.com/cookie-session-based-authentication-in-angularjs-applications/
https://github.com/chieffancypants/angular-loading-bar
*/

var app = angular.module('sample-angular', ['sample-angular.Service', 'sample-angular.Controller', 'ngCookies', 'ngRoute', 'ngAnimate', 'ngDialog', 'ngFileUpload']);
app.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
  //Enable cross domain calls
  //$httpProvider.defaults.useXDomain = true;
  $routeProvider.
      when('/', {templateUrl: 'templates/file-upload.html', controller: 'UploadCtrl'}).
      otherwise({redirectTo: '/'});
}])

(function () {
	var app = angular.module('app',["ngRoute", 'angulartics', 'angulartics.google.analytics']);

	app.config(function($routeProvider,$locationProvider) {
		$routeProvider
			.when("/",{
				templateUrl:"MySelf.html"
			})
			.when("/MySelf",{
				templateUrl: "MySelf.html"
			})
			.when("/Degrees",{
				templateUrl: "MyDegrees.html"
			})
			.when("/Experience",{
				templateUrl: "MyExperience.html"
			})
			.when("/Work",{
				templateUrl: "MyWork.html"
			})
			.when("/Recognition",{
				templateUrl: "MyRecognition.html"
			})
			.when("/Certifications",{
				templateUrl: "Certifications.html"
			})
			.otherwise({redirectTo: "/"});
		
	});
}());
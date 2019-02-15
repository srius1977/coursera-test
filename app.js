(function () {
	//comment line
	'use strict';

angular.module('myAJSApp',[]);

.controller('myAJSController', function ($scope) {
	$scope.fun1 = function () {
		return "AJ fun1 invoked";
	};

});

}) ();
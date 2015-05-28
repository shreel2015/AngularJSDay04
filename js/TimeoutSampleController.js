'use strict';

eventsApp.controller('TimeoutSampleController', 
	function TimeoutSampleController($scope, $timeout) {
		var promise = $timeout(function() {
			$scope.name = "Shreel Desai";
		}, 3000);
		
		$scope.cancel = function() {
			$timeout.cancel(promise);
		}
	}
);
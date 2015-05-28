'use strict';

eventsApp.controller('ExceptionHandlerSampleController', 
	function ExceptionHandlerSampleController($scope, $locale) {
		throw {message: 'Error Message'};
	}
);
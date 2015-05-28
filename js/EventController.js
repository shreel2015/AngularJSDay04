'use strict';

eventsApp.controller('EventController', 
	function EventController($scope, $anchorScroll) {
		$scope.snippet = '<span style="color: red">Hi there</span>';
		$scope.boolValue = true;
		$scope.mystyle = {color: 'red'};
		$scope.myclass = "blue";
		$scope.buttonDisabled = true;
		$scope.sortorder = 'name';
		$scope.scrollToSession = function() {
			$anchorScroll();
		}
		$scope.event = {
			name: 'Angular Boot Camp',
			date: 1359781015626,
			time: '10:00 am',
			location: {
				address: 'Monalisa Complex',
				city: 'Baroda',
				state: 'Gujarat',
				country: 'India'
			},
			imageUrl: 'img/angularjs-logo.jpg',
			sessions: [
				{
					name: 'Session01',
					creatorName: 'Shreel Desai',
					duration: 1,
					level: 'Introductory',
					id: '1',
					upVoteCount: 0
				},
				{
					name: 'Session02',
					creatorName: 'Shreel Desai',
					duration: 2,
					level: 'Intermediate',
					id: '2',
					upVoteCount: 0
				},
				{
					name: 'Session03',
					creatorName: 'Shreel Desai',
					duration: 4,
					level: 'Difficult',
					id: '3',
					upVoteCount: 0
				}
			]
		}
		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		}
		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		}
	}
);
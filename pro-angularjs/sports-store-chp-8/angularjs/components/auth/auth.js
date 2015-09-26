angular.module("sportsStoreAdmin")
.constant("logoutUrl", "http://localhost:5500/users/logout")
.constant("userInfoUrl", "http://localhost:5500/users/me")
.directive("logout", function($http, $location, logoutUrl, userInfoUrl) {
	return {
		restrict: "E",
		templateUrl: "components/auth/logout.html",
		controller: function($scope) {

			$scope.logout = function() {
				$http.post(logoutUrl, { withCredentials: true })
				.success(function(data) {
					$scope.data.loggedUser = {};
					$location.path("/login");
				})
				.error(function(error) {
					$scope.error = error;
				});
			}

		}
	}
});
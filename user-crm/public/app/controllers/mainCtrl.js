angular.module('mainCtrl', [])
  .controller('mainController', function ($rootScope, $location, Auth) {

    var vm = this;
    vm.processing = false;
    vm.loggedIn = Auth.isLoggedIn();

    $rootScope.$on('$routeChangeStart', function () {
      vm.processing = true;
      vm.loggedIn = Auth.isLoggedIn();
      Auth.getUser()
        .then(function (data) {
          vm.user = data;
        });
      vm.processing = false;
    });

    vm.doLogin = function () {
      vm.processing = true;
      vm.error = '';
      Auth.login(vm.loginData.username, vm.loginData.password)
        .success(function (data) {
          vm.processing = false;
          if (data.success)
            $location.path('/users');
          else
            vm.error = data.message;
        });
    };

    vm.doLogout = function () {
      Auth.logout();
      vm.user = {};
      $location.path('/login');
    };
  });
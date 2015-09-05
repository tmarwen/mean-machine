/**
 * Created by marwen on 05/09/15.
 */

angular.module('app.routes', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/pages/home.html'
      })
      .when('/login', {
        templateUrl: 'app/views/pages/login.html',
        controller: 'mainController',
        controllerAs: 'login'
      })
      .when('/users', {
        templateUrl: 'app/views/pages/user/all.html',
        controller: 'userController',
        controllerAs: 'user'
      })
      .when('/users/create', {
        templateUrl: 'app/views/pages/user/single.html',
        controller: 'userCreateController',
        controllerAs: 'user'
      })
      .when('/users/:user_id', {
        templateUrl: 'app/views/pages/user/single.html',
        controller: 'userEditController',
        controllerAs: 'user'
      });

    $locationProvider.html5Mode(true);
  });
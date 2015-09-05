/**
 * Created by marwen on 05/09/15.
 */

angular.module('userApp', [
  'ngAnimate',
  'app.routes',
  'authService',
  'mainCtrl',
  'userCtrl',
  'userService'])

  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });
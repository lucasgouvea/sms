const app = angular.module('app', [
  'ui.router',
]);


const env = {};

if (window) {
  Object.assign(env, window.env);
}

app.constant('config', {
  backend: `http://localhost:${env.PORT}`,
});

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'view/home.html',
        controller: 'home',
        controllerAs: 'ctrl',
      })
      .state('services', {
        url: '/services',
        templateUrl: 'view/services.html',
        controller: 'encode-decode',
        controllerAs: 'ctrl',
      })
      .state('logs', {
        url: '/logs',
        templateUrl: 'view/logs.html',
        controller: 'logs',
        controllerAs: 'ctrl',
      });
  },
]);

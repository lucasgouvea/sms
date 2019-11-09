angular.module('app').controller('logs', [
  '$scope',
  '$http',
  'config',
  function ($scope, $http, config) {
    const { backend } = config;
    $scope.logs = [];
    $http.get(`${backend}/logs/decode`).then(
      (res) => { $scope.logs.push(...res.data.decodeLogs); },
      (err) => { console.log(err); },
    );
    $http.get(`${backend}/logs/encode`).then(
      (res) => { $scope.logs.push(...res.data.encodeLogs); },
      (err) => { console.log(err); },
    );
  },
]);

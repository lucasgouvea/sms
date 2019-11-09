angular.module('app').controller('logs', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $scope.logs = [];

    $http.get('http://localhost/logs/decode').then(
      (res) => { $scope.logs.push(...res.data.decodeLogs); },
      (err) => { console.log(err); },
    );
    $http.get('http://localhost/logs/encode').then(
      (res) => { $scope.logs.push(...res.data.encodeLogs); },
      (err) => { console.log(err); },
    );
  },
]);

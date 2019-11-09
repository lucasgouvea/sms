angular.module('app').controller('encode-decode', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $scope.result = '';
    $scope.operation = '';
    $scope.text = '';
    $scope.convert = () => {
      const header = { headers: { 'Content-Type': 'application/json' } };
      let data;
      let route;
      let type;
      switch ($scope.operation) {
        case 'text-message': {
          data = { textMessage: $scope.text };
          route = 'encode';
          type = 'numberSequence';
          break;
        }
        case 'number-sequence': {
          data = { numberSequence: $scope.text };
          route = 'decode';
          type = 'textMessage';
          break;
        }
        default: data = 'text-message'; route = 'encode'; break;
      }
      data = JSON.stringify(data);
      $http.post(`http://localhost/${route}`, data, header).then(
        (res) => { $scope.result = res.data[type]; },
        (err) => { console.log(err); },
      );
    };
  },
]);

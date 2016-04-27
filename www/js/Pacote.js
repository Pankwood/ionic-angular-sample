var starter = angular.module('starter', ['ionic', 'directive'])

starter.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'index.html'
  })
  .state('detalhe', {
    url: '/detalhe.html',
    templateUrl: 'detalhe.html'
  });

}).controller('MeuPacote', function($scope, $rootScope, $http, $window) {
    $http.get('../data/ListPackage.json').then(function (resp) {
      $scope.pacotes = resp.data.ListaPacoteResult;
      $scope.img404 = $rootScope.img404;
      console.log('Showing', resp.data.ListaPacoteResult);
  }, function(err) {
    console.error('ERR', err);
  })

  $scope.DetalheDoPacote = function(ID)
  {
    console.log(ID);
    $window.localStorage.setItem("ID", ID);
    $window.location='/detalhe.html';
  };
})


var detail = angular.module('detail', ['ionic', 'directive'])

detail.controller('MeuDetalhe', function($scope, $rootScope, $http, $window) {
    $http.get('../data/'+$window.localStorage.getItem('ID')+'.json').then(function (resp) {
      $scope.detalhes = resp.data.DetalhesDoPacoteResult;
      $scope.incluis = resp.data.DetalhesDoPacoteResult[0].Inclui;
      $scope.img404 = $rootScope.img404;
      $window.localStorage.removeItem('ID');
      console.log('Detailing', resp.data.DetalhesDoPacoteResult);
      console.log('Incluiing', resp.data.DetalhesDoPacoteResult[0].Inclui);
      $scope.goBack = function() {
   $window.location='/index.html';
 };
  }, function(err) {
    console.error('ERR', err);
  })
})










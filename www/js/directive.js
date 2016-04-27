
var directive = angular.module('directive', ['ionic']).run(function($rootScope) {
    $rootScope.img404 = 'http://pacotes.mmtgapnet.com.br/sw/images/Pacotes/AmericaSul/0.jpg';
})

directive.directive('onErrorSrc', function() {
    return {
        link: function(scope, element, attrs) {
          element.bind('error', function() {
            if (attrs.src != attrs.onErrorSrc) {
              attrs.$set('src', attrs.onErrorSrc);
            }
          });
        }
    }
});
angular.
  module('filmographyApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/films', {
          template: '<film-list></film-list>'
        }).
        when('/films/:filmId', {
          template: '<film-detail></film-detail>'
        }).
        otherwise('/films');
    }
  ]);

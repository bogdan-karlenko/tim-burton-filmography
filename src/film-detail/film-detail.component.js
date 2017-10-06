angular.
module('filmDetail').
component('filmDetail', {
  templateUrl: 'src/film-detail/film-detail.template.html',
  controller: ['$http', '$routeParams', function FilmDetailController($http, $routeParams) {
    var self = this;

    $http.get('src/films/' + $routeParams.filmId + '.json').then(function(response) {
      self.film = response.data;
    });
  }]
});

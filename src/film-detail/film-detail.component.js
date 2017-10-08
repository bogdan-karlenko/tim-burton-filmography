angular.
module('filmDetail').
component('filmDetail', {
  templateUrl: 'src/film-detail/film-detail.template.html',
  controller: ['$http', '$routeParams', function FilmDetailController($http, $routeParams) {
    var self = this;

    $http.get('src/films/' + $routeParams.filmId + '.json').then(function(response) {
      var filmDetails = response.data;

      if (typeof filmDetails.directed === 'string') {
        filmDetails.directed = [filmDetails.directed];
      }

      self.film = filmDetails;
    });
  }]
});

angular.
module('filmDetail').
filter('checkmark', function() {
  return function(input) {
    if (input === true) {
      return '\u2713';
    } else {
      return '\u2718';
    }
  }
});

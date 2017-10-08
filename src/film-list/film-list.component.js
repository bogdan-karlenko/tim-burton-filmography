angular.
module('filmList').
component('filmList', {
  templateUrl: '/src/film-list/film-list.template.html',
  controller: function filmListController($http) {
    var self = this;
    self.orderProp = '-year';

    $http.get('/src/films/films.json').then(function(response) {
      self.films = response.data;
    })
  }
});

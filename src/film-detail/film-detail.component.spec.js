describe('filmDetail', function() {

  beforeEach(module('filmDetail'));

  describe('FilmDetailController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('src/films/abc.json').respond({
        name: 'film abc'
      });

      $routeParams.filmId = 'abc';

      ctrl = $componentController('filmDetail');
    }));

    it('should fetch the film details', function() {
      expect(ctrl.film).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.film).toEqual({
        name: 'film abc'
      });
    });
  });
});

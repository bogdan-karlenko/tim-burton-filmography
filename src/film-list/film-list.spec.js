describe('filmList', function() {

  beforeEach(module('filmList'));

  // Test the controller
  describe('FilmListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/src/films/films.json')
        .respond([{
          name: '9'
        }, {
          name: 'Batman'
        }]);

      ctrl = $componentController('filmList');
    }));

    it('should create a `films` property with 2 films fetched with `$http`', function() {
      expect(ctrl.films).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.films).toEqual([{
        name: '9'
      }, {
        name: 'Batman'
      }]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('year');
    });
  });

});

define('carousel', ['jquery', 'flickity'], function($, Flickity) {

  'use strict';

  var slider = function () {

    var flkty = new Flickity( '.js-carousel', {

    });

  };

  var init = function () {

    slider();

  };

  return {
    init: init
  };

});

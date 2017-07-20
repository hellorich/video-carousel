require(['jquery', 'carousel'], function ($, carousel) {

  'use strict';

  $('.js-carousel').each(function() {
    carousel.init(this);
  });

});

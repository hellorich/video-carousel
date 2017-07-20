define('carousel', ['jquery', 'flickity', 'polyfillPlaysInline'], function($, Flickity, polyfillPlaysInline) {

  'use strict';

  var polyfillVideos = function() {
    //console.log('Polyfill videos for iOS9 and 8');
    $('.js-carousel').find('video').each(function () {
 	    enableInlineVideo(this);
    });
  }

  var initCarousel = function () {
    //console.log('Initialise carousel');
    var flkty = new Flickity( '.js-carousel', {
      adaptiveHeight: true,
      cellAlign: 'center',
      contain: true,
      initialIndex: 2
    });
  };

  var setActiveCarouselVideo = function() {
    //console.log('Initialise video behaviour');
    $('.js-carousel').find('video').each( function( i, video ) {
      //console.log('Pause all active videos');
      video.pause();
    });

    $('.js-carousel').find('.is-selected video').each( function( i, video ) {
      //console.log('Play video in selected slide on load');
      video.play();
    });
  };

  var init = function () {

    polyfillVideos();
    initCarousel();
    setActiveCarouselVideo();

    // Events
    // On Flickity slide change reset active carousel video
    $('.js-carousel').on( 'settle.flickity', function() {
      //console.log('Flickity settled on a new slide');
      setActiveCarouselVideo();
    });
  };

  return {
    init: init
  };

});

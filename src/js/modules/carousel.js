define('carousel', ['jquery', 'flickity', 'polyfillPlaysInline'], function($, Flickity, polyfillPlaysInline) {

  'use strict';

  var polyfillVideos = function(carousel) {
    //console.log('Polyfill videos for iOS9 and 8');
    $(carousel).find('video').each(function () {
 	    enableInlineVideo(this);
    });
  }

  var initCarousel = function (carousel) {
    //console.log('Initialise carousel');
    // Can we absorb these from data attributes which can in turn be set by Wordpress
    // Flickity should allow this fairly easily I believe
    var flkty = new Flickity( carousel, {
      adaptiveHeight: true,
      cellAlign: 'center',
      //contain: true,
      initialIndex: 2
    });
  };

  var setActiveCarouselVideo = function(carousel) {
    //console.log('Initialise video behaviour');
    $(carousel).find('video').each( function( i, video ) {
      //console.log('Pause all active videos');
      video.pause();
    });

    $(carousel).find('.is-selected video').each( function( i, video ) {
      //console.log('Play video in selected slide on load');
      video.play();
    });
  };

  var init = function (carousel) {

    polyfillVideos(carousel);
    initCarousel(carousel);
    setActiveCarouselVideo(carousel);

    // Events
    // On Flickity slide change reset active carousel video
    $(carousel).on( 'settle.flickity', function() {
      //console.log('Flickity settled on a new slide');
      setActiveCarouselVideo(carousel);
    });
  };

  return {
    init: init
  };

});

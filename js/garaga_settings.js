(function ($, Drupal) {

  // Helper function to get URL parameter.
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
  };

  // Garaga Red Off feature.
  Drupal.behaviors.garagaRedOff = {
    attach: function (context, settings) {

      // Using once() with more complexity.
      $('body', context).once('garagaRedOffCookie').each(function () {

        // Set Cookie if Get Red value.
        var getRed = getUrlParameter('red');
        if (typeof getRed !== 'undefined' && getRed === 'off') {
          $.cookie('Garaga.Settings.red', getRed, { expires : 1, path: '/' });
        }

        // Use cookie to add CSS classes.
        var cookieRed = $.cookie('Garaga.Settings.red');
        if (typeof cookieRed !== 'undefined' && cookieRed === 'off') {

          // Add class to hide red contact button.
          $('body', context).addClass('hide-band');

          // Add class to hide quote button (only for Garaga main site).
          if (settings.garaga.siteName === 'Garaga') {
            $('body', context).addClass('hide-quote-button');
          }
        }
      });
    }
  };

})(jQuery, Drupal);

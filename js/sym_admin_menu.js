/**
 * @file
 * Attaches the behaviors for the indicator module.
 */

(function ($) {
  Drupal.behaviors.sym_admin_menu = {
    attach: function(context, settings) {
      var $ = jQuery;

      var height = $('#sym-admin-menu.sym-admin-menu-content').outerHeight() - $('#sym-admin-menu.sym-admin-menu-content h2').outerHeight();
      var opacity = $('#sym-admin-menu').css('opacity');

      if($('#sym-admin-menu').css('bottom') == '0px') {
        $('#sym-admin-menu').css('bottom', '-' + height + 'px');
      }

      $('#sym-admin-menu h2').click(function() {
        if($('#sym-admin-menu').css('bottom') == '0px') {
          $('#sym-admin-menu').animate({
            bottom: -1 * height + 'px',
            opacity: opacity,
          }, 500);
        } else {
          $('#sym-admin-menu').animate({
            bottom: 0,
            opacity: 1,
          }, 500);
        }
      });

    }
  };
})(jQuery);
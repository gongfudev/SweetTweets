(function( $ ){

  var methods = {

    tweetsPage: function() {
      $('#filter-button').click(function (event) {
        event.preventDefault();
        $('#filter-popup').show();
      });
    },

    initAll: function( options ) { 
      $().initPage("tweetsPage");
    },
  };

  $.fn.initPage = function( method ) {

    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.initAll.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }
  };

})( jQuery );

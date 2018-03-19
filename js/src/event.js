// event.js
(function($) {
  $('.eventproduct').eq(0).addClass('view');
  var li = $('li');
  var baseUrl = '../../html/src/'
  li.on('click', function(){
    $(this).baseUrl + ('event.html');
    // $(this).next('dd').siblings('dd').removeClass('view');
  });

})(this.jQuery);
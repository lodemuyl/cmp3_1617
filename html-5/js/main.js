
$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu');
  var $dropicoon = $('.dropicoon');

$dropicoon.click(function() {
  $dropicoon.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});});

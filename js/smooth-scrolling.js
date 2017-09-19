/******************************************************************************/
$(document).ready(function () {
  //change navbar css if scrollTop > 0 and actualising
  onScroll();
  //call onScroll when scrolling event
  $(document).on('scroll', onScroll);
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      //firstly change navbar css then scroll down
      onScroll();
      e.preventDefault();
      $('a').each(function () {
          $(this).removeClass('active');
      });
      $(this).addClass('active');
      var target = this.hash,
          menu = target;
      $target = $(target);
      console.log($target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 1000, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
          $('.navbar-collapse li a:hover:before, .navbar-collapse li a:focus:before').css('visibility', 'hidden');
      });
  });
});


/******************************************************************************/
//change active li when scrolling
$('body').scrollspy({ target: '.navbar-collapse' });


/******************************************************************************/
//this function change navbar css when scrolling
function onScroll () {
  var scroll_start = $(document).scrollTop();
  var startchange = $('#startchange');
  var offset = startchange.offset();

  //change navbar css when actualising and if scroll position > 0
  if (scroll_start > 0) {
    $('#navbar').addClass('blue-navbar');
    $('.navbar-collapse').addClass('blue-navbar-collapse');
    $('.navbar-default .navbar-nav>li>a').css('color', 'white');
    $('a.navbar-brand').attr('style', 'color: white !important');
    $('.dropdown-navbar').css('background', ' #3498db');
  }
  scroll_start = $(this).scrollTop();
  if(scroll_start > offset.top) {
      $('#navbar').addClass('blue-navbar');
      $('.navbar-collapse').addClass('blue-navbar-collapse');
      $('.navbar-default .navbar-nav>li>a').css('color', 'white');
      $('a.navbar-brand').attr('style', 'color: white !important');
      $('.dropdown-navbar').css('background', ' #3498db');
   } else {
      $('#navbar').removeClass('blue-navbar');
      $('.navbar-collapse').removeClass('blue-navbar-collapse');
      $('.navbar-default .navbar-nav>li>a').css('color', '#bdbdbd');
      $('.dropdown-navbar').css('background', 'transparent');
   }
}

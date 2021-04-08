$(document).ready(function() {
    var btn = $('#myBtn');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        // btn.addClass('show');
        btn.css("display", "block");
      } else {
        // btn.removeClass('show');
        btn.css("display", "none");
      }
    });

    btn.on("click", function(e) {
      e.preventDefault();
      $("html,body").animate({
        scrollTop: 0
      }, '500'
      )
    })
  });
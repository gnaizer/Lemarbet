$('.nav-toggle').on('click', function() {
  $('#menu').toggleClass('active');
});


$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});

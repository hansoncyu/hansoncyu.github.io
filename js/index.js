$(document).ready(function() {
  scrolled = false;
  clicked = false;
  wait = false;
  window.location = "#starting";
  
  setTimeout(function(){wait=true;}, 2500);

  $("#bgContainer a").on("click", function(event) {
    if (this.hash !== "") {
      var navBar = $("#navBar");
      event.preventDefault();
      clicked = true;
      scrolled = true;
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          $("#bgContainer").css({ display: "none" });
          window.location = "#about";
          window.location.hash = hash;
          clicked = false;
          navBar.css({
            display: "inline-block",
            animation: "appear 350ms ease-in forwards"
          });
        }
      );
    }
  });

  $("#myName a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      scrolled = false;
      wait = false;
      $("#bgContainer").css({ display: "inline-block" });
      window.location.reload(true);
      window.location = "#starting";
    }
  });

  $("ul a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      clicked = true;

      $("#navBar li").removeClass("active");
      $(this).parent().addClass("active");

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        650,
        function() {
          window.location.hash = hash;
          clicked = false;
        }
      );
    }
  });
    $(window).scroll(function() {
      if (scrolled == false && wait == true) {
        $("html, body").animate(
          {
            scrollTop: $("#about").offset().top
          },
          800,
          function() {
            $("#bgContainer").css({ display: "none" });
            window.location = "#about";
            window.location.hash = "#about";
            clicked = false;
            var navBar = $("#navBar");
            navBar.css({
              display: "inline-block",
              animation: "appear 350ms ease-in forwards"
            });
          }
        );
        scrolled = true;
      }
      if (clicked == false) {
        var scrollPosition = $(window).scrollTop();
        $("ul a").each(function() {
          var currentLink = $(this);
          var refElement = $(currentLink.attr("href"));
          if (
            refElement.position().top <= scrollPosition &&
            refElement.position().top + refElement.height() > scrollPosition
          ) {
            $("#navBar li").removeClass("active");
            $(this).parent().addClass("active");
          }
          if(refElement.position().top == scrollPosition) {
            window.location.hash = this.hash;
          }
        });
      }
    });
});
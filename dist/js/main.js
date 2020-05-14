"use strict";

$(function () {
  $(".menu-btn").on('click', function () {
    $('.main-header, body').toggleClass('show');
  });
  $("body").on('click', '.page-pilling__item, .anchor', function (e) {
    e.preventDefault();
    var anchor = $(this).attr("href");
    var $this = $(this);

    if ($(anchor).length) {
      var run = $(anchor).offset().top;
      $('body,html').stop().animate({
        scrollTop: run
      }, 1500);
    } else {
      console.warn("ID don't search!");
    }
  });
  $('.main-nav').on("click", function () {
    $("body, .main-header").removeClass("show");
  });

  var positionElements = function positionElements() {
    var $pagePilling = $('.page-pilling');
    $('.position-element').each(function (index) {
      var $this = $(this);
      var topPosition = $this.offset().top;
      var id = $this.attr("id");

      if (index === 0) {
        $pagePilling.append("<li><a href=\"#".concat(id, "\" data-top=\"").concat(topPosition, "\" class=\"page-pilling__item\"></a></li>"));
      } else {
        $pagePilling.append("<li><a href=\"#".concat(id, "\" data-top=\"").concat(topPosition, "\" class=\"page-pilling__item\"></a></li>"));
      }
    });
  };

  var scrollPage = function scrollPage() {
    var scrollTop = $(window).scrollTop();
    $('.page-pilling__item').each(function () {
      var $this = $(this);
      var topPositionElement = $this.attr("data-top");

      if (scrollTop >= topPositionElement) {
        $('.page-pilling__item').removeClass("active");
        $this.addClass("active");
        return true;
      }
    });
  };

  positionElements();
  scrollPage();
  $('.page-pilling li:eq(0) .page-pilling__item').addClass("active");
  $(window).scroll(scrollPage);
});
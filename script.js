// Script Slider Slideshow
$(document).ready(function () {
  $(".slides").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
  });
});

// Script Time Coutdown Flash Sale
var timeCountdown = new Date("Jan 31, 2022 23:30:00").getTime();
var timeX = setInterval(function () {
  var timeNow = new Date().getTime();
  var timeDistance = timeCountdown - timeNow;

  var timeDays = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
  var timeHours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var timeMinutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
  var timeSeconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

  document.getElementById("timeFlashSale").innerHTML = timeDays + "d " + timeHours + "h " + timeMinutes + "m " + timeSeconds + "s";

  if (distance < 0) {
    clearInterval(timeX);
    document.getElementById("timeFlashSale").innerHTML = "Maaf, Flash Sale Sudah Berakhir!";
  }
}, 1000);

// Script Slider Slideshow
$(document).ready(function () {
  $(".rowContent").slick({
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

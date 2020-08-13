// var zodiac = {
// "aries": {
//   "horoscope": "Feeling moody, Cancer? You can chalk it up to today’s tough angle between the moon and volcanic Pluto. Put extra effort into not projecting your tension and frustration onto those around you, especially when dealing with your so-called opponents. If you’ve got social plans this evening, it might be best to bow out. Why force yourself to go through the motions when all you really want to do is curl up with your Kindle or catch up with the Kardashians?",
//   "date": "Wednesday, August 15, 2018",
//   "sign": "aries"
// },
// "taurus": {
//   "horoscope": "Feeling moody, Cancer? You can chalk it up to today’s tough angle between the moon and volcanic Pluto. Put extra effort into not projecting your tension and frustration onto those around you, especially when dealing with your so-called opponents. If you’ve got social plans this evening, it might be best to bow out. Why force yourself to go through the motions when all you really want to do is curl up with your Kindle or catch up with the Kardashians?",
//   "date": "Wednesday, August 15, 2018",
//   "sign": "taurus"
// },
// "gemini": {
//   "horoscope": "Feeling moody, Cancer? You can chalk it up to today’s tough angle between the moon and volcanic Pluto. Put extra effort into not projecting your tension and frustration onto those around you, especially when dealing with your so-called opponents. If you’ve got social plans this evening, it might be best to bow out. Why force yourself to go through the motions when all you really want to do is curl up with your Kindle or catch up with the Kardashians?",
//   "date": "Wednesday, August 15, 2018",
//   "sign": "gemini"
// }
// };
//function results(value) {
//   if (value === zodiac[value].sign) {
//     $('.results').append("<h2>" +  zodiac[value].sign +  "</h2>");
//     $('.results');
//     for (var key in zodiac[value]){
//       if (key !== "sign") {
//        $('.results').append("<p>" + key + " : " + "<br>" + zodiac[value][key] + "</p>");
//       }
//     }
//   }
// }

// music player
let music = document.querySelector("#music");
let icon = document.querySelector("#music > i");
let audio = document.querySelector("audio");

music.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.3;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  }
});


$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
  });
  //this is not required if not submitting a form.

  let n = new Date();
  let m = n.getMonth() + 1;
  let d = n.getDate();
  $('#today').html( m + "/" + d);

  let sign = "";

  function iconShowHomeHide() {
    $('form').show();
    $('#home').hide();
  };

  function iconHideHomeShow() {
    $('form').fadeOut(1000).delay(2000);
    $('h3').fadeOut(1000).delay(2000);
    $('#home').fadeToggle(500);
  }

  function resultData(data) {
    $('.results').append("<h2>" +  sign +  "</h2>");
    for (var key in data){
        $('.results').append("<h4>" + key + "</h4> : " + "<p>" + data[key] + "</p>" + "<br>")
    };
  };

  function results(value) {
    sign = value;
    $.post('https://aztro.sameerkumar.website?sign=' + sign +'&day=today', function(data) {
        setTimeout(function(){resultData(data)}, 1000);
      })
    };

    //it's important to wrap the results(value) call in an anonymous function.
    //setTimeout wants two arguments - a measurement of time, and a function to run
    //when that time is up. if you just pass results(value),
    //it's going to run the result of calling that function instead
    //of passing it as a function to call

function getSign(){
  let month = $("#month").val();
  let date = parseInt($("#date").val());
  if (month === "February" && date > 29 ||
      month === "April" && date === 31 ||
      month === "June" && date === 31 ||
      month === "September" && date === 31 ||
      month ==="November" && date === 31){
        alert("Please input a valid date");
  } else if (month === "March" && date > 20 || month === "April" && date < 20) {
    return $(".aries").val();
  } else if (month === "April" && date > 19 || month === "May" && date < 21) {
    return $(".taurus").val();
  } else if (month === "May" && date > 20 || month === "June" && date < 22) {
    return $(".gemini").val();
  } else if (month === "June" && date > 21 || month === "July" && date < 23) {
    return $(".cancer").val();
  } else if (month === "July" && date > 22 || month === "August" && date < 23) {
    return $(".leo").val();
  } else if (month === "August" && date > 22 || month === "September" && date < 23) {
    return $(".virgo").val();
  } else if (month === "September" && date > 22 || month === "October" && date < 24) {
    return $(".libra").val();
  } else if (month === "October" && date > 23 || month === "November" && date < 22) {
    return $(".scorpio").val();
  } else if (month === "November" && date > 21 || month === "December" && date < 22) {
    return $(".sagittarius").val();
  } else if (month === "December" && date > 21 || month === "January" && date < 20) {
    return $(".capricorn").val();
  } else if (month === "January" && date > 19 || month === "February" && date < 19) {
    return $(".aquarius").val();
  } else if (month === "February" && date > 18 || month === "March" && date < 21) {
    return $(".pisces").val();
  } else {
    alert("Please select a valid date or month");
  }
}

  $('#button').click(function(){
    let value = getSign();
    if (value) {
    iconHideHomeShow();
    results(value);
    }
  });

  $('.icon').click(function(){
      iconHideHomeShow();
      let value = $(this).val();
      results(value);
  });


  $('#home').click(function(){
    $('.results').empty();
    iconShowHomeHide();
  });


// random animation just for fun
  $(".hinge").click(function(){
    $(this).css("display","block");
    $(this).addClass("animate__animated animate__hinge");
    setTimeout(function(){
      $(".hinge").removeClass("animate__animated");
      $(".hinge").removeClass("animate__hinge");
      $(".hinge").css("display","");
    }, 2500);
  });
});

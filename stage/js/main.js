

$(document).ready(function () {
  
  // body NiceScroll 
  
  // $("html").niceScroll({
  //   cursorcolor:"#3EB2CF",
  //   horizrailenabled: false
  // });
  
  // Show / Hidden Sidebar
  
  $('.sidebar .close').on("click", function () {
    $(".sidebar").addClass('d-none d-sm-none d-md-none d-lg-block');
  });
  
  $('.content .icon i').on("click", function () {
    $('.container-div').toggleClass('expanded');
    $(".container-div .sidebar").toggleClass('no-sidebar d-none d-sm-none d-md-none d-lg-block');
  });
  
  
  // Check opactiy Button
  
  function checkbuttons() {
    if ($('.question:first').hasClass('active')) {
      $('.parent button.prev').addClass('opactiy');
    } else {
      $('.parent button.prev').removeClass('opactiy');
    }
    $('.question:last').hasClass('active') ? $('.parent button.next').addClass('opactiy') : $('.parent button.next').removeClass('opactiy');
  }
  checkbuttons();
  
  // Move To Question
  
  $('.parent button').on("click", function () {
    if ($(this).hasClass('next')) {
      if ($('.parent .active').next().is('div.question')) {
        $('.parent .button').removeClass('right wrong');
        $('.question .grammer span.line-red').text('....');
        $('.parent .choose.yes').removeClass('background-green');
        $('.parent .choose.no').removeClass('background-red');
        $('.parent .active').fadeOut(500, function () {
          $(this).removeClass('active').next('.question').addClass('active').fadeIn(1000);
          checkbuttons();
        });
      } 
    } else {
      if ($('.parent .active').prev().is('div.question')) {
        $('.parent .button').removeClass('right wrong');
        $('.question .grammer span.line-red').text('....');
        $('.parent .choose.yes').removeClass('background-green');
        $('.parent .choose.no').removeClass('background-red');
        $('.parent .active').fadeOut(500, function () {
          $(this).removeClass('active').prev('.question').addClass('active').fadeIn(1000);
          checkbuttons();
        });
      }
    }
  });

  // Show / Hidden button:before 

  $('.parent .choose').on("click", function () {
    if ($(this).hasClass('yes')) {
      $('.parent .button').addClass('right');
      $('.parent .button').removeClass('wrong');
      $(this).addClass('background-green');
      $('.parent .choose').removeClass('background-red');
    } else {
      $('.parent .button').removeClass('right');
      $('.parent .button').addClass('wrong');
      $(this).addClass('background-red');
      $('.parent .choose').removeClass('background-green');
    }
  });

  // Toggle Volume Icon

  $('.question .example span.color').on("mouseenter", function () {
    $('.question .example span.color i.show').removeClass("fa-volume-off fa-lg").addClass("fa-volume-up fa-2x");
    $('.question .example span.color i.show').css({
      paddingRight: '0px',
      fontSize: '1.33333em'
    })
  });
  
  $('.question .example span.color').on("mouseleave", function () {
    $('.question .example span.color i.show').removeClass("fa-volume-up fa-2x").addClass("fa-volume-off fa-lg");
    $('.question .example span.color i.show').css({
      paddingRight: '8px',
      fontSize: '26px'
    })
  });

  // Toggle book Icon

  $('.question .example span.color').on("mouseenter", function () {
    $('.question .example span.color i.read').removeClass("fa-book").addClass("fa-book-open");
  });
  
  $('.question .example span.color').on("mouseleave", function () {
    $('.question .example span.color i.read').removeClass("fa-book-open").addClass("fa-book");
  });

  // Show / Hidden Audio Div

  $('.question .example span.color').on("click", function () {
    $('.question .example .audio').toggleClass("active");
  });
  
  $('.question .example .audio span.times').on("click", function () {
    $('.question .example .audio').toggleClass("active");
  });


  // check Choosen Answer

  $('.chekbox .qurtar input#x1').on("click", function () {
    $(this).toggleClass('test')
  });

  // $('.chekbox .qurtar input#three').on("click", function () {
  //   $(this).toggleClass('test')
  // });

  $('.question .rate-answer').on("click", function () {
    if ($('.chekbox .qurtar input#x1').hasClass('test')) {
      $('.question .rate-answer').hide();
      $('.question .right-answer').show().delay(3000).fadeOut(500);
      $('.question .rate-answer').delay(4000).fadeIn();
      $('.chekbox .qurtar input#x1').removeClass('test');
    } else {
      $('.question .rate-answer').hide();
      $('.question .Wrong-answer').show().delay(3000).fadeOut(500);
      $('.question .rate-answer').delay(4000).fadeIn();
    }
  });

  // Check Right Or Wrong Answer

  $('.question .choose').on("click", function () {
    if ($(this).hasClass('yes')) {
      $('.question .choses .choose.yes').addClass('background-green');
      $('.question .choses .choose.no').removeClass('background-red');
    } else {
      $('.question .choses .choose.no').addClass('background-red');
      $('.question .choses .choose.yes').removeClass('background-green');
    }
  });

  // Change Result Text

  $('.parent .question .teached span.stay-three').on("click", function () {
    $('.parent .question .result').text('على الدولة أن تهتم بحقوق المواطنين ، وتحافظ على رعايتهم');
  });
  
  $('.parent .question .teached span.stay-tow').on("click", function () {
    $('.parent .question .result').text('فمن حق المواطن أن يجد مسكنا مناسبا ومن حق المواطن أن يجد عملا مناسبا ومن حق المواطن أن يجد رعاية صحية جيدة ومن حق المواطن أن يحترم رأيه أيا كان هذا الرأى');
  });
  
  $('.parent .question .teached span.stay-one').on("click", function () {
    $('.parent .question .result').text('إن رعاية الدولة لهذه الحقوق تبنى لدى المواطنين الولاء للوطن وحبه والدفاع عنه والتضحيه بكل غال ورخيص فى سبيل تطوير هذا  الوطن والدفاع عنه');
  });
  
  // Check Select Answer

  $('.question .rate-answer-select').on("click", function first() {
    if ($('.question select#one').val() == '3' && $('.question select#tow').val() == '1' && $('.question select#three').val() == '2') {
      $('.question .rate-answer-select').hide();
      $('.question .right-answer').show().delay(3000).fadeOut(500);
      $('.question .rate-answer-select').delay(4000).fadeIn();
    } else {
      $('.question .rate-answer-select').hide();
      $('.question .Wrong-answer').show().delay(3000).fadeOut(500);
      $('.question .rate-answer-select').delay(4000).fadeIn();
    }
  });

  // Check Select Answer

  $('.question.last .rate-answer-select').on("click", function last() {
    if ($('.question.last select#four').val() == 'الجملة الشارحة' && $('.question.last select#five').val() == 'الجملة الرئيسية' && $('.question.last select#six').val() == 'الجملة الختامية') {
      $('.question.last .rate-answer-select').hide();
      $('.question.last .Wrong-answer').hide();
      $('.question.last .right-answer').show().delay(3000).fadeOut(500);
      $('.question.last .rate-answer-select').delay(4000).fadeIn();
    } else {
      $('.question.last .rate-answer-select').hide();
      $('.question.last .right-answer').hide();
      $('.question.last .Wrong-answer').show().delay(3000).fadeOut(500);
      $('.question.last .rate-answer-select').delay(4000).fadeIn();
    }
  });

  // Check Correct Anwer

  $('.question ul.rule li span.guess').on("click", function () {
    if ($(this).hasClass('yes')) {
      $(this).addClass('bord');
      $('.question ul.rule li span.guess').removeClass('bord-x');
      $('.question .right-answer').addClass('active');
      $('.question .Wrong-answer').removeClass('active');
    } else {
      $(this).addClass('bord-x');
      $('.question ul.rule li span.guess').removeClass('bord');
      $('.question .Wrong-answer').addClass('active');
      $('.question .right-answer').removeClass('active');
    }
  });

  // Show / Hide Example Div

  $('.question.thirteen .result-stay-one .file i').on("click", function () {
    $('.question.thirteen .result-stay-one .example2').toggleClass('active');
  });

  $('.question.thirteen .result-stay-tow .file i').on("click", function () {
    $('.question.thirteen .result-stay-tow .example3').toggleClass('active');
  });

  // Change Content Result Div

  $('.question.thirteen .teached span.stay-one-g').on("click", function () {
    $('.question.thirteen .result').hide();
    $('.question.thirteen .result-stay-one').addClass('active');
    $('.question.thirteen .result-stay-tow').removeClass('active');
    $('.parent button').on("click", function () {
      $('.question.thirteen .result').show();
      $('.question.thirteen .result-stay-one').hide('active');
      $('.question.thirteen .result-stay-tow').hide('active');
    });
  });
  
  $('.question.thirteen .teached span.stay-tow-g').on("click", function () {
    $('.question.thirteen .result').hide();
    $('.question.thirteen .result-stay-tow').addClass('active');
    $('.question.thirteen .result-stay-one').removeClass('active');
  });

  // Show / Hidden All Div

  $('.question .example span.color').on("click", function () {
    $('.question .all').toggleClass('active');
  });

  // Check Grammer Answer

  $('.question .grammer span.line-black').on("click", function () {
    $('.question .grammer span.line-red').text($(this).text());
    if ($(this).hasClass('yes')) {
      $('.question .grammer span.line-black').fadeOut().delay(5000).fadeIn();
      $('.question .right-answer').addClass('active');
      $('.question .Wrong-answer').removeClass('active');
    } else {
      $('.question .right-answer').removeClass('active');
      $('.question .Wrong-answer').addClass('active');
    }
  });

    // Loading Screen
    
    setTimeout(function () {
      $('.loading .sk-cube-grid').fadeOut(1000, function () {
        $(this).parent().fadeOut(1000, function () {
          $(this).remove();
        });
      });
    }, 500);

  // Create A Type Writer

  var myText = 'ينبغي في نهاية الدرس أن تكون قادرًا على أن :',
      i = 0;

  var typeWriter = setInterval(function () {
    document.getElementById('type-writer').textContent += myText[i];
    i = i + 1;
    if (i > myText.length -1) {
      clearInterval(typeWriter);
    }
  }, 50);

});




$(document).ready(function(){
  $(".wowza").mouseenter(function(){
    $("#panel1").animate({
      left:'-150px'
    })
    $("#panel2").animate({
      width:'270px'
    })
   /* $("h2").animate({
      'font-size':'39'
    })*/
  });

  $(".wowza").mouseleave(function(){
    $("#panel1").animate({
      left:'-420px'
    })
    $("#panel2").animate({
      width:'1px'
    })/*
    $("h2").animate({
      'font-size':'38'
    })*/
  });
/*
  $("#NYC").mouseenter(function(){
   $("#NYC").animate({
      opacity: '1'
    });
 });

  $("#NYC").mouseleave(function(){
   $("#NYC").animate({
      opacity: '.9'
    });
 });*/

  $("#logo").mouseenter(function(){
   $("#logo").animate({
      opacity: '1'
    });
 });

  $("#logo").mouseleave(function(){
   $("#logo").animate({
      opacity: '.8'
    });
 });

 

  $(".pictureSlide").mouseenter(function(){
   $(".pictureSlide").animate({
      opacity: '1'
    });
 });

  $(".pictureSlide").mouseleave(function(){
   $(".pictureSlide").animate({
      opacity: '.9'
    });
 });

  $("#block1").mouseenter(function(){
    $("#panel3").animate({
      left:'-355px'
    })
  })

  $("#block1").mouseleave(function(){
    $("#panel3").animate({
      left:'-425px'
    })
  })

  
$("#block3").mouseenter(function(){
    $("#panel6").animate({
      left:'-125px'
    })
  })

  $("#block3").mouseleave(function(){
    $("#panel6").animate({
      left:'-425px'
    })
  })



  $(".pictureSlide").mouseenter(function(){
    $("#panel4").animate({
      left: '-120px'
    });
    $("#panel5").animate({
      width: '275px'
    });
  })

  $(".pictureSlide").mouseleave(function(){
    $("#panel4").animate({
      left: '-400px'
    });
    $("#panel5").animate({
      width: '0px'
    });
  })

  $("#home").click(function(){
    $("window").animate({
      scrollTop: 500
    }, 400);
    });

$(".blue1").mouseenter(function(){
    $("#white1").animate({
      height: '450px',
      width:'900px',
      left: '200px',
      right: '200px',
      top: '3080px'
    });
  })

$(".blue1").mouseleave(function(){
    $("#white1").animate({
      height: '560px',
      width:'1160px',
      left: '50px',
      right: '50px',
      top: '3030px'
    });
  })

$(".pink1").mouseenter(function(){
    $("#white2").animate({
      height: '450px',
      width:'900px',
      left: '200px',
      right: '200px',
      top: '3700px'
    });
  })


$(".pink1").mouseleave(function(){
    $("#white2").animate({
      height: '560px',
      width:'1160px',
      left: '50px',
      right: '50px',
      top: '3650px'
    });
  })

$(".blue2").mouseenter(function(){
    $("#white3").animate({
      height: '450px',
      width:'900px',
      left: '200px',
      right: '200px',
      top: '4320px'
    });
  })

$(".blue2").mouseleave(function(){
    $("#white3").animate({
      height: '560px',
      width:'1160px',
      left: '50px',
      right: '50px',
      top: '4270px'
    });
  })


$(".pink2").mouseenter(function(){
    $("#white4").animate({
      height: '450px',
      width:'900px',
      left: '200px',
      right: '200px',
      top: '4940px'
    });
  })

$(".pink2").mouseleave(function(){
    $("#white4").animate({
      height: '560px',
      width:'1160px',
      left: '50px',
      right: '50px',
      top: '4890px'
    });
  })

$(".blue3").mouseenter(function(){
    $("#white5").animate({
      height: '450px',
      width:'900px',
      left: '200px',
      right: '200px',
      top: '5560px'
    });
  })


$(".blue3").mouseleave(function(){
    $("#white5").animate({
      height: '560px',
      width:'1160px',
      left: '50px',
      right: '50px',
      top: '5510px'
    });
  })

$(".pink3").mouseenter(function(){
    $("#white6").animate({
      height: '450px',
      width:'900px',
      left: '200px',
      right: '200px',
      top: '6180px'
    });
  })

$(".pink3").mouseleave(function(){
    $("#white6").animate({
      height: '560px',
      width:'1160px',
      left: '50px',
      right: '50px',
      top: '6130px'
    });
  })


$("#whito1").mouseenter(function(){
    $("#pinkbox1").animate({
      height: '50px',
      width:'645px',
      left: '315px',
      top: '60px'
    });
  })

$("#whito1").mouseleave(function(){
    $("#pinkbox1").animate({
      height: '20px',
      width:'20px',
      left: '315px',
      top: '60px'
    });
  })

$("#whito3").mouseenter(function(){
    $("#pinkbox2").animate({
      height: '50px',
      width:'720px',
      left: '280px',
      top: '4340px'
    });
  })

$("#whito3").mouseleave(function(){
    $("#pinkbox2").animate({
      height: '20px',
      width:'20px',
      left: '280px',
      top: '4340px'
    });
  })

$("#whito5").mouseenter(function(){
    $("#pinkbox3").animate({
      height: '50px',
      width:'650px',
      left: '330px',
      top: '5580px'
    });
  })

$("#whito5").mouseleave(function(){
    $("#pinkbox3").animate({
      height: '20px',
      width:'20px',
      left: '330px',
      top: '5580px'
    });
  })

$("#whito2").mouseenter(function(){
    $("#bluebox1").animate({
      height: '50px',
      width:'560px',
      left: '353px',
      top: '-6px'
    });
  })

$("#whito2").mouseleave(function(){
    $("#bluebox1").animate({
      height: '20px',
      width:'20px',
      left: '353px',
      top: '-6px'
    });
  })

$("#whito4").mouseenter(function(){
    $("#bluebox2").animate({
      height: '45px',
      width:'740px',
      left: '280px',
      top: '4970px'
    });
  })

$("#whito4").mouseleave(function(){
    $("#bluebox2").animate({
      height: '20px',
      width:'20px',
      left: '280px',
      top: '4970px'
    });
  })

$("#whito6").mouseenter(function(){
    $("#bluebox3").animate({
      height: '40px',
      width:'590px',
      left: '350px',
      top: '6200px'
    });
  })

$("#whito6").mouseleave(function(){
    $("#bluebox3").animate({
      height: '20px',
      width:'20px',
      left: '350px',
      top: '6200px'
    });
  })

$(".blue4").mouseenter(function(){
    $("#white7").animate({
      height: '460px',
      width:'1000px',
      left: '130px',
      top: '6800px'
    });
  })

$(".blue4").mouseleave(function(){
    $("#white7").animate({
      height: '560px',
      width:'1160px',
      left: '50px',
      top: '6750px'
    });
     })

$("#whito8").mouseenter(function(){
  $("#circ").animate({
  width: '550px',
  height: '550px',
  top: '7375px',
  left: '375px'
  })
})

$("#whito8").mouseleave(function(){
  $("#circ").animate({
  width: '600px',
  top: '7350px',
  height: '600px',
  left: '350px'
  })
})

$("#whito9").mouseenter(function(){
  $("#circ1").animate({
  width: '550px',
  height: '550px',
  top: '7995px',
  left: '375px'
  })
})

$("#whito9").mouseleave(function(){
  $("#circ1").animate({
  width: '600px',
  top: '7970px',
  height: '600px',
  left: '350px'
  })
})

  $("#whito8").mouseenter(function(){
    $("#bluebox4").animate({
      height: '35px',
      width:'210px',
      left: '545px',
      top: '7415px'
    });
  })

$("#whito8").mouseleave(function(){
    $("#bluebox4").animate({
      height: '20px',
      width:'20px',
      left: '545px',
      top: '7415px'
    });
  })

 $("#whito9").mouseenter(function(){
    $("#pinkbox5").animate({
      height: '35px',
      width:'233px',
      left: '530px',
      top: '8045px'
    });
  })

$("#whito9").mouseleave(function(){
    $("#pinkbox5").animate({
      height: '20px',
      width:'20px',
      left: '530px',
      top: '8045px'
    });
  })

var navOffset = $("nav").offset().top;


$("nav").wrap('<div class="nav-placeholder"></div>');

$(".nav-placeholder").height($("nav").outerHeight());

$(window).scroll(function(){
  var scrollPos = $(window).scrollTop();

  if(scrollPos >= navOffset){
      $("nav").addClass("fixed");
  } else{
    $("nav").removeClass("fixed");
  }
});



});

function myAbout(){
  document.body.scrollTop= 0;
}

function myPrograms(){
  document.body.scrollTop= 620;
}

function myWeekend(){
  document.body.scrollTop= 1240;
}

function myTestPrep(){
  document.body.scrollTop= 1860;
}

function myRead(){
  document.body.scrollTop= 2480;
}

function myWrite(){
  document.body.scrollTop= 3105;
}

function myMiddleEnglish(){
  document.body.scrollTop= 3725;
}

function myMiddleMath(){
  document.body.scrollTop= 4350;
}

function myRegistration(){
  document.body.scrollTop= 4970;
}

function myKids(){
  document.body.scrollTop= 5590;
}

function myTeachers(){
  document.body.scrollTop= 6210;
}
function myDiscount(){
  document.body.scrollTop= 7330;
}

function myContact(){
  document.body.scrollTop= 8050;
}

var i = 0;
  var images = [];
  var time= 3000;

  images[0] = 'kids.jpg';
  images[1] = 'kids1.jpg';
  images[2] = 'kids2.jpg';
  images[3] = 'kids3.jpg';

  function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
      i++;
    } else{
      i = 0;
    }

    setTimeout("changeImg()", time);
  }

  window.onload = changeImg;

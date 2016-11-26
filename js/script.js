
// // footer menu
;(function($){
  $('[data-comment-type]').on('click', function() {
    $('[data-comment-type]').removeClass('active');
    $(this).addClass('active');
    var block = $(this).attr('data-comment-type');
    $('.type-user').removeClass('active');
    $(block).addClass('active');
    if ($(window).width() < 992 ) {
      $('[data-show-more]').show();
      $('[data-show-more]').attr('data-show-more', block);
      var listItem = $(block).find('li');
      $(listItem[2]).hide();
      $(listItem[3]).hide();
    }
  });

  $('[data-show-comment]').on('click', function() {
    var parent = $(this).parent();
    parent.find('.small-cm').hide();
    parent.find('.continue').show();
    $(this).hide();
  });

  $('[data-show-more]').on('click', function() {
    var block = $(this).attr('data-show-more');
    var listItem = $(block).find('li');
    $(listItem[2]).show();
    $(listItem[3]).show();
    $(this).hide();
  });

  $(window).resize(function() {
    if ($(window).width() > 992) {
      $('[data-show-more]').hide();
      $('.comment-block__item').show();
    } else {
      $('[data-show-more]').show();
      var listItem = $('.comment-block__item');
      $(listItem[2]).hide();
      $(listItem[3]).hide();
      $(listItem[6]).hide();
      $(listItem[7]).hide();
    }
  });
})(jQuery);

// footer menu
;(function($){
  var width = $(window).width();
  $('[data-describ]').on('click', function(e) {
    e.preventDefault();
    var block = $(this).attr('data-describ');
    var content = $(this).attr('data-content-method');
    $('[data-describ]').removeClass('active');
    $(this).addClass('active');
    if ($(window).width() < 992) {
      $('.type-basic').removeClass('active');
      $('.type-basic').hide();
      $(block).show();
      $(block).addClass('active');
      $('html, body').animate({
        scrollTop: $('.describe-user__block').offset().top - 70
      });
    } else {
      $('.type-describe__item').removeClass('active');
      $('[data-describ="'+ block +'"]').addClass('active');
      $('.type-basic').removeClass('active');
      $(block).show();
      $(block).addClass('active');
      $('[data-describ]').text('Xem giải pháp dành cho bạn');
      $(this).text('Xem giải pháp dành cho bạn dưới đây');
    }
    $('.describe-user__block__method').hide();
    $(content).show();
  });
  $(window).resize(function() {
    if (width !== $(window).width() && $(window).width() > 992) {
      $('.type-basic').show();
      width = $(window).width();
    }
  });

  $('[data-create-button]').on('click', function() {
    var block = $(this).attr('data-create-button');
    $('html, body').animate({
      scrollTop: $(block).offset().top - 50
    }, 300);
  });

  $(window).on('scroll', function() {
    var block = $('.describe-user__block');
    if ($(window).scrollTop() > block.offset().top && $(window).scrollTop() < (block.offset().top + block.height()-200)) {

      $('.type-describe').addClass('fix-type');
    } else {
      $('.type-describe').removeClass('fix-type');
    }
  });

  $(window).resize(function() {
  	if (width !== $(window).width()) { 
      if ($(window).width() > 992) {
    		$('.type-basic').show();
        var block = $('.type-basic');
        block.each(function() {
          if ($(this).hasClass('active')) {
            $(this).find('a.btn-link').text('Xem giải pháp dành cho bạn dưới đây');
          } else {
            $(this).find('a.btn-link').text('Xem giải pháp dành cho bạn');
          }
        });
        // setTimeout(function() {
        // }, 500);
      }
      width = $(window).width();
    }
  });

  $('[data-regist-popup]').on('click', function(e) {
    e.preventDefault();
  	$('[data-dismiss]').trigger('click');
  	var block = $(this).attr('data-regist-popup');
    $('html, body').animate({
      scrollTop: $(block).offset().top - 50
    }, 300);
  });

})(jQuery);

// footer menu
;(function($){
  $('[data-scroll-top]').on('click', function(e) {
  	e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
})(jQuery);

// footer menu
;(function($){
  $('[data-form]').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    var typeForm = $(this).attr('data-type-form');
    $('.banner__login').hide();
    $('['+ typeForm +']').slideDown(800);
  });
})(jQuery);


;(function($){
  var win = $(window),
      checkSubMenu = false,
      checkSubMenuUser = true;
  win.scroll(function(){
  	if ($(this).scrollTop() >= 10){
      if (win.width() > 992) {
    	 $('header').css('background-color', '#294171');  
      }
  	}
  	else{
      if (win.width() > 992) {
        $('header').css('background-color', '');  
      }
  	}
 	});


  win.resize(function() {
    if (win.width() > 992) {
      $('[data-sub-menu]').show();
    } else {
      $('[data-sub-menu]').hide();
      $('[data-submenu-close]').show();
      $('[data-submenu-open]').hide();
      $($('[data-sub-menu-user]')[0]).show();
      checkSubMenuUser = true;
      checkSubMenu = false;
    }
  });

  $('[data-btn-submenu]').on('click', function() {
    if (checkSubMenu) {
      $('[data-submenu-close]').show();
      $('[data-submenu-open]').hide();
      $('[data-sub-menu]').slideUp(300);
      checkSubMenu = false;
    } else {
      $('[data-submenu-close]').hide();
      $('[data-submenu-open]').show();
      $('[data-sub-menu]').slideDown(300);
      checkSubMenu = true;
    }
  });
//    transform: rotate(180deg);
  $('[data-btn-submenu-user]').on('click', function() {
    var parent = $(this).parent();
    if (checkSubMenuUser) {
      parent.find('[data-sub-menu-user]').slideUp(300);
      $(this).find('.icon-show').css('transform', '');
      checkSubMenuUser = false;
    } else {
      parent.find('[data-sub-menu-user]').slideDown(300);
      $(this).find('.icon-show').css('transform', 'rotate(180deg)');
      checkSubMenuUser = true;
    }
  });

  $('body').on('click', function(e){
    if (win.width()< 992) {
      if((!$('[data-btn-submenu]').is(e.target) && $('[data-btn-submenu]').has(e.target).length === 0) && (!$('[data-sub-menu]').is(e.target) && $('[data-sub-menu]').has(e.target).length === 0)) {
        $('[data-submenu-close]').show();
        $('[data-submenu-open]').hide();
        $('[data-sub-menu]').slideUp(300);
        checkSubMenu = false;
      }
    } else {
      if((!$('[data-btn-submenu-user]').is(e.target) && $('[data-btn-submenu-user]').has(e.target).length === 0) && (!$('[data-sub-menu-user]').is(e.target) && $('[data-sub-menu-user]').has(e.target).length === 0)) {
        $('[data-sub-menu-user]').slideUp(300);
        $(this).find('.icon-show').css('transform', '');
        checkSubMenuUser = false;
      }
    }

  });

})(jQuery);
// footer menu
;(function($){
  $('[data-next-page]').on('click', function() {
    var component = $(this).attr('data-target-page');
    $('html, body').animate({
      scrollTop: $(component).offset().top - 75
    }, 300);
  });
})(jQuery);

;(function($) {
	var cs = $('.mycanvas');
	cs.each(function(index){
		var ctx = cs[index].getContext('2d');
		ctx.setLineDash([20, 5]);
		ctx.moveTo(0,0);
		ctx.lineTo(300,150);
		ctx.lineWidth = 2;
		ctx.strokeStyle = '#ff0000';
		ctx.stroke();
	});
})(jQuery);
;(function($) {
	var cs = $('.mycanvas_p');
	cs.each(function(index){
		var ctx = cs[index].getContext('2d');
		ctx.setLineDash([20, 5]);
		ctx.moveTo(0,150);
		ctx.lineTo(300,0);
		ctx.lineWidth = 2;
		ctx.strokeStyle = '#ff0000';
		ctx.stroke();
	});
})(jQuery);
// footer menu
;(function($){
  $('[data-service-block]').find('a').on('click', function() {
    $('[data-service-block]').find('a').removeClass('active');
    $(this).addClass('active');
    var target = $(this).attr('data-type-service');
    $('[data-service]').hide();
    $('[data-service=' + target + ']').show();
  });
})(jQuery);

// ;(function($){
//   var width = $(window).width();
//   $('[data-describ]').on('click', function() {
//     var block = $(this).attr('data-describ');
//     $('[data-describ]').removeClass('active');
//     $('[data-describ]').css('background','url(../images/icon-comment2.png)');
//     $('[data-describ]').css('background-size','100% 100%');
//     $(this).addClass('active');
//     $(this).css('background','url(../images/icon-comment1.png)');
//     $(this).css('background-size','100% 100%');
//     $('.type--user').hide();
//     $(block).show();
//   });
//   $(window).resize(function() {
//     if (width !== $(window).width() && $(window).width() > 992) {
//       // $('.type--user').show();
//       width = $(window).width();
//     }
//   });
// })(jQuery);
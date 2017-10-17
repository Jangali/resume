function animate (elem) {
          var effect = elem.data("effect");
          elem.addClass("animated " + effect).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            elem.removeClass("animated " + effect);
          });

        }
          $(document) .ready(function() {
            $(".aaa").mouseenter (function() {
              animate ($(this));
            });

          }); //animation

$(document).ready(

  function() { 

    $("body").niceScroll({cursorcolor: '#33c1e3', mousescrollstep: '60'});
    $(".user-aboutme-text").niceScroll({cursorcolor: '#33c1e3', 
    cursoropacitymin: '1', cursoropacitymax: '0', cursorwidth: '10px'});


  }

);
 //scroll



 $(document).ready(function() {
    $('#overlay').css({opacity: 0.5}); // Делаем затемняющий фон кроссбраузерным
    positionCenter($('#popup')); // Позиционируем всплывающее окно по центру
	
    $('#show_popup').click(function() { // При клике по ссылке, показываем всплывающее окно
        $('#popup, #overlay').fadeIn(300);
    });
	
    $('#close_popup').click(function() { // Скрываем всплывающее окно при клике по кнопке закрыть
		$('#popup, #overlay').fadeOut(300);
    });
	
    function positionCenter(elem) { // Функция, которая позиционирует всплывающее окно по центру
        elem.css({
            marginTop: '-' + elem.height() / 2 + 'px',
			marginLeft: '-' + elem.width() / 2 + 'px'
        });
    }
}); //popup
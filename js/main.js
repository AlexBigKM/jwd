$(function(){
    $('.burger-btn').on('click', function(e) {
        e.preventDefault();
        $('.header__nav-burger').toggleClass('burger__active');
      })
  
});
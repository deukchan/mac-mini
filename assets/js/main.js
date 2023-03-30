$(function(){




  /**
   * @메뉴호버하면나오는서브메뉴
   */
  $('.nav-item.store').hover(function() {
    $('.sublist').css('visibility', 'visible')
  },function() {
    $('.sublist').css('visibility', 'hidden')
    
  })

  /**
   * @모바일햄버거메뉴
   */
  $('.btn-close').click(function(e){
    e.preventDefault();
    $('.menu-list').css("visibility", "hidden");
    $('.menu-list').css("opacity", '0');
  })
  $('.nav-item.menu').click(function(e){
    e.preventDefault();
    $('.menu-list').css("visibility", 'visible');
    $('.menu-list').css("opacity", '1');
  })


  /**
   * @lnb안에있는util버튼누르면나오는메뉴
   */
  $('.btn-util').click(function(e){
    e.preventDefault();
    if ($('.lnb-item .sub-item').hasClass('active')) {
      $('.lnb-item .sub-item').removeClass('active');
      $('.btn-util').css('transform', 'rotateX(360deg)');
    }else{
      $('.lnb-item .sub-item').addClass('active');
      $('.btn-util').css('transform', 'rotateX(180deg)');
    }
  })

  /**
   * @versatility
   */
  $('.sc-versatility .tab.productivity').click(function(e){
    e.preventDefault();
    $('.img-wrap.productivity').css("display", "block");
    $('.img-wrap.video').css("display", "none");
  })

  $('.sc-versatility .tab.video').click(function(e){
    e.preventDefault();
    $('.img-wrap.productivity').css("display", "none");
    $('.img-wrap.video').css("display", "block");
  })



  /**
   * @connection
   */
  $('.sc-connection .m2').click(function(e){
    e.preventDefault();
    $('.img-wrap.m2p').css("display", "block");
    $('.img-wrap.m2').css("display", "none");
  })

  $('.sc-connection .m2p').click(function(e){
    e.preventDefault();
    $('.img-wrap.m2p').css("display", "none");
    $('.img-wrap.m2').css("display", "block");
  })



  /**
   * @footer
   */

  $('.footer .link-title').click(function() {
    if ($(this).hasClass('second')) {
      $(this).siblings('ul:eq(1)').toggle();
    }else{
      $(this).siblings('ul:eq(0)').toggle();
    }

    
  })

})
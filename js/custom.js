 $(function(){
  /* Include html Files */
  $('.gnb-include').load('../include/gnb.html')
  $('.main-header-include').load('../include/main-header.html')
  $('.product-detail-header-include').load('../include/product-detail-header.html')

  /* Resister Check All */
  $('.agree-chk-all').click(function(){
    $('.agree-chk').prop('checked', this.checked)
  })

  /* Main Navigation */
  $('.category-navigation a').eq(0).addClass('active')
  $('.category-navigation a').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
  })

  /* Main Slider */
  $('.main-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });
  
  /* Goods Suggestion Items Slider  */
  $('.goods-suggestion-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: false,
    arrows: false
  })

  /* Wish Toggle Button */
  $('.wish').click(function(){
    $(this).toggleClass('active')
  })

  /* Product Detail Slider */
  $('.product-detail-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  })

  /* Product Detail Accordion */
  $('.product-detail-accordion .title').click(function(){
    $(this).toggleClass('active')
    $(this).next().slideToggle(250)
  })

  /* Product Detail Order & Fold Button */
  $('.btn-order-choice').click(function(){
    $('.product-detail-order-choice').slideUp(200)
    $('.product-detail-order-final').slideDown(200)
  })
  $('.btn-fold').click(function(){
    $('.product-detail-order-choice').slideDown(200)
    $('.product-detail-order-final').slideUp(200)
  })

  /* Category html */
  $('.category-accordion .title').click(function(){
    $(this).next().stop().slideDown()
  })

  /* Search html Clear Buttons */
  $('.search-recent .btn-all-clear').click(function(){
    $('.search-recent .item').hide()
  })
  $('.search-recent .btn-clear').click(function(){
    $(this).parent().hide()
  })

  /* Cart Item Empty */
  $('.cart-content .btn-clear').click(function(){
    $(this).parent().parent().remove()
    if($('.cart-item').length == 0) {
      $('.cart-item-empty').show()
      $('.cart-items-check-all, .cart-price, .btn-cart-order').hide()
    }
  })
  $('.cart-content .btn-all-clear').click(function(){
    $('.cart-item').remove()
    if($('.cart-item').length == 0) {
      $('.cart-item-empty').show()
      $('.cart-items-check-all, .cart-price, .btn-cart-order').hide()
    }
  })

  /* Cart Check All */
  $('.cart-chk-all').click(function(){
    $('.cart-chk').prop('checked', this.checked)
  })
 })
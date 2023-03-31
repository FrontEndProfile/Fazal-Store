function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}


const d = new Date();
let copyrightYear = d.getFullYear();

function addLoginCartNote(){
  var loginCartNote = "<div class='login-note'>Please note this login is for Nizuc Resort & Spa gifting platform only.<div>";
  var elemHeading = $('.custom-container.cart-container .cart-login-cont .login-cart-panel')[0];
  elemHeading.insertAdjacentHTML('afterbegin', loginCartNote);
}
function addLoginCartDesc(){
  var loginCartNote = "<div class='login-note'>If you do not have an account please use guest checkout. You will be given the option to save account information later in the checkout process<div>";
  var elemHeading = $('.custom-container.cart-container .cart-login-cont .login-cart-panel')[0];
  elemHeading.insertAdjacentHTML('afterbegin', loginCartNote);
}
function addGuestCheckoutNote(){
  var checkoutNote = "<div class='checkout-note text-center w-100'>You can create account after checkout<div>";
  var elemGuestFormCont = $('.custom-container.cart-container .cart-login-cont .guest-form-cont')[0];
  elemGuestFormCont.insertAdjacentHTML('beforeend', checkoutNote);
}
function addcopyrightText(){
  var copyrightHtml = '<div class="container-fluid"><div class="row"><div class="col-12 d-flex checkout-copyright-cont"><div class="col-6 ts-copyright"><span><a href="https://techsembly.com/" target="_blank">Techsembly</a>&copy;</span><span class="ml-1">'+copyrightYear+'</span></div><div class="col-6 tc-rights-reserved text-right pr-0"></div></div></div></div>'
  var elem = $(".checkout-footer")[0]
  elem.insertAdjacentHTML('afterend', copyrightHtml)
}
function addcompleteText(){
  var addcompleteText = '<div class="card-footer-right"><span>&copy; '+copyrightYear+' Nizuc Resort & Spa</span></div>'
  var textComplete = $(".checkout-container.complete .card-footer.blue-light-bg .col-12")[0]
  textComplete.insertAdjacentHTML('beforeend', addcompleteText)
}
(function() {
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
    var newStyle = document.createElement('style');
    document.head.appendChild(newStyle);
    var newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode("\
      @font-face {\
        font-family: 'Fedra';\
        src: url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedrasansstd_demi-webfont.eot');\
        src: url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedrasansstd_demi-webfont.eot?#iefix') format('embedded-opentype'), \
             url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedrasansstd_demi-webfont.ttf') format('truetype'),\
             url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedrasansstd_demi-webfont.woff') format('woff'),\
             url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedrasansstd_demi-webfont.woff2') format('woff2');\
             font-weight: 400;\
      }\
      @font-face {\
        font-family: 'Fedra';\
        src: url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedra_sans_std_medium-webfont.eot');\
        src: url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedra_sans_std_medium-webfont.eot?#iefix') format('embedded-opentype'), \
            url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedra_sans_std_medium-webfont.ttf') format('truetype'),\
            url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedra_sans_std_medium-webfont.woff') format('woff'),\
            url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedra_sans_std_medium-webfont.woff2') format('woff2');\
             font-weight: 500;\
      }\
      @font-face {\
        font-family: 'Fedra';\
        src: url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedrasansstd_bold-webfont.eot');\
        src: url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedrasansstd_bold-webfont.eot?#iefix') format('embedded-opentype'), \
             url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedrasansstd_bold-webfont.ttf') format('truetype'),\
             url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedrasansstd_bold-webfont.woff') format('woff'),\
             url('https://bitbucket.org/RKTechsembly/frontendtechsembly/raw/69b4271c0f0812c4ffc543df060593ec254c62cc/Nizuc/Fonts/fedrasansstd_bold-webfont.woff2') format('woff2');\
             font-weight: 700;\
      }\
      "));

    document.head.appendChild(newStyle);

    // Poll for jQuery to come into existence
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };
    checkReady(function($) {
      // append fonts
      // Params
    $('head').prepend('<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js"></script>');
    // $('head').prepend('<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">');
    // $('head').prepend('<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>');
    // $('head').prepend('<script>\
    // AOS.init();\
    // </script>');



      
      $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0');
      $(function() {
        waitForElm('app-footer-checkout').then((elm) => {
          addcopyrightText()
        }).catch((error) => {});
        // waitForElm('.cart-right-cont').then((elm) => {
        //   addLoginCartDesc();
        // }).catch((error) => {});
        waitForElm('.cart-right-cont').then((elm) => {
          addLoginCartNote();
          addGuestCheckoutNote();
        }).catch((error) => {});

        waitForElm('.checkout-container.complete').then((elm) => {
          addcompleteText();
        }).catch((error) => {});


        $(window).on('load', function(){
          setTimeout(function () {
            var attr = $('body').attr('data-pagetype');
            
            // For some browsers, `attr` is undefined; for others,
            // `attr` is false.  Check for both.
            if (typeof attr !== 'undefined' && attr !== false) {
              //console.log(attr);
            }
            if(attr === 'product' && $('header .head-links li .cart-qty').length){
              $(document).scrollTop( $(".cart-bag").offset().top );
              console.log('items added to cart');
            }
            // ADD CUSTOM JS 
            // start slider 
            var sliderSelector = '.swiper-container',
            options = {
              init: false,
              loop: true,
              speed:800,
              slidesPerView: 2, // or 'auto'
              // spaceBetween: 10,
              centeredSlides : true,
              effect: 'coverflow', // 'cube', 'fade', 'coverflow',
              coverflowEffect: {
                rotate: 50, // Slide rotate in degrees
                stretch: 0, // Stretch space between slides (in px)
                depth: 100, // Depth offset in px (slides translate in Z axis)
                modifier: 1, // Effect multipler
                slideShadows : true, // Enables slides shadows
              },
              grabCursor: true,
              parallax: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              breakpoints: {
                1023: {
                  slidesPerView: 1,
                  spaceBetween: 0
                }
              },
              // Events
              on: {
                imagesReady: function(){
                  this.el.classList.remove('loading');
                }
              }
            };
            var mySwiper = new Swiper(sliderSelector, options);
            // Initialize slider
            mySwiper.init();
            // slider end 
            const cards = document.querySelectorAll('.card')
            // ADD FOREACH 
            cards.forEach(card => {
              card.addEventListener('click',()=>{
                removeActiveClasses() // REMOVE FIRST ACTIVE CLASS
                card.classList.add('active') //THEN ADD NEW CLASS ACTIVE CLICK EVENT
              })
            });
            // REMOVE CLASS FUNCATION
            function removeActiveClasses() {
              cards.forEach(card => {
                card.classList.remove('active') //REMOVE CLASS ACTIVE
              });
            }
            // ADD TIMER JS 

            var minutes = $( '#set-time' ).val();

            var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
            var time_limit = ((minutes * 60 ) * 1000);
            //set actual timer
            setTimeout(
              function() 
              {
                document.getElementById("left").innerHTML = "Timer Stopped";
              }, time_limit );

            var days, hours, minutes, seconds; // variables for time units

            var countdown = document.getElementById("tiles"); // get tag element

            getCountdown();

            setInterval(function () { getCountdown(); }, 1000);

            function getCountdown(){
              // find the amount of "seconds" between now and target
              var current_date = new Date().getTime();
              var seconds_left = (target_date - current_date) / 1000;
              
              if ( seconds_left >= 0 ) {
                console.log(time_limit);
                if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
                  $( '#tiles' ).removeClass('color-full');
                  $( '#tiles' ).addClass('color-half');

                  } 
                  if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
                    $( '#tiles' ).removeClass('color-half');
                    $( '#tiles' ).addClass('color-empty');
                  }
                days = pad( parseInt(seconds_left / 86400) );
                seconds_left = seconds_left % 86400;
                hours = pad( parseInt(seconds_left / 3600) );
                seconds_left = seconds_left % 3600;
                minutes = pad( parseInt(seconds_left / 60) );
                seconds = pad( parseInt( seconds_left % 60 ) );
                // format countdown string + set tag value
                countdown.innerHTML = "<span class='text hours'>" + hours + "</span><span class='text minute' >" + minutes + "</span><span class='text second'>" + seconds + "</span>"; 
              }
                
            }

            function pad(n) {
              return (n < 10 ? '0' : '') + n;
            }

            // END TIMER


          }, 2000);
        });
        setTimeout(function () {
          $('.products-container .products-holder-main .products-holder').append('<i aria-hidden="true"></i><i aria-hidden="true"></i>');
          $('.wishlist-container .products-container .products-holder').append('<i aria-hidden="true"></i><i aria-hidden="true"></i>');
          $('body .TimerLayout').prepend('<input type="hidden" id="set-time" value="90"/>');
          // TimerLayout
          $('.home-banner ~ .home-banner ').append($('.container.home-intro-container .TimerLayout'));
          $('.home-banner ~ .home-banner ').addClass('TimeBanner');
        }, 2000);

        var timesRun = 0;
        var interval = setInterval(function(){
            if($('.payment-form-container').length){
              timesRun += 1;
              if(timesRun === 2){
                  clearInterval(interval);
              }
              $(window).scrollTop(0);
              console.log('scrolled');
            }
            
        }, 2000);

        setInterval(function() {
          
          $('header.header .shipping li:nth-child(1):contains("Ship To")').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).html('Ship to');
            }
          });
          $(".header .menu-links-cont .search-item-form .btn-search img:not(.altered)").addClass('altered').attr("src","https://static.techsembly.com/1fYckXo65rAeF4P8kSTFacgu");
          $('header .mob-top-links li a img[alt="search image"]:not(.altered)').addClass('altered').attr('src', 'https://static.techsembly.com/2sjUngpULio4D5smqxiGbF3f');
          $('header .mob-top-links li a img[alt="cart"]:not(.altered)').addClass('altered').attr('src', 'https://static.techsembly.com/V7onrfjApG6QeXUWkfPUa4er');
          $('.custom-container.login-signup').each(function () {
            if (!$(this).closest('body').attr('data-pagetype', 'login-signup')) {
              $(this).closest('body').attr('data-pagetype', 'login-signup');
            }
          });
          $('.container.user-container').each(function () {
            if (!$(this).closest('body').attr('data-pagetype', 'user-login-modified')) {
              $(this).closest('body').attr('data-pagetype', 'user-login-modified');
            }
          });
          $('.container.wishlist-container').each(function () {
            if (!$(this).closest('body').attr('data-pagetype', 'wishlist')) {
              $(this).closest('body').attr('data-pagetype', 'wishlist');
            }
          });
          $('header.header .menu-holder>li>div').each(function(){
            if(!$(this).children().length){
              $(this).addClass('empty');
            }
          });
          // $('section.home-banner').attr('data-aos', 'fade-right');

          currentUrlSecondPart = window.location.pathname.split('/')[1];

          if (currentUrlSecondPart == 'catalogsearch'){
             if (!$('body').attr('data-pagetype','search_results')){
                 $('body').attr('data-pagetype','search_results');
             }
          }
          if (currentUrlSecondPart == 'vendor'){
             if (!$('body').attr('data-pagetype','vendors')){
                 $('body').attr('data-pagetype','vendors');
             }
          }

          $('.product-detail-container .product-detail').closest('.col-lg-5:not(.modified)').addClass('product-inner modified');
          $('.product-detail-container .product-carousel').closest('.col-lg-7:not(.modified)').addClass('product-carousel-cont modified');
          $('.product-detail-container .personalise-form .form-group .order-btn').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).html('add to cart');
            }
          });
          $('app-product-detail app-related-products[title="More items from"]').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).find('h3').html('More Like This');
            }
          });
          $('.custom-container.cart-container .vendor-items-cont a img[alt="edit"]:not(.modified)').addClass('modified').attr('src','https://static.techsembly.com/Jo7hVCvmLVQZYu6DZq69WJP4');
          // $('.custom-container.cart-container .vendor-items-cont a img[alt="gift"]:not(.modified)').addClass('modified').attr('src','https://static.techsembly.com/vg23BokHkdx4WrwPDtVBsAGu');
          $('.delivery-methods-cont .card .card-body .text-right a img[alt="edit"]:not(.edit-img)').addClass('edit-img').attr('src', 'https://static.techsembly.com/Jo7hVCvmLVQZYu6DZq69WJP4');
          $('.custom-container.checkout a img[alt="edit"]:not(.edit-img)').addClass('edit-img').attr('src', 'https://static.techsembly.com/Jo7hVCvmLVQZYu6DZq69WJP4');
          $('.custom-container.cart-container').each(function(){
            if (!$(this).closest('body').attr('data-pagetype','cart')){
              $(this).closest('body').attr('data-pagetype','cart');
            }
          });
          $('.custom-container.cart-container .cart-item.new .pro-badges-cont .pro-badge span:contains("GiveX Product")').each(function(){
            if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('Digital Product');
            }
          });
          $('.custom-container.cart-container .card .cart-login-cont #guest-btn span:contains("Continue to Shipping")').each(function() {
            if(!$(this).hasClass('guest-login')){
              $(this).addClass('guest-login');
              $(this).html('Continue to Checkout');
            }
          });
          $('.checkout-container.complete .total-cont.section-cont .col-3:contains(" Total: ")').each(function(){
            if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('Total');
            }
          });

          $('.checkout-container.complete .section-cont.customer-note').each(function(){
            if(!$(this).hasClass('total-delivery')){
              $(this).addClass('total-delivery');
              var newTxt = 'Your order is being confirmed and we will be shipping it soon';
              $(".customer-note:contains('Your order is being confirmed and we will be shipping it soon')").html(function(_, html) {
                 return  html.replace(/(Your order is being confirmed and we will be shipping it soon)/g, '<div class="updated-string">'+newTxt+'</div>')
              });
            }
          });
          $('.cart-item.new .underline:contains("Add Gift Options")').each(function(){
            if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('Add Gift Message');
            }
          });
          $('.login-signup .custom-container .breadcrumb-heading:contains("Log In")').each(function() {
            if(!$(this).hasClass('log-modified')){
              $(this).addClass('log-modified');
              $(this).html('My Gift Cards');
            }
          });
          $('.custom-container.cart-container .btn.continue-btn-new').each(function(){
              if(!$(this).hasClass('modified')){
                  $(this).addClass('modified');
                  $(this).html('Return to shopping');
              }
          });
          $('.custom-container.checkout .order-totals-container .sub-total-holder .sub-total-item .sub-total-desc:contains("Tax Inclusive of prices")').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).html('Tax Inclusive of prices');
              }
          });
          $('.custom-container.checkout .order-totals-container .sub-total-holder .sub-total-item .sub-total-desc:contains("Promo Total:")').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).html('Promo Total');
              }
          });
          $('.custom-container.checkout .payment-form-container .checkbox-cont .checkbox-note:contains("Get exclusive updates via email")').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).closest('.col-12.px-0').addClass('exl-offer').removeClass('pt-4');
              }
          });
          $('.custom-container.checkout .payment-form-container .card.address-card .checkbox-cont .checkbox-note:contains("Same as delivery address")').each(function() {
            if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('Same as shipping address');
            }
          });

          // login page heading changes
          $('.custom-container.login-signup').each(function () {
            if (!$(this).hasClass('account-heading')) {
              $(this).addClass('account-heading')
              $(this).prepend('<h5 class="account-heading text-center">GIFT CARDS AND EXPERIENCES</h5>');
            }
          });
          $('.auth-user .container.user-container .breadcrumb').each(function () {
            if (!$(this).closest('.user-container').hasClass('account-heading')) {
              $(this).closest('.user-container').addClass('account-heading')
              $(this).closest('.user-container').prepend('<h5 class="account-heading text-center">GIFT CARDS AND EXPERIENCES</h5>');
            }
          });

          $('.custom-container.login-signup .login-signup-tabs-cont .left-panel .panel-heading').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).html('Existing Gift Card Account');
            }
          });
          $('.custom-container .login-signup-tabs-cont .right-panel form.signup-form .btn.submit').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).html('create gift card account');
            }
          });
          $('.custom-container.login-signup .login-signup-tabs-cont .right-panel .panel-heading').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).html('New Gift Card Account');
            }
          });
          $('.user-wrapper .container.user-container .user-heading:contains("My Orders")').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).html('My Gift Cards');
            }
          });
          $('.auth-user .user-wrapper .container.user-container .user-heading:contains("My Account")').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).html('My Gift Card Account');
            }
          });
          $('.custom-container.login-signup label:contains("Create a password*")').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).html('Create Password*');
            }
          });
          $('.custom-container .login-signup-tabs-cont form.login-form .forget-psw-link:contains("Forgot your password?")').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).html('Forgot Password?');
            }
          });

          $('.nav-ship-details .breadcrumb-heading:not(.modified)').addClass('modified').html('Shipping Details');
          $('.shipping-form-container .form-control#last-name').each(function(){
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).closest('.col-md-6').addClass('last-name-cont');
            }
          });
          $('.checkout.digital .shipping-form h1.breadcrumb-heading:contains("Shipping Details")').each(function() {
            if(!$(this).closest('.shipping-form').hasClass('shipp-details')){
              $(this).closest('.shipping-form').addClass('shipp-details');
              $(this).html('Billing Details');
            }
          });

          $('.custom-container.checkout .payment-form-container .section-heading:contains("Details")').each(function() {
            if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              $(this).html('Billing Details');
            }
          });
          $('.custom-container.checkout .payment-form-container .payments-methods-cont').each(function() {
            if(!$(this).hasClass('modified')){
                $(this).addClass('modified');
                $(this).append('<p class="payment-desc">We accept Visa, Mastercard and American Express.</p>');
            }
          });
          $('.footer .footer-widget .widget-title:contains("KEEP IN TOUCH")').each(function() {
            if(!$(this).closest('.footer-widget').hasClass('capitalize')){
              $(this).closest('.footer-widget').addClass('capitalize');
              $('.footer-widget.capitalize .widget-title').html("Keep In Touch");
            }
          });
          $('.mobile-footer .footer-widget .widget-content .social-links').each(function () {
            if (!$(this).closest('.widget-content').hasClass('title-added')) {
              $(this).closest('.widget-content').addClass('title-added')
              $(this).closest('.widget-content').prepend('<h5 class="widget-title">Keep In Touch</h5>')
            }
          });
          $('.footer .copyright-cont .pay-methods-avail ').each(function(){
              if(!$(this).hasClass('modified')){
                  $(this).addClass('modified');
                  $(this).find('.meth-link:not(.new)').addClass('d-none');
                  $(this).append('<div class="meth-link new"><img alt="amex" src="https://static.techsembly.com/kUKvmo4RsRJxLvZa1tcDZdW4" width="52"></div>'+
                  '<div class="meth-link new"><img alt="master-card" src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" width="52"></div>'+
                  '<div class="meth-link new"><img alt="visa" src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" width="52"></div>');
              }
          });
          $('.products-container .products-holder-main').removeClass('pt-lg-2');
          $('.products-container .products-holder-main .products-holder').removeClass('pt-5');
          $('.products-holder .product-column .product-content .d-flex').addClass('flex-row-reverse');
          $('.products-container .products-holder-main .products-holder .product-list .product-image').removeClass('mb-2');
          $('.footer .copyright-cont .powered-by').removeClass('col-lg-6 text-center align-items-center').addClass('col-lg-9 pr-0');
          $('.products-holder-main .products-holder .product-column .product-list a.wishlistImage img[alt="add-to-wishlist"]').attr('src','https://static.techsembly.com/NxU5PpwciB6YxU2PaAZXT2Mw');
          $('.products-holder-main .products-holder .product-column .product-list a.wishlistImage img[alt="added-to-wishlist"]').attr('src','https://static.techsembly.com/4ZLBwEmrV5mTtTJZFYjAuFJP');
          $('.product-detail-container .product-holder .product-detail .product-info .product-heading .product-rating a.wishlistImage img[alt="add-to-wishlist"]').attr('src','https://static.techsembly.com/NxU5PpwciB6YxU2PaAZXT2Mw');
          $('.product-detail-container .product-holder .product-detail .product-info .product-heading .product-rating a.wishlistImage img[alt="added-to-wishlist"]').attr('src','https://static.techsembly.com/4ZLBwEmrV5mTtTJZFYjAuFJP');
          $('.related-products .related-products-holder .product-content .product-rating .wishlistImage img[alt="add-to-wishlist"]').attr('src','https://static.techsembly.com/NxU5PpwciB6YxU2PaAZXT2Mw');
          $('.related-products .related-products-holder .product-content .product-rating .wishlistImage img[alt="added-to-wishlist"]').attr('src','https://static.techsembly.com/4ZLBwEmrV5mTtTJZFYjAuFJP');
          $('.wishlist-container .products-container .products-holder .product-column .product-list .product-content .product-rating .wishlistImage img[alt="add-to-wishlist"]').attr('src','https://static.techsembly.com/NxU5PpwciB6YxU2PaAZXT2Mw');
          $('.wishlist-container .products-container .products-holder .product-column .product-list .product-content .product-rating .wishlistImage img[alt="added-to-wishlist"]').attr('src','https://static.techsembly.com/4ZLBwEmrV5mTtTJZFYjAuFJP');
          $('.custom-container.cart-container .vendor-items-cont .cart-item.new .edit-item-new img[alt="edit"]').attr('src', 'https://static.techsembly.com/Jo7hVCvmLVQZYu6DZq69WJP4');
          $('.custom-container.checkout .delivery-methods-cont .card .card-body img[alt="edit"]').attr('src', 'https://static.techsembly.com/Jo7hVCvmLVQZYu6DZq69WJP4');
          $('.payment-form-container .form-group label[for="saveInfo"]').each(function(){
            if (!$(this).closest('.card').hasClass('save-info-card')) {
              $(this).closest('.card').addClass('save-info-card');
            }
          });
          $('.payment-form-container .input-cont.password').each(function(){
            if (!$(this).closest('.form-group').hasClass('password-cont')) {
              $(this).closest('.form-group').addClass('password-cont');
            }
          });
          //$('.checkout .password-note:not(.modified)').addClass('modified').html('Must be atleast 6 characters');

          $('.checkout .checkout-container.complete .card.order-confirm-wrapper').each(function(){
            if(!$(this).parent('.col-12').hasClass('order-confirm-outer')){
              $(this).parent('.col-12').addClass('order-confirm-outer');
            }
          });

          $('.custom-container.checkout .checkout-tabs-cont .vendor-items-holder .vendor-order-details .order-item .qty').each(function(){
            if(!$(this).hasClass('modified')){
              $(this).addClass('modified');
              var newTxt = 'Qty';
              $(".qty:contains('Qty:')").html(function(_, html) {
                 return  html.replace(/(Qty:)/g, '<span class="updated-qty-string mr-1">'+newTxt+'</span>');
              });
            }
          });

          $('.signup-form label:contains("The password must contain")').each(function(){
            if(!$(this).closest('.form-group').hasClass('password-note-cont')){
              $(this).closest('.form-group').addClass('password-note-cont d-none');
            }
          });

          $('.user-container .balance-form').closest('.user-container:not(.d-none)').addClass('d-none');

          $('.user-container .user-heading:contains("Check TS Gift Card Balance")').each(function(){
            if(!$(this).hasClass('gift-card-heading')){
              $(this).addClass('gift-card-heading');
              $(this).html('Check Gift Card Balance');
            }
          });
          $('.user-container .user-heading:contains("My TS Card Balance")').each(function(){
            if(!$(this).hasClass('gift-card-heading')){
              $(this).addClass('gift-card-heading');
              $(this).html('My Gift Card Balance');
            }
          });
          $('.ts-balance-form label[for="gift-card-no"]:not(.modified)').addClass('modified').html('Gift card number');
          $('.ts-balance-form input[name="gift-card-no"]:not(.modified)').addClass('modified').attr('placeholder','Enter gift card number');

          // footer links changes
          $('.footer a:contains("Contact & Help")').each(function () {
            var string_email = 'reservations@nizuc.com';
            var email_link = "mailto:" + string_email;
            if (!$(this).hasClass('email-link')) {
              $(this).addClass('email-link');
              $(this).attr('href', email_link);
            }
          });
          $('.footer a').each(function(){
            if(!$(this).hasClass('target-blank')){
              $(this).addClass('target-blank');
              $(this).attr('target', '_blank');
            }
          });
          $('.checkout-container.complete .card-footer .card-footer-left a').each(function(){
            if(!$(this).hasClass('customer-email')){
              $(this).addClass('customer-email');
              $(this).attr('href', 'mailto:reservations@nizuc.com');
            }
          });
          $('.footer a:contains("Privacy")').each(function(){
            if(!$(this).hasClass('privacy-link')){
              $(this).addClass('privacy-link');
              $(this).attr('target', '_blank');
            }
          });
          $('.footer a:contains("Terms")').each(function(){
            if(!$(this).hasClass('tnc-link')){
              $(this).addClass('tnc-link');
              $(this).attr('target', '_blank');
            }
          });
          $('.footer .mobile-footer .footer-widget').each(function(){
            if(!$(this).children().length){
              $(this).addClass('empty');
              $(this).closest('.list-group-holder').addClass('d-none');
            }
          });
          $('.social-links img[alt="instagram"]:not(.modified)').addClass('modified').attr('src', 'https://static.techsembly.com/2zYqFvZYgLnEH16e2mYaXa4g');
          $('.social-links img[alt="fb"]:not(.modified)').addClass('modified').attr('src', 'https://static.techsembly.com/hq9pXNgh16kHbnAGHM3hV26L');
          $('.social-links img[alt="linkedin"]:not(.modified)').addClass('modified').attr('src', 'https://static.techsembly.com/3V7QEv9TYwT8yPVkCPLgrvbc');
          $('.social-links img[alt="twitter"]:not(.modified)').addClass('modified').attr('src', 'https://static.techsembly.com/GwXHXhS4TcFb9UD5WtTcn5k5').css({"max-width": "1.688rem"});
          $('.social-links img[alt="pinterest"]:not(.modified)').addClass('modified').attr('src', 'https://static.techsembly.com/Q7vP5twoMrGw1Hpt93cYsHKX');
          $('.social-links img[alt="fb"]').closest('li:not(.fb-link-cont)').addClass('fb-link-cont');
          // $('.footer .footer-widget .social-links:not(.modified)').addClass('modified').append('<li><a href="https://www.youtube.com/@muuhotels" rel="nofollow"><img class="modified" alt="youtube" src="https://static.techsembly.com/AJvfEM3qD2HhJ5GzrD7UiPvo"></a></li>');
          $(".mat-form-field-label").each(function(){
            if($(this).attr('aria-owns')) {
              $(this).removeAttr('aria-owns');
            }
          });
          
        })
      })
    })
})();

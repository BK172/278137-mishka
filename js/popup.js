(function(){
  var popup = document.querySelector('.popup');
  var mainOrderBtn = document.querySelector('.btn--main-order');
  var basketBtn = document.querySelectorAll('.product-card__basket');
  var orderHandler = function (evt) {
    evt.preventDefault();
    popup.classList.toggle('hidden');
  };

  if (basketBtn) {
    basketBtn.forEach(function (item) {
      item.addEventListener('click', orderHandler);
    });
  }

  if (mainOrderBtn) {
    mainOrderBtn.addEventListener('click', orderHandler);
  }

  var navToggler = document.querySelector('.main-nav__toggle');
  var elements = document.querySelectorAll('.main-nav__mobile-item');
  var mainNavHandler = function() {
    var menuState = elements[0].classList.contains('main-nav--closed');

    if (menuState) {
      [].forEach.call(elements, function (item) {
        item.classList.remove('main-nav--closed');
      });
      navToggler.classList.add('main-nav__toggle--closed');
      navToggler.style.background = 'transparent url(../img/icon-menu-close.svg) no-repeat 0 0';
    } else {
      [].forEach.call(elements, function (item) {
        item.classList.add('main-nav--closed');
      });
      navToggler.classList.remove('main-nav__toggle--closed');
      navToggler.style.background = 'transparent url(../img/icon-menu-open.svg) no-repeat 0 0';
    }
  };

  [].forEach.call(elements, function (item) {
    item.classList.add('main-nav--closed');
  });
  navToggler.style.background = 'transparent url(../img/icon-menu-open.svg) no-repeat 0 0';

  navToggler.addEventListener('click', mainNavHandler);
}());

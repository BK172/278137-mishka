(function(){
  var popup = document.querySelector('.popup');
  var mainOrderBtn = document.querySelector('.btn--main-order');
  var basketBtns = document.querySelectorAll('.product-card__basket');

  var orderHandler = function (evt) {
    evt.preventDefault();

    popup.classList.remove('hidden');
    document.body.addEventListener('keydown', escPressHandler);
    document.body.addEventListener('click', documentClickHandler);
  };

  var escPressHandler = function (evt) {
    if (evt.keyCode === 27) {
      closeOrderDialog();
    }
  };

  var documentClickHandler = function (evt) {
    if (evt.target.classList.contains('popup')) {
      closeOrderDialog();
    }
  };

  function closeOrderDialog() {
    document.body.removeEventListener('keydown', escPressHandler);
    document.body.removeEventListener('click', documentClickHandler);
    popup.classList.add('hidden');
  }

  if (basketBtns) {
    for (var i = 0, len = basketBtns.length; i < len; i++) {
      basketBtns[i].addEventListener('click', orderHandler);
    }
  }

  if (mainOrderBtn) {
    mainOrderBtn.addEventListener('click', orderHandler);
  }

  var navToggler = document.querySelector('.main-nav__toggle');
  var mobileMenu = document.querySelector('.main-nav__list');

  var mainNavHandler = function() {
    var isMenuClosed = mobileMenu.classList.contains('main-nav__list--closed');

    if (isMenuClosed) {
      mobileMenu.classList.remove('main-nav__list--closed');
      navToggler.classList.add('main-nav__toggle--closed');
    } else {
      mobileMenu.classList.add('main-nav__list--closed');
      navToggler.classList.remove('main-nav__toggle--closed');
    }
  };

  mobileMenu.classList.add('main-nav__list--closed');
  navToggler.classList.remove('main-nav__toggle--closed');
  navToggler.addEventListener('click', mainNavHandler);

  var staticMap = document.querySelector('.main-map > picture');

  if (staticMap) {
    ymaps.ready(function () {
      staticMap.style.display = 'none';
      var myMap = new ymaps.Map('YMapsID', {
        center: [59.936354, 30.321670],
        zoom: 16
      });
      var myPlacemark = new ymaps.Placemark([59.936354, 30.321670], {}, {
        iconImageHref: '../img/icon-map-pin.svg',
        iconImageSize: [66, 101],
        iconImageOffset: [-39, -100],
        hintContent: 'Мишка!',
            balloonContent: 'г. Санкт-Петербург,<br />' +
          ' ул. Большая Конюшенная,<br />' +
          'д.19/8, офис 101'
      });
      myMap.behaviors.disable('scrollZoom');
      myMap.geoObjects.add(myPlacemark);
    });
  }
}());

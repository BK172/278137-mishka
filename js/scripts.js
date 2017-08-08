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
    } else {
      [].forEach.call(elements, function (item) {
        item.classList.add('main-nav--closed');
      });
      navToggler.classList.remove('main-nav__toggle--closed');
    }
  };

  [].forEach.call(elements, function (item) {
    item.classList.add('main-nav--closed');
  });

  navToggler.addEventListener('click', mainNavHandler);

  var staticMap = document.querySelector(".main-map > picture");

  ymaps.ready(function () {
    staticMap.style.display = "none";
    var myMap = new ymaps.Map("YMapsID", {
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
    myMap.behaviors.disable("scrollZoom");
    myMap.geoObjects.add(myPlacemark);
  });
}());

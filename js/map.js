(function(){
  var myMap;
  var myPlacemark;
  var staticMap = document.querySelector(".main-map__img");
  
  ymaps.ready(function () {
    staticMap.style.display = "none";
    myMap = new ymaps.Map("YMapsID", {
      center: [59.936354, 30.321670],
      zoom: 16
    });
    myPlacemark = new ymaps.Placemark([59.936354, 30.321670], {}, {
      iconImageHref: './img/icon-map-pin.svg',
      iconImageSize: [66, 101],
      iconImageOffset: [-39, -100],
      hintContent: 'Мишка!',
          balloonContent: 'г. Санкт-Петербург,<br />' +
        ' ул. Большая Конюшенная,<br />' +
        'д.19/8, офис 101'
    });
    myMap.geoObjects.add(myPlacemark);
  });
}());

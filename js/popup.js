(function(){
  var popup = document.querySelector('.popup');
  var mainOrderBtn = document.querySelector('.btn--main-order');
  var basketBtn = document.querySelectorAll('.product-card__basket');
  var orderHandler = function (evt) {
    evt.preventDefault();
    popup.classList.toggle('hidden');
  };

  basketBtn.forEach(function (item) {
    item.addEventListener('click', orderHandler);
  });

  mainOrderBtn.addEventListener('click', orderHandler);
}());

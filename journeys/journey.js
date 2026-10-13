// Swaps each screenshot slot for the real image once shots/<file> exists next to the page.
document.querySelectorAll('.shot[data-shot]').forEach(function (fig) {
  var frame = fig.querySelector('.shot-frame');
  var label = fig.querySelector('.shot-label');
  var img = new Image();
  img.onload = function () {
    img.className = 'shot-img';
    img.alt = label ? label.textContent : '';
    frame.replaceWith(img);
  };
  img.src = 'shots/' + fig.dataset.shot;
});

var year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

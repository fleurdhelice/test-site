let page = document.querySelector('.page');
let photoColumn = document.querySelector('.column-right');

photoColumn.onclick = function() {
  page.classList.toggle('myphoto-replacement');
  page.classList.toggle('myphoto');
};

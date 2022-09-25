'use strict';

const icon = document.getElementsByTagName('i'),
  projecetImage = document.getElementsByClassName('project__img__item'),
  none = document.getElementsByClassName('none');

for (let y = 0; y < icon.length; y++)
  icon[y].addEventListener('click', function () {
    for (let i = 0; i < projecetImage.length; i++)
      projecetImage[i].classList.toggle('none');
  });

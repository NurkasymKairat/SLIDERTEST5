'use strict';

const prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      slide = document.querySelector('.slider_line'),
      dots = document.querySelectorAll('.dot');

let offset = 0;
let index = 0;

function nextContent() {
    offset += 500;
    index++;
    if (offset > (dots.length - 1) * 500) {
        offset = 0;
        index = 0;
    }
    slide.style.left = -offset + 'px';
    ClassDots(index);
}

function prevContent() {
    offset -= 500;
    index--;
    if (offset < 0) {
        offset = (dots.length - 1) * 500;
        index = (dots.length - 1); 
    }
    slide.style.left = -offset + 'px';
    ClassDots(index);
}

prev.addEventListener('click', prevContent);
next.addEventListener('click', nextContent);


function ClassDots(i) {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[i].classList.add('active');
}


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        offset = 500 * index;
        slide.style.left = -offset + 'px';
        index = index;
        ClassDots(index);
    });
});

setInterval( () => {
    nextContent();
}, 3000);

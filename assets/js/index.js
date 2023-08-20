
// Responsive navbar
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('.nav');

menuToggle.onclick = function() {
    header.classList.toggle('active');
}


// Slider 
const listEl = document.querySelector('#listID');
const gap = parseInt(getComputedStyle(listEl).gap);
const width = listEl.querySelector('.slider').offsetWidth;
document.getElementById('nextID').onclick = function(){
    document.getElementById('formlistID').scrollLeft += (width + gap)*3;
}
document.getElementById('prevID').onclick = function(){
    document.getElementById('formlistID').scrollLeft -= (width + gap)*3;
}


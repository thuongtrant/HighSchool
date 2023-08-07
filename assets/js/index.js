var ficon = document.getElementById("ficon");

function show()
{
    ficon.style.right = "0";
}
function hidden()
{
    ficon.style.right = "-200px";
}
const listEl = document.querySelector('#listID');
const gap = parseInt(getComputedStyle(listEl).gap);
const width = listEl.querySelector('.slider').offsetWidth;
document.getElementById('nextID').onclick = function(){
    document.getElementById('formlistID').scrollLeft += (width + gap)*3;
}
document.getElementById('prevID').onclick = function(){
    document.getElementById('formlistID').scrollLeft -= (width + gap)*3;
}


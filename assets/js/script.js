var ficon = document.getElementById("ficon");
function show()
{
    ficon.style.right = "0";
}
function hidden()
{
    ficon.style.right = "-200px";
}

document.getElementById('nextID').onclick = function(){
    const widthSlider = document.querySelector('.slider').offsetWidth;
    document.getElementById('formlistID').scrollLeft += wifdthSlider;
}
document.getElementById('prevID').onclick = function(){
    const widthSlider = document.querySelector('.slider').offsetWidth;
    document.getElementById('formlistID').scrollLeft -= widthSlider;
}
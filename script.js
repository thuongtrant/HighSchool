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
    const widthItem = document.querySelector('.slider').offsetWidth;
    document.getElementById('formlistID').scrollLeft += widthItem;
}
document.getElementById('prevID').onclick = function(){
    const widthItem = document.querySelector('.slider').offsetWidth;
    document.getElementById('formlistID').scrollLeft -= widthItem;
}
$(document).ready(function(){
    autoShowBackTopButton();
    $(window).scroll(autoShowBackTopButton)
    $("#backtop").click(function(){
        $('html,body').animate({
            scrollTop : 0
        }, 800)
    })
})

function autoShowBackTopButton() {
    let header = document.querySelector('.nav');
    const headerTop = header.getBoundingClientRect().top;
    if (headerTop < 0) {
        $('#backtop').fadeIn();
    }
    else {
        $('#backtop').fadeOut();
    }
}

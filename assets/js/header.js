
var anchorTop = 0;
document.addEventListener('scroll', e => {
    var nextSection = document.querySelector('section.nav + section')
    var nav = document.querySelector('section.nav')
    var newAnchorTop = nextSection.getBoundingClientRect().top
    var isScrollDown = newAnchorTop < anchorTop
    if (isScrollDown) {
        nav.classList.add('hide')
    }
    else {
        nav.classList.remove('hide')
    }
    anchorTop = newAnchorTop
})
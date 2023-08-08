/**
 * Check element position whether display on sceen at given rate location
 * 
 * @param {jQuery} $element 
 * @param {number} rate element.top/window.innerHeight rate
 * @returns {boolean}
 */
function isLocatedAt($element , rate) {
    const elementTop = $element.get(0).getBoundingClientRect().top 
    const windowHeight = window.innerHeight
    return elementTop <= windowHeight*rate
}
 
/**
 * Set animation by class on located
 * 
 * @param {jQuery} $element 
 * @param {string} animationClass given animation css class in css file
 */
function setAnimation($element, animationClass) {
    $element.each((i, e) => {
        const isLocated = isLocatedAt($(e), 0.9)
        if (isLocated) {
            $(e).addClass(animationClass)
        } else {
            $(e).removeClass(animationClass)
        }
    })
   
}

function setAnimationCallback() {
    setAnimation($('.back-color'), 'back-color__slide-out')
    setAnimation($('.block-intro__1'), 'block-intro__slide-out')
}

$(window).on('scroll', setAnimationCallback)
$(window).on('load', setAnimationCallback)


const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const hamburger = document.querySelector('.hamburger')
const headline = document.querySelector('.headline')

const tl = new TimelineMax()

tl.fromTo(hero, 1.2, {
    height: '0%'
}, {
    height: '80%',
    ease: Power2.easeInOut
}).fromTo(hero, 1.3, {width: '70%'},  {width: '89%',ease: Power2.easeInOut})
.fromTo(slider, 1.5, {x:'100%'}, {x: '-30%',ease: Power2.easeInOut}, '-=1.3')
.fromTo(headline, 1.2, { y: '0%'}, { y:'-70%',ease: Power2.easeInOut}, '-=0.9')
.fromTo(logo, 1.2, {opacity: 0}, {opacity:1,ease: Power2.easeInOut}, '-=1')

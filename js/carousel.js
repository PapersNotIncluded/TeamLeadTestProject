const pivots = [...document.querySelectorAll('.carousel__pivots__item')]
const cards = [...document.querySelectorAll('.carousel__content__item')]
const carousel = document.querySelector('.carousel__wrapper')
const [arrowLeft, arrowRight] = [...document.querySelectorAll('.carousel__arrow')]

let carouselWidth = null;
let carouselScrollWidth = null;
let cardWidth = null;
let cardsGap = null;

function updateDimensions(){
    carouselWidth = carousel.getBoundingClientRect().width
    carouselScrollWidth = carousel.scrollWidth
    cardWidth = cards[0].getBoundingClientRect().width
    cardsGap = parseFloat(getComputedStyle(cards[0].parentElement).gap)
}

function scrollCarousel(delta){
    carousel.scrollTo({
        left: carousel.scrollLeft + (cardWidth + cardsGap) * delta,
        behavior: 'smooth',
    })
}

function handleCarouselScroll(){
    const carouselCurrentScroll = carousel.scrollLeft
    const scrollPercentage = carouselCurrentScroll / (carouselScrollWidth - carouselWidth)
    updateActivePivot(scrollPercentage)
    updateArrowsInteractivity(scrollPercentage)
}

function updateActivePivot(scrollPercentage){
    const activePivotId = Math.round(scrollPercentage * (cards.length - 1))
    pivots.forEach((pivot, i)=>{
        pivot.classList.remove('active')
        if(i === activePivotId){
            pivot.classList.add('active')
        }
    })
}

function updateArrowsInteractivity(scrollPercentage){
    arrowLeft.classList.remove('unactive')
    arrowRight.classList.remove('unactive')
    const percent = .01
    if(scrollPercentage <= percent){
        arrowLeft.classList.add('unactive')
    }
    if(scrollPercentage >= 1 - percent){
        arrowRight.classList.add('unactive')
    }
}

updateDimensions()
handleCarouselScroll()
carousel.onscroll = handleCarouselScroll
arrowLeft.onclick = ()=>{scrollCarousel(-1)}
arrowRight.onclick = ()=>{scrollCarousel(1)}
window.onresize = ()=>{updateDimensions()}
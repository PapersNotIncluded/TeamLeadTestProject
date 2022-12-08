;[...document.querySelectorAll('.carousel__content__item__stars')]
    .forEach((star) => {
        const rate = 3 + Math.random() * 2
        const ratePercent = rate / 5 * 100
        star.children[0].style.clipPath = `inset(0 ${100 - ratePercent}% 0 0)`
        star.children[1].style.clipPath = `inset(0 0 0 ${ratePercent}%)`
    })
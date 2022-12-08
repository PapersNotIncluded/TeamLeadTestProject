const orderButton = [...document.querySelectorAll('.order__button:not(.connection__form__container__button)')]
const orderForm = document.querySelector('.connection__title')

console.log(orderButton)

for (button of orderButton) {
    button.onclick = () => {
        orderForm.scrollIntoView({
            behavior: 'smooth',
        })
        // window.scrollTo({
        //     top: orderForm.getBoundingClientRect().top - 50,
        //     behavior: "smooth"
        // })
        // console.log(orderForm.getBoundingClientRect().top - 50)
    }
}
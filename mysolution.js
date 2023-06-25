const rating = document.getElementById('rating')
const thankYou = document.getElementById('thank-you')
const submit = document.getElementById('btn')
const inputRate = document.getElementById('number')
const rates = document.querySelectorAll('.points')

submit.addEventListener('click', result)

function result(){
    rating.style.display = 'none'
    thankYou.style.display = 'block'
}
rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        inputRate.innerHTML = rate.innerHTML
    })
})
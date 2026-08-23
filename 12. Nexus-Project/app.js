let cs = 0

let slides = document.querySelectorAll('.slide')
let indicators = document.querySelectorAll('.indicator')

let autoSlideInterval;

function showSlide(n){
    slides.forEach(s => s.classList.remove('active'))
    indicators.forEach(i => i.classList.remove('active'))

    // new location -> 0 , 1 , 2
    // 4
    // 4 + 3 % 3 => 1
    cs = (n + slides.length) % slides.length


    slides[cs].classList.add('active')
    indicators[cs].classList.add('active')
}

function nextSlide(){
    showSlide(cs + 1)
}
function prevSlide(){
    showSlide(cs - 1)
}


function autoSlide(){
    autoSlideInterval = setInterval(()=>{
        nextSlide()
    },3000)
}

autoSlide()


let sliderContainer = document.querySelector('.slider-container')

sliderContainer.addEventListener('mouseenter', ()=>{
    clearInterval(autoSlideInterval)
})
sliderContainer.addEventListener('mouseleave', ()=>{
    autoSlide()
})
// Script que implementa a animação de imagens ao dar scroll para baixo

const image_1 = document.getElementById('image-1')
const image_2 = document.getElementById('image-2')

const documentHeight = document.documentElement.scrollHeight
const windowHeight = window.innerHeight

window.addEventListener("scroll", (event) => {
    const scrollTop = window.scrollY
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100
  
    if (window.innerWidth >= 480) {
        if (scrollPercent <= 5) {
            image_1.style.right = '-200rem'
            image_2.style.left = '-120rem'
        }
        if (scrollPercent >= 22) {
            image_1.style.right = '0'
            image_2.style.left = '2rem'
        }
    }
})
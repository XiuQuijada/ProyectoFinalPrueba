let imagenes = document.querySelectorAll('.media--img')
let contenedor = document.querySelector('.media__container')
let contador = 0 


setInterval (() => {
    if (contador < imagenes.length -1) {
        contador++
        let aumenta = contador * -100
        contenedor.style.transform = `translateY(${aumenta}vh)`
        console.log(`translateY(${aumenta}vh)`)
    } else if (contador == imagenes.length -1) {
        index = 0
        let aumenta = contador * -100
        contenedor.style.transform = `translateY(${aumenta}vh)`
    }
}, 5000)

window.addEventListener('scroll', () => {
    imagenes.forEach((imagen) => {
        if (imagen.getBoundingClientRect().top < window.innerHeight -100 ){
            appear.style.opacity = '1'
        } else {
            appear.removeAttribute('style')
        }
    })
})

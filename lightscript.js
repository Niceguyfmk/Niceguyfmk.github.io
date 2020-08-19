const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images =  document.querySelectorAll('img')
/*For each image that we have we wanna run the following function*/
images.forEach(image=> { 
    image.addEventListener('click', e =>{
        lightbox.classList.add('active')
        /*Create image tag*/
        const img = document.createElement('img')
        /*Source image same as new image*/
        img.src = image.src
        while (lightbox.firstChild) {
          lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

/*so when we click somewhere else other than light box,
 it removes black section*/
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})


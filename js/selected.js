'use strict'

const as = document.querySelectorAll('.as_menu')

as.forEach((cadaAs, i)=>{
    as[i].addEventListener('click', ()=>{

        as.forEach((cadaAs, i)=>{
            as[i].classList.remove('selected')
        })

        as[i].classList.add('selected')

    })
})
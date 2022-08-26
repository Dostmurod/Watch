"use strict"


let watch = document.querySelector('#watch')
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let clear = document.querySelector('#clear')
let secont = 0;

start.addEventListener('click', () => {
let seconts =  setInterval(() => {
        secont++;
        watch.textContent = secont
    }, 1)
    stop.addEventListener('click', () => {
        clearInterval(seconts)
    })
})


clear.addEventListener('click' , () => {
    watch.textContent = '0'
})




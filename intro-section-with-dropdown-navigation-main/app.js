const header = document.getElementById('header')
const flechita = document.getElementById('flechita')
const menu = document.getElementById('menu')

header.addEventListener('click', ()=>{
flechita.classList.toggle('rotate')
menu.classList.toggle('visi')
})
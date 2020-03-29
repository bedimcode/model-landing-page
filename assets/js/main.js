// /*MENU SHOW Y HIDDEN*/ 

const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
    navMenu.classList.remove('hidden')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('hidden')
    navMenu.classList.remove('show')
})







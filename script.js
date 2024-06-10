/* mostrar menu */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose  = document.getElementById('nav-close'),
    navlink   = document.querySelectorAll('.nav__link');

//valida se existe a constante e abre menu
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('mostrar-menu');
    });
}
//valida se existe constante e fecha menu
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('mostrar-menu');
    })
}
//sair do menu quanto clicar
function linkAction(){
    navMenu.classList.remove('mostrar-menu');
}
navlink.forEach(e=>{e.addEventListener('click',linkAction)});

/* Habilidades */
const habilidadesContent = document.getElementsByClassName("habilidades__content"),
      habilidadesHeader =  document.querySelectorAll(".habilidades__header");

function toggleHabilidade(){
    let itemClass = this.parentNode.className;
    for( i = 0;i < habilidadesContent.length;i++ ){
        habilidadesContent[i].className = 'habilidades__content habilidades__fechado';
    }
    if(itemClass === 'habilidades__content habilidades__fechado'){
        this.parentNode.className = 'habilidades__content habilidades__aberto'
    }
}
habilidadesHeader.forEach((el) =>{
    el.addEventListener('click',toggleHabilidade);
})

/* Qualificacão */
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContent =>{
            tabContent.classList.remove("qualificacao__active")
        })
        target.classList.add('qualificacao__active');

        tabs.forEach(tab=>{
            tab.classList.remove('qualificacao__active')
        })
        tab.classList.add('qualificacao__active')
    })
})

//janela modal
const   modalViews = document.querySelectorAll('.servicos__modal'),
        modalBtns  = document.querySelectorAll('.servicos__button'),
        modalCloses= document.querySelectorAll('.servicos__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click',()=>{
        modal(i);
    })
})
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        })
    })
})

/* swiper portfolio*/
let swiperPortfolio = new Swiper('.portfolio__container',{
    cssMode: true,
    loop: true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
});

/* swiper testemunho */
let swiperTestemunho = new Swiper('.testemunho__container',{
    cssMode: true,
    grabCursor: true,
    spaceBetween:48,
    pagination:{
        el: '.swiper-pagination-testemunho',
        clickable: true,
        dynamicBullets: true
    },
    breakpoints:{
        568:{
            slidesPerView:2,
        }
    }
});

/* ativar o scroll para o todo */
const sections = document.querySelectorAll("section[id]");

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach( atual => {
        const sectionHeight = atual.offsetHeight;
        const sectionTop    = atual.offsetTop - 50;
        let sectionId = atual.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll',scrollActive);

/* mudar o background do header */
function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) nav.classList.add('show-scroll'); else nav.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollHeader);

/* mostrar scroll top*/
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollup.classList.add('show-scrollup'); else scrollup.classList.remove('show-scrollup');
}
window.addEventListener('scroll',scrollup);

// Dark light
const themeButton = document.getElementById('tema-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
})
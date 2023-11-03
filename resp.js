burger=document.querySelector('.burger');
head=document.querySelector('.head');
hNav=document.querySelector('.h-nav');
navlist=document.querySelector('.nav-list');
right=document.querySelector('.right');
bclass=document.querySelector('.b-class');
burger.addEventListener('click', ()=>{
    right.classList.toggle('v-class');
    hNav.classList.toggle('h-nav');
    bclass.classList.toggle('b-class');
})
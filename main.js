// window.addEventListener('DOMContentLoaded', (event) => {
 // const modal = document.getElementById('myModal');
 // const closeModal = document.getElementById('closeModal');

 // modal.style.display = 'block';

 // closeModal.addEventListener('click', () => {
 //     modal.style.display = 'none';
 // });

//});

//const videoTag = document.getElementById('video-bg');

//window.addEventListener('load', () => {
 //   setInterval(()=>{
 //       videoTag.muted = false;
 //   }, 3000)
//})

const hamburger = document.getElementById('nav');
const navigation = document.getElementById('navigation');
const chevron = document.getElementById('close-btn');


//change navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('.desktop-nav').classList.toggle('window-scroll', window.scrollY > 100);
})

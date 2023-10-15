window.addEventListener('DOMContentLoaded', (event) => {
  const modal = document.getElementById('myModal');
  const closeModal = document.getElementById('closeModal');

  modal.style.display = 'block';

  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });

});

const videoTag = document.getElementById('video-bg');

window.addEventListener('load', () => {
    setInterval(()=>{
        videoTag.muted = false;
    }, 3000)
})
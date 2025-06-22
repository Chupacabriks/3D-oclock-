const modal = () => {
  console.log('это модуль');
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const popupContent = modal.querySelector('.popup-content');
  const width = document.documentElement.clientWidth;
  console.log(width);


  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';

  popupContent.style.transform = 'scale(0.8)';
  popupContent.style.opacity = '0';
  popupContent.style.transition = 'transform 0.3s ease, opacity 0.3s ease';



  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (width >= 768) {
        modal.style.display = 'flex';
        requestAnimationFrame(() => {
          popupContent.style.transform = 'scale(1)';
          popupContent.style.opacity = '1';
        });
      } else {
        popupContent.style.transition = 'none';
        popupContent.style.transform = 'scale(1)';
        popupContent.style.opacity = '1';
        modal.style.display = 'flex';
      }
    });
  });


  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      if (width >= 768) {
        popupContent.style.transform = 'scale(0.5)';
        popupContent.style.opacity = '0';
        setTimeout(() => {
          modal.style.display = 'none';
        }, 500);
      } else {
        modal.style.display = 'none'
      }
    }
  })
};

export default modal
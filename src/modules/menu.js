const menu = () => {
  console.log('это модуль меню')
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');



  //функция зарытия меню 
  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };
  menuBtn.addEventListener('click', handleMenu);


  document.addEventListener('click', (e) => {
    const link = e.target.closest('menu a');
    const isOpen = menu.classList.contains('active-menu');
    const isCloseBtn = e.target.closest('.close-btn');

    if (link && isOpen) {
      e.preventDefault();
      const targetId = link.getAttribute('href'); //узнаем куда скроллить
      if (targetId && targetId !== '#') {
        const targetE = document.querySelector(targetId);
        if (targetE) {
          targetE.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
      handleMenu();
      return
    }
    if (isCloseBtn && isOpen) {
      handleMenu();
      return
    }
    if (isOpen &&
      !menu.contains(e.target) &&
      !menuBtn.contains(e.target)) {
      handleMenu();
    }
  })


};
export default menu
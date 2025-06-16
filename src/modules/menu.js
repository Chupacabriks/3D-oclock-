const menu = () => {
  console.log('это модуль меню')
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');

  const scrollBtn = document.querySelector('a[href="#service-block"]');

  //функция зарытия меню 
  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  const scroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href'); //узнаем куда скроллить
    if (targetId !== '#') {
      const targetE = document.querySelector(targetId);
      if (targetE) {
        targetE.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    if (e.currentTarget.closest('menu')) {
      handleMenu();
    }
  };

  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);
  scrollBtn.addEventListener('click', scroll)
  menuItems.forEach(menuItem => menuItem.addEventListener('click', scroll));
};
export default menu
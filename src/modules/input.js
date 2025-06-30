const input = () => {
  console.log('это инпут');

  const calcBlock = document.querySelector('.calc-block');
  const input = calcBlock.querySelectorAll('input[type="text"]');
  const inputsTextMes = document.querySelectorAll('input[type="text"]:not(.calc-block input[type="text"]), input[placeholder="Ваше сообщение"]');
  const inputEmail = document.querySelectorAll('input[type="email"]');
  const inputTel = document.querySelectorAll('input[type="tel"]');


  const isCyrillic = /^[а-яёА-ЯЁ\s-]$/;
  const isPhone = /^[0-9()\-\s]+$/;
  const isEmail = /^[a-zA-Z0-9@._%+\-!~*']$/;
  // const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  const isControlKey = (key, e) => {
    return (key === 'Backspace' || key === 'Delete' ||
      key === 'ArrowLeft' || key === 'ArrowRight' ||
      key === 'Tab' || key === 'Enter' || key === 'Shift' || key === 'CapsLock' ||
      e.ctrlKey || e.metaKey)
  }



  input.forEach((inputElement) => {
    inputElement.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '');
    });
  })




  inputsTextMes.forEach(input => {
    input.addEventListener('keydown', e => {
      const key = e.key;
      if (isControlKey(key, e)
      ) return;

      if (!isCyrillic.test(key)) {
        e.preventDefault();
        alert('Недопустимые символы. Разрешены только кириллица, пробел и тире.');
      }
    });
  });


  inputTel.forEach(input => {
    input.addEventListener('keydown', e => {
      const key = e.key;

      if (isControlKey(key, e)
      ) return;

      if (!isPhone.test(key)) {
        e.preventDefault();
        alert('Недопустимые символы. Разрешены только цифры, круглые скобки, дефис');
      }
    });
  });

  inputEmail.forEach(input => {
    input.addEventListener('keydown', e => {
      const key = e.key;

      if (isControlKey(key, e)
      ) return;

      if (!isEmail.test(key)) {
        e.preventDefault();
        alert('Недопустимые символы. Введите корректный формат почты на латинице');
      }
    });
  });


  // inputEmail.forEach(input => {
  //   let timer;
  //   input.addEventListener('input', () => {
  //     clearTimeout(timer);

  //     timer = setTimeout(() => {
  //       const value = input.value.trim();
  //       if (value === '') return;
  //       if (!isEmail.test(value)) {
  //         alert('Введите корректный email. Пример: name@email.com');
  //       }
  //     }, 800);
  //   });
  // });


}

export default input
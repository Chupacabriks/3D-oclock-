const input = () => {
  console.log('это инпут');

  const calcBlock = document.querySelector('.calc-block');
  const input = calcBlock.querySelectorAll('input[type="text"]');
  input.forEach((inputElement) => {
    inputElement.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '');
    });
  })

}

export default input
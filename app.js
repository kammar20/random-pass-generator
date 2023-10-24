const inputDisplayPass = document.querySelector('.display-pass');
const slider = document.querySelector('.slider');
const rangeValue = document.querySelector('.range-value');
const button = document.querySelector('.btn');

rangeValue.textContent = slider.value;

// on input change range value
function displayValue() {
  rangeValue.textContent = slider.value;
  return slider.value;
}

const str = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&`;

button.addEventListener('click', function () {
  const passLength = displayValue();

  let pass = '';

  for (let i = 0; i < passLength; i++) {
    const random = Math.floor(Math.random() * str.length);
    pass += str[random];
  }

  inputDisplayPass.value = pass;
});

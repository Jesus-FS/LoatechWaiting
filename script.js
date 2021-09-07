const toggle = document.getElementById('toggle');

toggle.addEventListener('input', (e) => {
  const isChecked = e.target.checked;
  if (isChecked) {
    spanish.classList.add('animate__animated', 'animate__bounceOutLeft');
    spanish.style.display = 'none';
    spanish.classList.remove('animate__animated', 'animate__bounceOutLeft');
    english.style.display = 'flex';
    english.classList.add('animate__animated', 'animate__bounceInRight');
  } else {
    english.classList.add('animate__animated', 'animate__bounceOutRight');
    english.style.display = 'none';
    english.classList.remove('animate__animated', 'animate__bounceOutRight');
    spanish.style.display = 'flex';
    spanish.classList.add('animate__animated', 'animate__bounceInLeft');
  }
});

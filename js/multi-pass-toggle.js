const toggle   = document.querySelector('#show-passwords');
const passwords = Array.from(document.querySelectorAll('[type=password]'));

toggle.addEventListener('click', () => {
  if (toggle.checked) {
    passwords.forEach(element => element.type = 'text');
  } else {
    passwords.forEach(element => element.type = 'password');
  }
},false);
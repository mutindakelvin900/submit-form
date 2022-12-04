function change(){
  var img = document.getElementById("im");
  img.src="44a058ade855e9dda08d27e53a3d0cc4.jpg";
}
const myForm = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
  e.preventDefault();

  if(nameInput.value === ''|| emailInput.value === ''){
    msg.classList.add('error');
    msg.innerHTML = 'please enter all fields';

    setTimeout(() => msg.remove(), 3000);
  } else{
    // msg.innerHTML = 'details submitted successfully';
    // console.log('success');
  }
}
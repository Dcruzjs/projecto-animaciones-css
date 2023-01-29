const button1 = document.querySelector('#button1');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal-container--close');

button1.addEventListener('click', handleModal);
close.addEventListener('click', handleModal);

function handleModal(){
  if(modal.classList.contains('hidden')){
    modal.classList.remove('hidden');
    modal.classList.add('visible');
  }else{
    modal.classList.remove('visible');
    modal.classList.add('hidden');

  }
}
const modalElement = document.querySelector('.modal-overlay');
const cardElements = document.querySelectorAll('.card');

cardElements.forEach(cardElement => {
  cardElement.addEventListener('click', () => {
    modalElement.querySelector('iframe').setAttribute('src', `https://rocketseat.com.br/${cardElement.getAttribute('id')}`);
    modalElement.classList.add('maximize');
  });
});

modalElement.querySelector('.close-modal')
  .addEventListener('click', () => modalElement.classList.remove('maximize'));
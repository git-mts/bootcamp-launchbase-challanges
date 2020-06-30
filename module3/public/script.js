const cardElements = document.querySelectorAll('.card');

cardElements.forEach(cardElement =>
  cardElement.addEventListener('click', () => location.href = `course/${cardElement.id}`)
);
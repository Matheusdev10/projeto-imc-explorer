export const alertError = {
  element: document.querySelector('.alert-error'),
  open() {
    alertError.element.classList.add('open');
  },
  close() {
    alertError.element.classList.remove('open');
  },
};

// quando eu errar vai aparecer o erro
// quando eu começar a digitar o erro tem que sumir

const inputWeight = document.querySelector('#weight');

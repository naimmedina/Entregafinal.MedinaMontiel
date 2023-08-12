const form = document.querySelector('.form');
const inputs = form.querySelectorAll('.input');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = {};
  let nombre = '';
  inputs.forEach(input => {
    formData[input.getAttribute('placeholder')] = input.value;
    const placeholder = input.getAttribute('placeholder');
    const value = input.value.trim();
    if (placeholder === 'Nombre') {
      nombre = value;
    }
  });
    const alertMessage = `${nombre} Tu mensaje fue enviado!`;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: alertMessage,
      showConfirmButton: false,
      timer: 3000,
    });
    localStorage.setItem('formData', JSON.stringify(formData));
    form.reset()
  });

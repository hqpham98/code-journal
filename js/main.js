const $photoURL = document.querySelector('#photo-URL');
const $photo = document.querySelector('form img');
const $form = document.querySelector('form');

function handlePhotoInput(event) {
  $photo.setAttribute('src', event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
}
$photoURL.addEventListener('input', handlePhotoInput);

$form.addEventListener('submit', handleSubmit);

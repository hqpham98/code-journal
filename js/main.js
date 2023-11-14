/* global data */

const $photoURL = document.querySelector('#photo-URL');
const $photo = document.querySelector('form img');
const $form = document.querySelector('form');

function handlePhotoInput(event) {
  $photo.setAttribute('src', event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  const inputObj = {};
  for (let i = 0; i < Array.from(event.target).length - 1; i++) {
    inputObj[event.target[i].id] = event.target[i].value;
  }
  inputObj.entryID = data.nextEntryId++;
  data.entries.unshift(inputObj);
  $form.reset();
  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
}
$photoURL.addEventListener('input', handlePhotoInput);

$form.addEventListener('submit', handleSubmit);

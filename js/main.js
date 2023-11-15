/* global data */

const $photoURL = document.querySelector('#photo-URL');
const $photo = document.querySelector('form img');
const $form = document.querySelector('form');

function handlePhotoInput(event) {
  $photo.setAttribute('src', event.target.value);
  $photo.setAttribute('alt', 'image from photoURL');
}

function handleSubmit(event) {
  event.preventDefault();
  const inputObj = {};
  inputObj.title = event.target[0].value;
  inputObj.photo = event.target[1].value;
  inputObj.notes = event.target[2].value;
  inputObj.entryID = data.nextEntryId++;
  data.entries.unshift(inputObj);
  $form.reset();
  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
  $photo.setAttribute('alt', 'placeholder image');
}

function renderEntry(entry) {
  const $listItem = document.createElement('li');
  const $row = document.createElement('div');
  $listItem.appendChild($row);
  $row.className = 'row';

  const $imageColumn = document.createElement('div');
  $imageColumn.className = 'column-half entries-image-wrapper';
  $row.appendChild($imageColumn);

  const $textColumn = document.createElement('div');
  $textColumn.className = 'column-half';
  $row.appendChild($textColumn);

  const $image = document.createElement('img');
  $image.setAttribute('src', entry.photo);
  $imageColumn.appendChild($image);

  const $titleHeader = document.createElement('h3');
  $textColumn.appendChild($titleHeader);

  const $titleHeaderText = document.createTextNode(entry.title);
  $titleHeader.appendChild($titleHeaderText);

  const $paragraph = document.createElement('p');
  $textColumn.appendChild($paragraph);
  const $paragraphText = document.createTextNode(entry.notes);
  $paragraph.appendChild($paragraphText);

  return $listItem;
}

function handleDOMContentLoaded(event) {
  for (const entry of data.entries) {
    const $entriesList = document.querySelector('.entries-list');
    $entriesList.appendChild(renderEntry(entry));
  }
}

$photoURL.addEventListener('input', handlePhotoInput);

$form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

/* global data */

const $photoURL = document.querySelector('#photo-URL');
const $photo = document.querySelector('form img');
const $form = document.querySelector('form');
const $entriesAnchor = document.querySelector('#entries-anchor');

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

function toggleNoEntries() {
  const $noEntries = document.querySelector('.no-entries');
  if (data.entries.length === 0) {
    $noEntries.className = 'no-entries';
  } else {
    $noEntries.className = 'no-entries hidden';
  }
}

function handleDOMContentLoaded(event) {
  toggleNoEntries();
  const $entriesList = document.querySelector('.entries-list');
  if (data.entries.length !== 0) {
    for (const entry of data.entries) {
      $entriesList.appendChild(renderEntry(entry));
    }
  }
}

function viewSwap(view) {
  const $entries = document.querySelector('div[data-view=entries]');
  const $entryForm = document.querySelector('div[data-view=entry-form]');
  data.view = view;

  if (view === 'entries') {
    console.log('hello');
    $entryForm.classList.add('hidden');
    $entries.classList.remove('hidden');
  } else {
    $entries.classList.add('hidden');
    $entryForm.classList.remove('hidden');
  }
}

function handleAnchorClick(event) {
  viewSwap('entries');
}

$photoURL.addEventListener('input', handlePhotoInput);

$form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

$entriesAnchor.addEventListener('click', handleAnchorClick);

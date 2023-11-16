/* global data */

const $photoURL = document.querySelector('#photo-URL');
const $photo = document.querySelector('form img');
const $form = document.querySelector('form');
const $entriesAnchor = document.querySelector('#entries-anchor');
const $newAnchor = document.querySelector('#new-anchor');
const $entriesList = document.querySelector('.entries-list');
const $noEntries = document.querySelector('.no-entries');
const $entries = document.querySelector('div[data-view=entries]');
const $entryForm = document.querySelector('div[data-view=entry-form]');

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
  toggleNoEntries();
  $entriesList.prepend(renderEntry(inputObj));
  viewSwap('entries');
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
  $image.setAttribute('alt', 'entry image');
  $imageColumn.appendChild($image);

  const $titleHeaderRow = document.createElement('div');
  $titleHeaderRow.setAttribute('class', 'row');
  $textColumn.appendChild($titleHeaderRow);

  const $titleHeaderTextColumn = document.createElement('div');
  $titleHeaderTextColumn.className = 'entry-title-column-text';
  $titleHeaderRow.appendChild($titleHeaderTextColumn);

  const $titleHeaderPencilColumn = document.createElement('div');
  $titleHeaderPencilColumn.className = 'entry-title-column-icon';
  $titleHeaderRow.appendChild($titleHeaderPencilColumn);

  const $titleHeader = document.createElement('h3');
  $titleHeaderTextColumn.appendChild($titleHeader);

  const $pencilIcon = document.createElement('i');
  $pencilIcon.setAttribute('class', 'fa-solid fa-pencil');
  $titleHeaderPencilColumn.appendChild($pencilIcon);

  const $titleHeaderText = document.createTextNode(entry.title);
  $titleHeader.appendChild($titleHeaderText);

  const $paragraph = document.createElement('p');
  $textColumn.appendChild($paragraph);
  const $paragraphText = document.createTextNode(entry.notes);
  $paragraph.appendChild($paragraphText);

  return $listItem;
}

function toggleNoEntries() {
  if (data.entries.length === 0) {
    $noEntries.className = 'no-entries';
  } else {
    $noEntries.className = 'no-entries hidden';
  }
}

function handleDOMContentLoaded(event) {
  if (data.entries.length !== 0) {
    for (const entry of data.entries) {
      $entriesList.appendChild(renderEntry(entry));
    }
  }
  toggleNoEntries();
  viewSwap(data.view);
}

function viewSwap(view) {
  data.view = view;

  if (view === 'entries') {
    $entryForm.classList.add('hidden');
    $entries.classList.remove('hidden');
  } else {
    $entries.classList.add('hidden');
    $entryForm.classList.remove('hidden');
  }
}

function handleAnchorClick(event) {
  if (event.target === $entriesAnchor) {
    viewSwap('entries');
  } else {
    viewSwap('entry-form');
  }
}

$photoURL.addEventListener('input', handlePhotoInput);

$form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

$entriesAnchor.addEventListener('click', handleAnchorClick);
$newAnchor.addEventListener('click', handleAnchorClick);

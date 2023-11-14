/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

function handleBeforeUnload(event) {
  localStorage.setItem('data', JSON.stringify(data));
}

window.addEventListener('beforeunload', handleBeforeUnload);

const previousData = localStorage.getItem('data');

if (previousData) {
  data = JSON.parse(previousData);
}

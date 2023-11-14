/* exported data */

const data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

function handleBeforeUnload(event) {
  localStorage.setItem('taco', JSON.stringify(data));
}

window.addEventListener('beforeunload', handleBeforeUnload);

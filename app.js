function onReady() {
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    var newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';
  }

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createNewToDo();
  });
}

window.onload = function() {
  onReady();
};

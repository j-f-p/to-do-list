function onReady() {
  var toDos = [];
  var addToDoButton = document.getElementById('addToDoButton');

  function createNewToDo() {
    var newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    var toDoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';

    toDos.forEach(function(toDo) {
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.innerHTML = toDo.title;
      newLi.appendChild(checkbox);

      toDoList.appendChild(newLi);
    });
  }

  addToDoButton.addEventListener('click', (event) => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};

function onReady() {
  const toDos = [];
  const addToDoButton = document.getElementById('addToDoButton');

  function createNewToDo() {
    let newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false,
      index: toDos.length
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    let toDoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';

    toDos.forEach(function(toDo) {
      let newLi = document.createElement('li');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = toDo.complete;

      let deleteButton = document.createElement('button');
      deleteButton.textContent = "delete";

      newLi.innerHTML = toDo.title;
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      toDoList.appendChild(newLi);

      checkbox.addEventListener('change', (event) => {
        if(toDo.complete)
          toDo.complete = false;
        else
          toDo.complete = true;
      });

      deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        toDos.splice(toDo.index,1);
        let i=0;
        toDos.forEach(function(toDo){
            toDo.index=i;
            i++;
        });
        renderTheUI(toDos);
      });
    });
  }

  addToDoButton.addEventListener('click', (event) => {
    event.preventDefault();
    createNewToDo();
  });
}

window.onload = function() {
  onReady();
};

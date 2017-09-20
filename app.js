function onReady() {
  const toDos = [];
  const addToDoButton = document.getElementById('addToDoButton');
  const clearCheckedForm = document.getElementById('clearCheckedForm');



  function renderTheUI(toDos) {
    console.log(toDos);
    // auxiliary function
    function relableIndices(todoArr) {
      let i=0;
      todoArr.forEach(function(toDo){
          toDo.index=i;
          i++;
      });
      return todoArr;
    }

    let toDoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';

    toDos.forEach(function(toDo) {
      let newLi = document.createElement('li');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = toDo.complete;

      let deleteButton = document.createElement('button');
      deleteButton.textContent = "delete " + toDo.index;

      newLi.innerHTML = toDo.title;
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      toDoList.appendChild(newLi);

      checkbox.addEventListener('change', (event) => {
        if(toDo.complete)
          toDo.complete = false;
        else
          toDo.complete = true;
        console.log("render after box checked");
        renderTheUI(toDos);
      });

      deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        toDos.splice(toDo.index,1);
        relableIndices(toDos);
        console.log("render after task removed by delete button");
        renderTheUI(toDos);
      });
    });

    clearCheckedForm.innerHTML = '';
    let checkExists=false, i=0;
    while(!checkExists && i<toDos.length) {
        if(toDos[i].complete==true)
            checkExists=true;
        i++;
    }
    console.log("checkExists is " + checkExists);
    if(checkExists) { // add button to clear checked tasks
        let clearCheckedButton = document.createElement('button');
        clearCheckedButton.textContent = 'clear checked';
        clearCheckedForm.appendChild(clearCheckedButton);

        clearCheckedButton.addEventListener('click', (event) => {
          event.preventDefault();
          // determine which tasks are checked
          let checkedTasks = [];

          toDos.forEach(function(toDo) {
            if(toDo.complete==true) {
              checkedTasks.push(toDo.index);
            } // checkedTasks values are sorted
          });

          // remove checked tasks
          let removed, j=0, nremoved=0;
          checkedTasks.forEach(function(removeIndex) {
            removed=false;
            while(!removed) {
              if(toDos[j].index==removeIndex) {
                toDos.splice(removeIndex-nremoved,1);
                removed=true;
                nremoved++;
              }
              else
                j++;
            }
          });

          relableIndices(toDos);
          console.log("render after clear checked");
          renderTheUI(toDos);
        });
    }
  }

  function createNewToDo() {
    let newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false,
      index: toDos.length
    });
    newToDoText.value = '';

    console.log("render after new to do added");
    renderTheUI(toDos);
  }

  addToDoButton.addEventListener('click', (event) => {
    event.preventDefault();
    createNewToDo();
  });
}

window.onload = function() {
  onReady();
};

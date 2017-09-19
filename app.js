function onReady() {
  // select elements
  const addToDoButton= document.getElementById('addToDoButton');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const resetForm = document.getElementById('resetForm');

  // add listner
  addToDoButton.addEventListener('click', (event) => {
    event.preventDefault();

    // retreive text
    let title = newToDoText.value;

    // create new li
    let newLi = document.createElement('li');

    // create new input for checkbox
    let checkbox = document.createElement('input');

    // create new input for delete button
    let deleteButton = document.createElement('button');

    // set checkbox input's type to checkbox
    checkbox.type = "checkbox";

    // set deleteButton input's type and value
    // button default type is "submit"
    deleteButton.textContent = "delete";

    // set title and assign id
    newLi.textContent = title;
    newLi.id = "li" + (toDoList.childNodes.length - 1);

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the delete button to the li
    newLi.appendChild(deleteButton);

    // attach title to ul
    toDoList.appendChild(newLi);

    // generate reset button and define its action
    if(toDoList.childNodes.length==3) {
      let resetButton = document.createElement('button');
      resetButton.textContent = 'reset';
      resetForm.appendChild(resetButton);

      resetForm.addEventListener('click', (resetEvent) => {
        window.location.reload();
      });
    }

    // delete button action, defined after toDoList.appendChild, toDoList.childNodes.length>=1
    deleteButton.addEventListener('click',
      (taskEvent) => {
        if( toDoList.childNodes.length > 3 ) {
          toDoList.removeChild(newLi);
        }
        else if ( toDoList.childNodes.length > 2 ) {
          toDoList.removeChild(newLi);
          resetForm.removeChild(resetForm.lastChild);
          newToDoText.focus();
        }
        else
          window.location.reload();
      }
    );

    // empty the input
    newToDoText.value = '';
  });


}

window.onload = function() {
  onReady();
};

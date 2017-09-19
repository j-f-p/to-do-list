function onReady() {
  // select elements
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const resetForm = document.getElementById('resetForm');



  // add listner
  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // retreive text
    let title = newToDoText.value;

    // create new li
    let newLi = document.createElement('li');

    // create new input for checkbox
    let checkbox = document.createElement('input');

    // create new input for delete button form
    let deleteButtonForm = document.createElement('form');

    // create new input for delete button
    let deleteButton = document.createElement('input');

    // set checkbox input's type to checkbox
    checkbox.type = "checkbox";

    // set deleteButton input's type and value
    deleteButton.type = "submit";
    deleteButton.value = "delete";

    // set deleteButtonForm id and assign it a child
    deleteButtonForm.id = "task" + toDoList.childNodes.length;
    deleteButtonForm.appendChild(deleteButton);

    // set title and assign id
    newLi.textContent = title;
    newLi.id = "li" + (toDoList.childNodes.length - 1);

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the delete button form to the li
    newLi.appendChild(deleteButtonForm);

    // attach title to ul
    toDoList.appendChild(newLi);

    // generate reset button and define its action
    if(toDoList.childNodes.length==3) {
      let resetButton = document.createElement('input');
      resetButton.type = 'submit';
      resetButton.value = 'reset';
      resetForm.appendChild(resetButton);

      resetForm.addEventListener('submit', (resetEvent) => {
        // reload page
      });
    }

    // delete button action, defined after toDoList.appendChild, toDoList.childNodes.length>=1
    deleteButtonForm.addEventListener('submit',
      (taskEvent) => {
	if( toDoList.childNodes.length > 3 ) {
          taskEvent.preventDefault();
          toDoList.removeChild( document.getElementById(newLi.id) );
	}
        else if ( toDoList.childNodes.length > 2 ) {
          taskEvent.preventDefault();
          toDoList.removeChild( document.getElementById(newLi.id) );
          resetForm.removeChild(resetForm.lastChild);
        }
	// else reload page
      }
    );

    // empty the input
    newToDoText.value = '';
  });


}

window.onload = function() {
  onReady();
};

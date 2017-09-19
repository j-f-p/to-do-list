function onReady() {
  // select elements
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  // add listner
  addToDoForm.addEventListener('submit', (event)=> {
    event.preventDefault();

    // retreive text
    let title = newToDoText.value;

    // create new li
    let newLi = document.createElement('li');

    // create new input for checkbox
    let checkbox = document.createElement('input');

    // set input's type to checkbox
    checkbox.type = "checkbox";

    // set title
    newLi.textContent = title;

    // attach title to ul
    toDoList.appendChild(newLi);

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    // empty the input
    newToDoText.value = '';
  });
}

window.onload = function() {
  onReady();
};

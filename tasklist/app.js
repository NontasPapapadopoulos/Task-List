// UI Vars
const form = document.querySelector('#task-form'); 
const taskList = document.querySelector('.collection'); 
const clearBtn = document.querySelector('.clear-tasks'); 
const filter = document.querySelector('#filter'); 
const taskInput = document.querySelector('#task'); 



// load all event listeners 

loadEventListeners(); 


function loadEventListeners(){
  form.addEventListener('submit', addTask);

  //remove task event
  taskList.addEventListener('click', removeTask);

  //clear task event
  clearBtn.addEventListener('click', clearTasks); 

  //filter tasks event 
  //filter.addEventListener('keyup', filterTasks); 
}



//add Task 
function addTask(e) {
  if(taskInput.value ==='' || taskInput.value === null) {
    alert('Add a new task'); 
  }

  // create li element 
  const li = document.createElement('li'); 
  // add a class
  li.className = 'collection-item';
  //create text node and append to li 
  let task = document.createTextNode(taskInput.value);
  li.appendChild(task); 
  //create new link element anchor tag 
  const link = document.createElement('a'); 
  //Add class 
  link.className = 'delete-item secondary-content'; 
  // add icon html 
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append link to li 
  li.appendChild(link); 
  //apend li to ul 
  taskList.appendChild(li);

  
  //Store in LS 
  //storeTaskInLocalStorage(); 


  //clear input 
  taskInput.value = '';

  e.preventDefault();
}

// remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item') ) {
    if(confirm('are you sure?')) {
    e.target.parentElement.parentElement.remove();
  }
}
}

// clear tasks
function clearTasks(e) {
  if(e.target.classList.contains('clear-tasks')) {
    document.querySelector('ul').remove();
  }

  // while(taskList.firstChild) {
  //   taskList.removeChild(taskList.firstChild);
  // }
}

//Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase(); 

  document.querySelectorAll('.collection-item').forEach( function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1 ) {
        task.style.display = 'block'; 
    } else {
      task.style.display = 'none';
    }
  })
}



//  Store Task 
// function storeTaskInLocalStorage(task) {
//   let tasks;
//   if(localStorage.getItem('tasks' === null)) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }
//   tasks.push(task); 
//   localStorage.setItem('tasks',JSON.stringify(tasks));
  
// }

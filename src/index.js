import './styles/index.css';

import { projectInput, addProjectBtn,
  projectList, projectLink, li, paragraph } from './dom';

// addProjectBtn.addEventListener('click', (e) => {
//   e.preventDefault();

//   let value = projectInput.value;
//   console.log(value);

//   projectLink.appendChild(li);
//   projectList.appendChild(projectLink);

// });

const addTodo = (todo, id) => {
  // li.appendChild(paragraph);
  
  // li.value = '0';
  const item = document.createElement('a');
  item.appendChild(paragraph);
  li.getElementsByClassName('text').id;
  
  li.appendChild(item);
  projectList.appendChild(li);
  paragraph.innerText = todo;
  
  console.log(projectList)

  // li.push(todo);

  const position = 'beforeend';

  li.insertAdjacentHTML(position, item);
   
};

addProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const toDo = projectInput.value;
  if (toDo) {
    addTodo(toDo, id);
  }
  projectInput.value = '';
});


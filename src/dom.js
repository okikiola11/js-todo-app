const projectInput = document.querySelector('#projectName');
const addProjectBtn = document.querySelector('#modale_addProject_btn');
const projectList = document.querySelector('#projects_list');

const li =  document.createElement('li');
li.id = 'listID';
li.className = 'text';
const paragraph =  document.createElement('p');

export { projectInput, addProjectBtn,
  projectList, li,
paragraph };
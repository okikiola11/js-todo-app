import './styles/index.css';
import { projectName, addProjectBtn } from './dom';

addProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();

  console.log(projectName.value);
});

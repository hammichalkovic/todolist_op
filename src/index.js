import './styles.css';
import { Projects } from './projects_class.js';
import { ProjectClass, toAddProject } from './project_class.js';
import { TaskClass, toAddClass} from './task_class.js';

let projects = new Projects();
console.log(projects);

function toAddNewProject(name) {
    toAddProject(projects, name)
}

function toAddNewTask(projectArrItem, name, description, priority, dueTime) {
    projects.projectsArr[projectArrItem].tasks.push(new TaskClass(name, description, priority, dueTime));
    console.log(projects);
}

toAddNewProject('My Tasks');
toAddNewProject('Additional Project');
toAddNewTask(0, 'toBoil', 'ASAP', 'HIGH', 'Now');



// let defaultProject = new ProjectClass('My Tasks');

// function toCreateTask(name) {
//     name = new TaskClass(name, 'asd', 'asdf', 'asdfhhh')
//     return name;
// }

// toCreateTask('mynewtask')

// console.log(defaultProject);
import './styles.css';
import { Projects } from './projects_module.js';
import { ProjectClass, toAddProject } from './project_module.js';
import { TaskClass, toAddTask, toRemoveTask} from './task_module.js';
import { CheckList } from './checklist_module.js';

let projects = new Projects();
console.log(projects);

function toAddNewProject(name) {
    toAddProject(projects, name)
}

// function toAddNewTask(projectArrItem, name, description, priority, dueTime) {
//     projects.projectsArr[projectArrItem].tasks.push(new TaskClass(name, description, priority, dueTime));
//     console.log(projects);
// }

const taskManagement = (function() {
    const toAdd = (projectArrItem, name, description, priority, dueTime) => {
        projects.projectsArr[projectArrItem].tasks.push(new TaskClass(name, description, priority, dueTime));
        console.log(projects);
    };

    const toRemove = (projectNum,taskNum) => {
        projects.projectsArr[projectNum].tasks.splice(taskNum, 1);
    };

    const toMarkAsDone = (projectNum, taskNum) => {
        projects.projectsArr[projectNum].tasks[taskNum].status = true;
    };

    return {toAdd, toRemove, toMarkAsDone};
})();

const checkListsManagment = (function () {

    const projectsDist = projects.projectsArr;

    const toAddCheckList = (projectNum, listName) => {
        projectsDist[projectNum].tasks.push(new CheckList(listName));
    };

    const toRemoveList = (projectNum, taskItem) => {
        projectsDist[projectNum].tasks.splice(taskItem, 1);
    };

    const toAddItem = (projectNum, taskItem, item) => {
        projectsDist[projectNum].tasks[taskItem].checkItems.push(item);
    };

    const toRemoveItem = (projectNum, taskItem, itemNum) => {
        projectsDist[projectNum].tasks[taskItem].checkItems.splice(itemNum, 1);
    };

    return { toAddCheckList, toRemoveList, toAddItem, toRemoveItem };
})(); 

toAddNewProject('My Tasks');
toAddNewProject('Additional Project');
// toAddTask(0, 'toBoil', 'ASAP', 'HIGH', 'Now');
// toAddNewTask(0, 'toBoil', 'ASAP', 'HIGH', 'Now');
taskManagement.toAdd(0, 'toBoil', 'ASAP', 'HIGH', 'Now');
checkListsManagment.toAddCheckList(0, 'My First Checklist');
// checkListsManagment.toRemoveList(0, 1);
checkListsManagment.toAddItem(0, 1, 'First List Item');
checkListsManagment.toRemoveItem(0, 1, 0)

taskManagement.toMarkAsDone(0, 0);
console.log(projects);



// let defaultProject = new ProjectClass('My Tasks');

// function toCreateTask(name) {
//     name = new TaskClass(name, 'asd', 'asdf', 'asdfhhh')
//     return name;
// }

// toCreateTask('mynewtask')

// console.log(defaultProject);
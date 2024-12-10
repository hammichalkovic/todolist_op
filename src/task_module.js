export class TaskClass {
    constructor(name, description, priority, dueTime) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.dueTime = dueTime;
        this.status = false;
    }   
}

export function toAddTask(arrItem, name, description, priority, dueTime) {
    projects.projectsArr[arrItem].tasks.push(new TaskClass(name, description, priority, dueTime));
    console.log(projects);
} 
export function toRemoveTask(projectNum,taskNum) {
    Projects.projectsArr[projectNum].tasks.slice(taskNum, 1);
}

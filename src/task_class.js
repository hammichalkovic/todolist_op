export class TaskClass {
    constructor(name, description, priority, dueTime) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.dueTime = dueTime;
    }   
}

export function toAddClass(arrItem, name, description, priority, dueTime) {
    projects[arrItem].tasks.push(new TaskClass(name, description, priority, dueTime));
    console.log(projects);
} 


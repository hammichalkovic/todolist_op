export class ProjectClass {
    
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    static push(task) {
        this.tasks.push(task);
    }
}

export function toAddProject(dist ,name) {
        dist.push(new ProjectClass(name));
        console.log(dist);
}
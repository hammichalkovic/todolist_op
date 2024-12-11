export class CheckList {
    constructor(name) {
        this.name = name;
        this.checkItems = [];
        this.checked = false;
    }

    push(item) {
        this.checkItems.push(item);
    }
}


export class Todo {
    id: string;
    title: string;
    createdDate: number;
    endDate: number;
    isDone: boolean;
    category: string;

    constructor(title: string, category: string, id: string = '') {
        this.isDone = false;
        this.createdDate = new Date().getTime();
        this.title = title;
        this.category = category;
        this.id = id;
    }
}
export class Todo {
    id: string;
    title: string;
    createdDate: number;
    endDate: number;
    isDone: boolean;
    category: string;

    constructor(title: string, category: string, id: string = '',
     isDone: boolean = false, createdDate: number = Date.now(), endDate: number = 0) {
        this.isDone = isDone;
        this.createdDate = createdDate;
        this.title = title;
        this.category = category;
        this.id = id;
        this.endDate = endDate;
    }
}
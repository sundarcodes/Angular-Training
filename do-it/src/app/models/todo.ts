export class Todo {
    id: number;
    title: string;
    createdDate: number;
    endDate: number;
    isDone: boolean;
    category: string;

    constructor(title: string, category: string) {
        this.isDone = false;
        this.createdDate = new Date().getTime();
        this.title = title;
        this.category = category;
    }
}
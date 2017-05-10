export class Todo{
    id: string;
    title: string;
    startDate: number;
    endDate: number;
    isDone: boolean;
    category: string;

    constructor(title: string, category: string, id: string = ''){
        this.startDate = Date.now();
        this.isDone = false;
        this.title = title;
        this.category = category;
        this.id = id;
    }

}
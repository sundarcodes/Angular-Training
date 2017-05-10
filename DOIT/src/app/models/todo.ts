export class Todo{
    id: string;
    title: string;
    startDate: number;
    endDate: number;
    isDone: boolean;
    category: string;

    constructor(title: string, category: string, id: string = '',startDate: number = Date.now(), isDone: boolean = false, endDate: number = 0){
        this.startDate = startDate;
        this.isDone = isDone;
        this.title = title;
        this.category = category;
        this.id = id;
        this.endDate = endDate;
    }

}
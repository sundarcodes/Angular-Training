export class Todo{
    id: number;
    title: string;
    startDate: number;
    endDate: number;
    isDone: boolean;
    category: string;

    constructor(title: string, category: string){
        this.startDate = new Date().getTime();
        this.isDone = false;
        this.title = title;
        this.category = category;
    }

}
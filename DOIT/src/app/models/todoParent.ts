export class TodoParent {
    id: string;
    name: string;
    created_at: number;
    update_at: number;
    is_active: boolean;

    constructor(name: string, created_at: number = Date.now(), id: string = ''){
        this.id = id;
        this.name = name;
        this.created_at = created_at;
        this.update_at = Date.now();
        this.is_active = true;
    }
}
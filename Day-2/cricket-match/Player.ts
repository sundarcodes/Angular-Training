export class Player {
    id: number;
    name: string;
    score: number;
    balls:number;
    wickets:number;
    constructor(id: number, name: string, score: number, balls:number,wickets:number) {
        this.id = id;
        this.name = name;
        this.score = score;
        this.balls = balls;
        this.wickets = wickets
    }
    printInfo() {
        console.log(`${this.name} scored ${this.score} in ${this.balls} balls`);
    }
    updateScore(score:number){
        this.score = score
    }
}

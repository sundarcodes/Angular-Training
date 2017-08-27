import { Player } from './Player';
export class Match{

    matchName:String;
    matchType:String;
    overs:number;
    listOfPlayers:Player[];
    createPlayers(){
        this.listOfPlayers = [];
        for (let i = 1; i <= 11; i++) {
            //let Score = Math.floor(Math.random()*(5-1+1)+1);
            let player: Player = new Player(i, "Player "+i, 100,72,0);    
            this.listOfPlayers.push(player);      
        }
    }
    createMatch(matchName:string, matchType:String, overs:number){
        this.createPlayers();
        this.matchName=matchName;
        this.matchType = matchType;
        this.overs=overs;
    }
    printPlayerInfo(playerName:String) {
        for (let i = 1; i <= 11; i++){
            if(playerName == this.listOfPlayers[i].name){
                this.listOfPlayers[i].printInfo();
            }
        }
      
      }

}
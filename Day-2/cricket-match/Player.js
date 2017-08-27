"use strict";
exports.__esModule = true;
var Player = (function () {
    function Player(id, name, score, balls, wickets) {
        this.id = id;
        this.name = name;
        this.score = score;
        this.balls = balls;
        this.wickets = wickets;
    }
    Player.prototype.printInfo = function () {
        console.log(this.name + " scored " + this.score + " in " + this.balls + " balls");
    };
    Player.prototype.updateScore = function (score) {
        this.score = score;
    };
    return Player;
}());
exports.Player = Player;

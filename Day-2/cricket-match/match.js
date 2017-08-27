"use strict";
exports.__esModule = true;
var Player_1 = require("./Player");
var Match = (function () {
    function Match() {
    }
    Match.prototype.createPlayers = function () {
        this.listOfPlayers = [];
        for (var i = 1; i <= 11; i++) {
            //let Score = Math.floor(Math.random()*(5-1+1)+1);
            var player = new Player_1.Player(i, "Player " + i, 100, 72, 0);
            this.listOfPlayers.push(player);
        }
    };
    Match.prototype.createMatch = function (matchName, matchType, overs) {
        this.createPlayers();
        this.matchName = matchName;
        this.matchType = matchType;
        this.overs = overs;
    };
    Match.prototype.printPlayerInfo = function (playerName) {
        for (var i = 1; i <= 11; i++) {
            if (playerName == this.listOfPlayers[i].name) {
                this.listOfPlayers[i].printInfo();
            }
        }
    };
    return Match;
}());
exports.Match = Match;

function Player() {
  this.score = 0;
  this.currentRoll = 0;

  Player.prototype.updateCurrentRoll = function(rollResults) {
    for (var counter = 0; counter < rollResults.length; counter++) {
      this.currentRoll = this.currentRoll + rollResults[counter];
    }
  };

  Player.prototype.saveScore = function() {
    this.score = this.score + this.currentRoll;
    this.currentRoll = 0;
  };
}


Player.prototype.roll = function(diceCount) {
  var rollResults = [];
  for (var i = 0; i < diceCount; i++) {
    rollResults.push(Math.floor(Math.random() * 6) + 1);
  }
  return rollResults;
};

// player.updateCurrentRoll(player.roll(diceCount))

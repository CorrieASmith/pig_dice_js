function Player() {
  this.score = 0;
  this.currentRoll = 0;

  var updateCurrentRoll = function(rollResults) {
    currentRoll = currentRoll + rollResults;
  }
}

Player.prototype.roll = function(diceCount) {
  var rollResults = [];
  for (var i = 0; i < diceCount; i++) {
    rollResults.push(Math.floor(Math.random() * 6) + 1);
  }
  return rollResults;
};

// player.updateCurrentRoll(player.roll(diceCount))

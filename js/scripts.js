// ROLL METHODS
function DiceRoll() {
  var rollResults = [];

  DiceRoll.prototype.roll = function(diceCount) {
    for (var i = 0; i < diceCount; i++) {
      rollResults.push(Math.floor(Math.random() * 6) + 1);
    }
    return rollResults;
  };

  // false == bad-roll , true == good-roll (!1)
  DiceRoll.prototype.validateRoll = function() {
    for (var i = 0; i < rollResults.length; i++) {
      if (rollResults[i] == 1) {
        return false;
      }
    }
    return true;
  };
}




//Player Constructor/Methods
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


///Computer player's methods/constructor
function Computer() {
  this.score = 0;
  this.currentScore = 0;

  Computer.prototype.updateCurrentRoll = function(rollResults) {
    for (var counter = 0; counter < rollResults.length; counter++) {
      this.currentRoll = this.currentRoll + rollResults[counter];
    }
  };


  Computer.prototype.saveScore = function() {
    this.score = this.score + this.currentRoll;
    this.currentRoll = 0;
  };

  Computer.prototype.playTurn = function() {

    var playGame = true;
    var loops = 0;
    while (playGame == true) {
      loops += 1;
      var newRoll = new DiceRoll();
      newRoll.roll(1);
debugger;
      if (newRoll.validateRoll() == false) {
        this.currentScore = 0;
        playGame = false;
        break;
      }
      this.updateCurrentRoll(newRoll.rollResults);

      if (loops >= 2) {
        this.saveScore;
        playGame = false;
        this.currentScore = 0;
        break;
      }
    }
  };
}

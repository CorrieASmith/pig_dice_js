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

  DiceRoll.prototype.showResults = function() {
    return rollResults;
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
    return this.score;
  };

  Player.prototype.showResults = function() {
    return this.score;
  };

  Player.prototype.showCurrent = function() {
    return this.currentRoll;
  };
  Player.prototype.resetCurrent = function() {
    this.currentRoll = 0;
  };

}


///Computer player's methods/constructor
function Computer() {
  this.score = 0;
  this.currentRoll = 0;

  Computer.prototype.updateCurrentRoll = function(rollResults) {
    for (var counter = 0, length = rollResults.length; counter < length; counter++) {
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
    while (playGame === true) {
      loops += 1;
      var newRoll = new DiceRoll();
      newRoll.roll(1);
      if (newRoll.validateRoll() === false) {
        this.currentRoll = 0;
        playGame = false;
        break;
      }
      this.updateCurrentRoll(newRoll.showResults);

      if (loops >= 2) {
        this.saveScore();
        playGame = false;
        this.currentRoll = 0;
        break;
      }
    }
  };
}

$(document).ready(function() {
  var player = new Player();
  var computer = new Computer();

  var diceCount = 1;

  $("form#save-roll").submit(function(event) {
    event.preventDefault();

    $('.diceScore').text(player.saveScore());
    player.resetCurrent();
    $('.playerDiceroll').text(player.showCurrent());
    computer.playTurn();
    if (player.showResults >= 100) {
      //update span, update some "win" variable, hide game-buttons to force end screen??
      alert("Congratulations! You win!");
    }
  });

  $("form#keep-rolling").submit(function(event) {
    var working_roll = new DiceRoll();
    event.preventDefault();
    working_roll.roll(diceCount);
    if (working_roll.validateRoll() === true) {
      player.updateCurrentRoll(working_roll.showResults());
    } else {
      //clear current roll, proceed to computer turn.
    }// begin roll validation, add to current AFTER validate
    //update output
    //check win condition
  

    if (player.currentScore <= 1) {

    }

    $('.turnScore').text(working_roll.showResults());
    $('.diceScore').text(player.showResults());
    $('.playerDiceroll').text(player.showCurrent());
    $("#result").show();
  });
});

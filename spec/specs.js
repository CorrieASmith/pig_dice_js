describe('roll', function() {
  it("returns a random number everytime the dice is rolled", function() {
    var testPlayer = new Player();
    expect(testPlayer.score).to.equal(0);
    expect(testPlayer.currentRoll).to.equal(0);
  });

  it("rolls the dice", function () {
    var testRoll = new DiceRoll();
    testRoll.roll(1);
    //Note: <player>.roll(<diceCount>);
    expect(testRoll.rollResults).not.to.equal([]);
  });

  it("updates the current roll using random dice roll", function() {
    var testPlayer = new Player();
    var testRoll = new DiceRoll();
    // Note: <player>.updateCurrentRoll(<roll(s) to add>)
    // current roll represents un-saved score for the turn
    expect(testPlayer.updateCurrentRoll(testRoll.roll(1))).not.to.equal(0);
  });

  it("adds the currentRoll to the player's score", function() {
    var testPlayer = new Player();
    var testRoll = new DiceRoll();
    //Note: <player>.saveScore() has natural parameters, but apparently this works?
    expect(testPlayer.saveScore(testPlayer.updateCurrentRoll(testRoll.roll(1)))).not.to.equal(0);
  });
});

describe("Computer", function() {
  it("Confirms Computer constructor is correct", function() {
    var testComputer = new Computer();
    var testRoll = new DiceRoll();

    expect(testComputer.saveScore(testComputer.updateCurrentRoll(testRoll.roll(1)))).not.to.equal(0);
  });

  it("tests the Computer.playTurn method", function() {
    var testComputer = new Computer();
    testComputer.playTurn();
  });
});

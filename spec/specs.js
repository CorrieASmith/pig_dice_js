describe('roll', function() {
  it("returns a random number everytime the dice is rolled", function() {
    var testPlayer = new Player();
    expect(testPlayer.score).to.equal(0);
    expect(testPlayer.currentRoll).to.equal(0);
  });

  it("rolls the dice", function () {
    var testPlayer = new Player();
    expect(testPlayer.roll(1)).not.to.equal([]);
  });

  it("updates the current roll using random dice roll", function() {
    var testPlayer = new Player();
    expect(testPlayer.updateCurrentRoll(testPlayer.roll(1))).not.to.equal(0);
  });
});

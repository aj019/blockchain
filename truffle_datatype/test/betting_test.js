var MultiNumberBettingV1 =  artifacts.require('./MultiNumberBettingV1.sol');

contract('MultiNumberBettingV1', function(accounts) {
  it("should assert true", function() {
    var multiNumberBetting;
    return MultiNumberBettingV1.deployed().then(function(instance){
      multiNumberBetting = instance;
      return multiNumberBetting.totalGuesses.call();
    }).then(function(guesses){
      assert.equal(guesses.valueOf(),0,"Guesses: 0");
      return multiNumberBetting.guess.call(2);
    }).then(function(result){
      assert.equal(result.valueOf(),true,"Number Exists");
      return multiNumberBetting.totalGuesses.call();
    }).then(function(guesses){
      assert.equal(guesses.valueOf(),1,"Guesses: 1");
    });
  });

//   it("after calling guess of 2, the result should be true, and the total guesses should be 1", function() {
//     var multiNumberBetting;
//     return MultiNumberBettingV1.deployed().then(function(instance){
//         multiNumberBetting = instance;
//         return multiNumberBetting.guess.call(2);
//     }).then(function () {
//         assert.equal(result.valueOf(), true, "return value should be true");
//         return multiNumberBetting.totalGuesses.call();
//     }).then(function (result) {
//         assert.equal(result.valueOf(), 1, "Total Guesses should now be 1");
//     });
// });
});

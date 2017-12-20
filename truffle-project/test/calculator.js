var Calculator = artifacts.require("./Calculator.sol");

contract('Calculator', function(accounts) {

//Test1 - result is initialised to 10
  it("should assert true", function() {
    var calculator;
    return Calculator.deployed().then(function(instance){
      calculator = instance;
      return calculator.getResult.call();
    }).then(function(result){
      assert.equal(result.valueOf(),10,"Contract Initialised with value 10");
      calculator.addToNumber(10);
      calculator.substractNumber(5);
      return calculator.getResult.call();
    }).then(function(result){
      assert.equal(result.valueOf(),15,"Value not 15");
    });

  });




});

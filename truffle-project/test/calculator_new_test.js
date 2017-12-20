var Calculator =  artifacts.require('./Calculator.sol');

contract('Calculator',function(accounts){

    it('should_asset_true',function(){
        var calculator;
        return Calculator.deployed().then(function(instance){
          calculator = instance;
          return calculator.getResult.call();
        }).then(function(result){
          assert.equal(result.valueOf(),10,'Contract Initialised with value 10');
          calculator.double();
          return calculator.getResult.call();
        }).then(function(doubled_value){
          assert.equal(doubled_value.valueOf(),20,'Should be 20');
        });
    });
});

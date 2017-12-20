var migrations = artifacts.require("./MultiNumberBettingV1.sol");

module.exports = function(deployer){
  deployer.deploy(migrations,1,2,3);
}

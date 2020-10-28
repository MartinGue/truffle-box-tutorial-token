var TutorialToken = artifacts.require("./TutorialToken.sol");
var ERC20 = artifacts.require("./ERC20.sol");
//var TutorialToken = artifacts.require("./TutorialToken.sol");
//var TutorialToken = artifacts.require("./TutorialToken.sol");



module.exports = function(deployer) {
  deployer.deploy(TutorialToken);
  deployer.deploy(ERC20);
 // deployer.deploy(TutorialToken);
 // deployer.deploy(TutorialToken);
};
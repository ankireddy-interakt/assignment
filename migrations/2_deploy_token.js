const Token = artifacts.require("ERCToken");

// using openzeppelin library contract
module.exports = function (deployer) {
    const name = "Test Token";
    const symbol = "TES";
    const supply = 1000000000;
  deployer.deploy(Token, name, symbol, supply);
};

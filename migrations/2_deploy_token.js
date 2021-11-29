const Token = artifacts.require("ERCToken");

module.exports = function (deployer) {
    const name = "Test Token";
    const symbol = "TES";
    const supply = 1000000000; //1 Billion
  deployer.deploy(Token, name, symbol, supply);
};

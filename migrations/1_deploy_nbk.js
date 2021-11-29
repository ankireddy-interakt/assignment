const Token = artifacts.require("NBK");

module.exports = function (deployer) {
    const name = "BNK Token";
    const symbol = "NBK";
    const supply = 10000000; // 10 Million
  deployer.deploy(Token, name, symbol, supply);
};

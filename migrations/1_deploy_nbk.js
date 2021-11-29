const Token = artifacts.require("NBK");

//without using openzeppelin library
module.exports = function (deployer) {
    const name = "BNK Token";
    const symbol = "NBK";
    const supply = 10000000; 
  deployer.deploy(Token, name, symbol, supply);
};

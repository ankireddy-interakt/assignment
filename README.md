# assignment
Follow below steps to deploy contracts in  rinkeby network

export PRIVATE_KEY= "private key of wallet"
export ETHERSCAN_API_KEY="etherscan API key"


install node modules  
 npm install

To Compile contracts use
 truffle compile

To deploy contracts
 truffle deploy --network rinkeby

To verify contract code in etherscan use

 truffle run verify ERCToken --network rinkeby
 truffle run verify NBK --network rinkeby
 
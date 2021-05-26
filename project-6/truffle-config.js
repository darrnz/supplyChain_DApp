const HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = 'fb92425241dd462590f505fc0096ecbe' //process.env.INFURA_KEY;
const dotenv = require('dotenv')
const fs = require('fs');
const mnemonic = "smile direct blade legal coil domain furnace floor win scale final wire";
//0x46d4180DaD39554FD11C7C63dF7aa1e04DA62C77 contratac
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
      networkCheckTimeout: 1000000 
    }
  },
  compilers:{
    solc:{
      version: "^0.4.24"
    }
  }
};
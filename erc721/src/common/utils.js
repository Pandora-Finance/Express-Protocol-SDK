const UTILS = {
  addressDict: {
    4: {
      PNDC_ADDRESS: "0x5484b4aee713de7845b2EDD70a7f3DF9c7d759d2",
      TOKENFACTORY_ADDRESS: "0xF445100E121a1a482fa51C68B666C097f358E83F",
    },
    3: {
      PNDC_ADDRESS: "0x0A8E0d51703ACa633B2c81c09e426baDCA9Ec7bC",
      TOKENFACTORY_ADDRESS: "0x5484b4aee713de7845b2EDD70a7f3DF9c7d759d2",
    },
    97: {
      PNDC_ADDRESS: "0xA7947BfBb94dFbE543972b17560055c01C042Ad3",
      TOKENFACTORY_ADDRESS: "0x461e4431d7EB7461778DED88A315CB07D20d30Fb",
    },
  },
  accounts: async (web3) => {
    return await web3.eth.getAccounts();
  },
  PNDC_instance: async (web3, chainId, abi) => {
    return new web3.eth.Contract(abi, UTILS.PNDC_ADDRESS(chainId));
  },
  TOKENFACTORY_instance: async (web3, chainId, abi) => {
    return new web3.eth.Contract(abi, UTILS.TOKENFACTORY_ADDRESS(chainId));
  },
  TOKENERC721_instance: async (web3, abi, collectionAddress) => {
    return new web3.eth.Contract(abi, collectionAddress);
  },
  PNDC_ADDRESS: (id) => {
    return UTILS.addressDict[id].PNDC_ADDRESS;
  },
  TOKENFACTORY_ADDRESS: (id) => {
    return UTILS.addressDict[id].TOKENFACTORY_ADDRESS;
  },
};

module.exports = UTILS;

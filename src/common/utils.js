const UTILS = {
  addressDict: {
    4: {
      PNDC_ADDRESS: "0x86c3856c4E5a03a2367b3AE9e3949d98c909CC41",
      TOKENFACTORY_ADDRESS: "0xC34a5FB2d84Cb89DC5Bb4FBCC3E93Ed200d0ADD9",
    },
    3: {
      PNDC_ADDRESS: "0xF29bdD5259e4C4F2c5279713f9f82941affa1569",
      TOKENFACTORY_ADDRESS: "0x218985c4f4e5BD9eeC984A1648d9f1a1E0bDbaE3",
    },
    97: {
      PNDC_ADDRESS: "0x35aBda82fbAbe8Ea1D2993AAC65a5724108529aB",
      TOKENFACTORY_ADDRESS: "0xB5C1F7cc9D7e70b774252cf1581D60D559338004",
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

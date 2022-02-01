const UTILS = {
  addressDict: {
    4: {
      PNDC_ADDRESS: "0xF08701574D7dfcAaBC3cCD583A89097543EE7A6E",
      TOKENFACTORY_ADDRESS: "0x296B7CEDf99b402C3006507137159E0c732F8B2c",
    },
    3: {
      PNDC_ADDRESS: "0x2879b12c89065A3da79C7358a8ba5B4df36B6a7a",
      TOKENFACTORY_ADDRESS: "0xF3A5a0d2C238A05D5dC72F4c31De8A35cD0b696a",
    },
    97: {
      PNDC_ADDRESS: "0xC06F081298B87B4f564DDD68338d2Ad5747A29Ac",
      TOKENFACTORY_ADDRESS: "0x8605eC325905909E80a252Fb962512e82781d3D3",
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

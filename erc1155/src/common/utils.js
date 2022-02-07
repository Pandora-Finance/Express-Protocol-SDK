const UTILS = {
  addressDict: {
    4: {
      PNDC1155_ADDRESS: "0x218985c4f4e5BD9eeC984A1648d9f1a1E0bDbaE3",
      TOKENFACTORY1155_ADDRESS: "0xA5a6f57eE8996284C1A19b551F684B0a3bc038da",
    },
    3: {
      PNDC1155_ADDRESS: "0xc51690237B28b9aE8501b642bC59D38e11cD9A44",
      TOKENFACTORY1155_ADDRESS: "0x4e38b962783233d82fc8463C0198B240A8a04785",
    },
    97: {
      PNDC1155_ADDRESS: "0x7Bcad0d8B02A585197fd883cCd5a8f2B86a77145",
      TOKENFACTORY1155_ADDRESS: "0x34f33EbCC8Cf8291b0937067A8B9Cf17492bE86c",
    },
  },
  accounts: async (web3) => {
    return await web3.eth.getAccounts();
  },
  PNDC1155_instance: async (web3, chainId, abi) => {
    return new web3.eth.Contract(abi, UTILS.PNDC1155_ADDRESS(chainId));
  },
  TOKENFACTORY1155_instance: async (web3, chainId, abi) => {
    return new web3.eth.Contract(abi, UTILS.TOKENFACTORY1155_ADDRESS(chainId));
  },
  TOKENERC1155_instance: async (web3, abi, collectionAddress) => {
    return new web3.eth.Contract(abi, collectionAddress);
  },
  PNDC1155_ADDRESS: (id) => {
    return UTILS.addressDict[id].PNDC1155_ADDRESS;
  },
  TOKENFACTORY1155_ADDRESS: (id) => {
    return UTILS.addressDict[id].TOKENFACTORY1155_ADDRESS;
  },
};

module.exports = UTILS;

const UTILS = {
  addressDict: {
    4: {
      PNDC_ADDRESS: "0x4e38b962783233d82fc8463C0198B240A8a04785",
      TOKENFACTORY_ADDRESS: "0xB1664F0fd9ED1f77958b8c0d4A92E976c4c9645b",
    },
    3: {
      PNDC_ADDRESS: "0x4DB35e88B835D6a8e4E1C67C7AF04673b72CF7E1",
      TOKENFACTORY_ADDRESS: "0xda5e60aD25743877B10FfA010cbbF84ef0A70557",
    },
    97: {
      PNDC_ADDRESS: "0x49530B4b0C3798beFEE170E9068168312Dd2b1B6",
      TOKENFACTORY_ADDRESS: "0x7A2104889087Ce1629fF5e922A4A6aA0c2DcCeFe",
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

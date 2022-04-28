const UTILS = {
  addressDict: {
    4: {
      PNDC_ADDRESS: "0x844c85FdE6db6fFC38Bbd8dF9151058C16dE82A0",
      TOKENFACTORY_ADDRESS: "0x5424b525dB9a11cf6285DC86370E02D70BC1850e",
    },
    3: {
      PNDC_ADDRESS: "0xA030067D89a71129eEB5Fb376d26a0CFDcAcc2CA",
      TOKENFACTORY_ADDRESS: "0x6bbE3968fA152D1C365bf34646C714CA6d834fE5",
    },
    97: {
      PNDC_ADDRESS: "0xA7ac3dB5CA61ebDbf9B9C391fB47f1Adc9B584C0",
      TOKENFACTORY_ADDRESS: "0x1fAb10F343Ca6A59177e063449aC4BdbE4592208",
    },
    80001: {
      PNDC_ADDRESS: "0x1185d5C3343833B197e4cA336604960d6cEF99ba",
      TOKENFACTORY_ADDRESS: "0xb52ef85Dc320371b7E615A2aF9eCeE475Cf49302"
    }
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

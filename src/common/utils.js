const UTILS = {
  
  addressDict : {
    4: {
      'PNDC_ADDRESS': "0x58E569F2ef95941e61FA406349b58B39bC053dD4",
      'TOKENFACTORY_ADDRESS': "0x41017767EF7fFE313E9633b6b7F94D2A4AFAf1eb",
    },
    3: {
      'PNDC_ADDRESS': "0xE21FD7fA621044966C8a03f1130459C53b44f8B6",
      'TOKENFACTORY_ADDRESS': "0xb6ed425AC1fa6E62bCC407B508903B7df812E4a1",
    },
    97: {
      'PNDC_ADDRESS': "0x29bF1466BA95bBd16186cFF35876634544F3A10C",
      'TOKENFACTORY_ADDRESS': "0x7D26e441dde407CEC55F73002386416FF286bB9F",
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
    return UTILS.addressDict[id].PNDC_ADDRESS
  },
  TOKENFACTORY_ADDRESS: (id) => {
    return UTILS.addressDict[id].TOKENFACTORY_ADDRESS
  }

};

module.exports = UTILS;

const UTILS = {
  addressDict: {
    4: {
      PNDC_ADDRESS: "0x43d3f801CE177dD430A12Cfd59564eBF301F3219",
      TOKENFACTORY_ADDRESS: "0x0C007a6e21567e026d25B8AF5D2Ef24239E1E2C5",
    },
    3: {
      PNDC_ADDRESS: "0x3D9241cfF359a556c9F4fF5B4063C8d851F50b95",
      TOKENFACTORY_ADDRESS: "0xaE939dC64c92255F201e14D497Ae00Ea05fBD2FD",
    },
    97: {
      PNDC_ADDRESS: "0x802A065B6516cAE3677fA8d4dDF707bF18C756D5",
      TOKENFACTORY_ADDRESS: "0x1F75192aeC5F2660B516976AA98fDA3a85Ef339B",
    },
    80001: {
      PNDC_ADDRESS: "0x35F6CFfb6D90EFAAe6386f4D0615104aABA5E174",
      TOKENFACTORY_ADDRESS: "0xAaEba8F28E2639166Ca454e58bAE6cd926FD3A84"
    },
    137: {
      PNDC_ADDRESS: "0x0e0b8584eAeA6437E7C0DCD1aBECe8Afc5Ecbd3c",
      TOKENFACTORY_ADDRESS: "0x61F00961C93996ccDA116d8a64F38894C34a1721"
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

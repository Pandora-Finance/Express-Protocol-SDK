const UTILS = {
  addressDict: {
    4: {
      PNDC1155_ADDRESS: "0x2C4F29f1a90d05a6462eA1986E58Dd0f620b1A5F",
      TOKENFACTORY1155_ADDRESS: "0xB2Ca3F64373FEDe9f6Fd543cf93E93fe10c1D174",
    },
    3: {
      PNDC1155_ADDRESS: "0x517D3e425a6694e0800a610b927738B6d8b64551",
      TOKENFACTORY1155_ADDRESS: "0x00612b8e963298cc8a2378881c5e9a9F493a023f",
    },
    97: {
      PNDC1155_ADDRESS: "0x6E253D121471a65DAFa0637E31E8F42c7041cE99",
      TOKENFACTORY1155_ADDRESS: "0x43d3f801CE177dD430A12Cfd59564eBF301F3219",
    },
    80001: {
      PNDC1155_ADDRESS: "0x861191f84257F9358a55030937c893Db5f1C4442",
      TOKENFACTORY1155_ADDRESS:"0x359E96eE4a092CbF2930aFeD87332dB321259610"
    },
    137: {
      PNDC_ADDRESS: "0xD10c61366825d623513a9126d8dC3eDF5A85C56d",
      TOKENFACTORY_ADDRESS: "0xC549B90851371cB5BEe4f3711551BBe478da4D3d"
    }
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

const UTILS = {
  addressDict: {
    4: {
      PNDC1155_ADDRESS: "0x4479119285e6f1f7659Edf59a521daF6B91D333f",
      TOKENFACTORY1155_ADDRESS: "0xE19422be800438971e80b783eB67114640df9924",
    },
    3: {
      PNDC1155_ADDRESS: "0xc9563038aC3417FDAAF54CE622d969AFDBE4290e",
      TOKENFACTORY1155_ADDRESS: "0x66d7e443E433cA01693954e20f8ACD6dF3627627",
    },
    97: {
      PNDC1155_ADDRESS: "0x359E96eE4a092CbF2930aFeD87332dB321259610",
      TOKENFACTORY1155_ADDRESS: "0x3AB0eBa9CC599266AfD610E17400C84656B724eB",
    },
    80001: {
      PNDC1155_ADDRESS: "0x4731b6820926f443d120f17ac1ca5cb7522954fb",
      TOKENFACTORY1155_ADDRESS:"0x656ae3e005e891204d44499942ab7845943500bc"
    },
    137: {
      PNDC1155_ADDRESS: "0xB567c935629B847781Db8865961bAf2049EfABE6",
      TOKENFACTORY1155_ADDRESS: "0x36F891d3A6108f40f8eA3679356942C75925f28B"
    },
    56: {
      PNDC1155_ADDRESS: "0xB567c935629B847781Db8865961bAf2049EfABE6",
      TOKENFACTORY1155_ADDRESS: "0x36F891d3A6108f40f8eA3679356942C75925f28B"
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

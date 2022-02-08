const UTILS = {
  addressDict: {
    4: {
      PNDC1155_ADDRESS: "0x5e7EaeE8a62a0EA61c1C10d0Bc8FD0e3b59602A4",
      TOKENFACTORY1155_ADDRESS: "0x1d51F0624CF43c5678Bcae91D05aC7a053Dcbe18",
    },
    3: {
      PNDC1155_ADDRESS: "0xc010BE43b32068906AA1f32b62569D510E8aFB0b",
      TOKENFACTORY1155_ADDRESS: "0xcD91beE7c6E7996F231Bc2b4641F24cAECE7ddc7",
    },
    97: {
      PNDC1155_ADDRESS: "0x4921601E7Eb7605644f6e6837D1537F03f272A7D",
      TOKENFACTORY1155_ADDRESS: "0x27463f6EFe556064eB91017Af426a0cAEd83d048",
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

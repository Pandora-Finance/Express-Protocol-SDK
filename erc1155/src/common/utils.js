const UTILS = {
  addressDict: {
    4: {
      PNDC1155_ADDRESS: "0xFC3d50f3cfd54B571cf1352FA89cD6cf6369eEF5",
      TOKENFACTORY1155_ADDRESS: "0xeE011b50B43d21BF8E2Ac5E8538606caF5B71554",
    },
    3: {
      PNDC1155_ADDRESS: "0xF2a57828b689d6390C568Cbb85d8fe771d06F11D",
      TOKENFACTORY1155_ADDRESS: "0xa437B79b570500D2d52ECb3c370aE367D85F558A",
    },
    97: {
      PNDC1155_ADDRESS: "0x15EFeed075B201fcA678E6d20FED4851BEf63c4f",
      TOKENFACTORY1155_ADDRESS: "0x08835866c5f82a534F870aE8E070191dD72cB07e",
    },
    80001: {
      PNDC1155_ADDRESS: "0xbaE50e39813467f940bdf6c3B65aa02926293Ac9",
      TOKENFACTORY1155_ADDRESS:"0xaE33F52288625841337B4c5dB5a9426D718feC21"
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

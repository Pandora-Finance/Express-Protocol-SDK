const UTILS = {
  addressDict: {
    4: {
      PNDC1155_ADDRESS: "0x364C0667b816a35DB1a83415CAf7c37a19E20277",
      TOKENFACTORY1155_ADDRESS: "0xD5BF6DB2E813cA5bD3e34517Bf0cC0AB833F250A",
    },
    3: {
      PNDC1155_ADDRESS: "0x201C971C8113B17267D530f841A1F1B617aeFCaC",
      TOKENFACTORY1155_ADDRESS: "0x364C0667b816a35DB1a83415CAf7c37a19E20277",
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

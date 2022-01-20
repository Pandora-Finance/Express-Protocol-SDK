const UTILS = {
  
  addressDict : {
    4: {
      'PNDC_ADDRESS': "0xEC123143a48c2E002889661660855fD7724a1f42",
      'TOKENFACTORY_ADDRESS': "0x092bEe49A006D4Fb2bDd17903604978DF0660B89",
    },
    3: {
      'PNDC_ADDRESS': "0x9b0aCa2111549036d371CBA999A5C5e3a4d9f53A",
      'TOKENFACTORY_ADDRESS': "0x722b8708C16295aCf005F40681e31891afeFb94F",
    },
    97: {
      'PNDC_ADDRESS': "0x9095Ee504caeADfdA6EA81Ee8EC625a5827a6BF2",
      'TOKENFACTORY_ADDRESS': "0x675056CeEBE35C6c6aB46d7a099CAfEADe153De1",
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

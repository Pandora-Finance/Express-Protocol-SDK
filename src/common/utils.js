const UTILS = {
  accounts: async (web3) => {
    return await web3.eth.getAccounts();
  },
  PNDC_instance: async (web3, abi) => {
    return new web3.eth.Contract(abi, UTILS.PNDC_ADDRESS());
  },
  TOKENFACTORY_instance: async (web3, abi) => {
    return new web3.eth.Contract(abi, UTILS.TOKENFACTORY_ADDRESS());
  },
  TOKENERC721_instance: async (web3, abi, collectionAddress) => {
    return new web3.eth.Contract(abi, collectionAddress);
  },
  PNDC_ADDRESS: () => {
    return "0xEC123143a48c2E002889661660855fD7724a1f42";
  },
  TOKENFACTORY_ADDRESS: () => {
    return "0x092bEe49A006D4Fb2bDd17903604978DF0660B89";
  }

};

module.exports = UTILS;

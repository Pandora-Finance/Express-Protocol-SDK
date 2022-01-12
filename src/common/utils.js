const UTILS = {
  accounts: async (web3) => {
    return await web3.eth.getAccounts();
  },
  PNDC_instance: async (web3, abi) => {
    console.log("enc", process.env.PNDC_ADDRESS);
    return new web3.eth.Contract(abi, process.env.PNDC_ADDRESS);
  },
  TOKENFACTORY_instance: async (web3, abi) => {
    return new web3.eth.Contract(abi, process.env.TOKENFACTORY_ADDRESS);
  },
  TOKENERC721_instance: async (web3, abi, collectionAddress) => {
    return new web3.eth.Contract(abi, collectionAddress);
  },
};

module.exports = UTILS;

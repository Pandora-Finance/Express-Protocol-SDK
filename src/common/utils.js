const UTILS = {
    accounts: async (web3) =>{
        return await web3.eth.getAccounts();
    },
    PNDC_instance: async (web3, abi) => {
        console.log('enc',process.env.PNDC_ADDRESS);
        return new web3.eth.Contract(abi,process.env.PNDC_ADDRESS);
        // return new web3(abi, process.env.PNDC_ADDRESS);
    },
    TOKENFACTORY_instance: async (web3, abi) => {
        return new web3.eth.Contract(abi,process.env.TOKENFACTORY_ADDRESS); 
        // return new web3(abi, process.env.TOKENFACTORY_ADDRESS);
    },
    get_PNDC_abi: () => {
        return require('../../contracts/build/contracts/PNDC_ERC721.json').abi;
    },
    get_TokenFactory_abi: () =>{
        return require('../../contracts/build/contracts/TokenFactory.json').abi;
    }
}

module.exports = UTILS;
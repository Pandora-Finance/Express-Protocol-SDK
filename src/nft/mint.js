const UTILS = require('../common/utils');

const mint = async (web3, minterAddress, tokenURI, royalties) => {

  const PNDC_instance = await UTILS.PNDC_instance(web3,  UTILS.get_PNDC_abi());
  
  let result = await PNDC_instance.methods
    .safeMint(minterAddress, tokenURI, royalties)
    .send({ from: minterAddress });
    
  console.log(result);

};

module.exports = { mint };











// let result = await PNDC_instance.methods
  //   .safeMint(accounts[2], "URI", [[accounts[2], 500]])
  //   .send({ from: accounts[0] });

  // let accounts = await UTILS.accounts(web3);

const UTILS = require("../common/utils");
const { PNDC_ABI } = require("../../abi/pndc");

const mint = async (web3, chainId, minterAddress, tokenURI, royalties) => {

  const PNDC_instance = await UTILS.PNDC_instance(web3, chainId, PNDC_ABI);

  let result = await PNDC_instance.methods
    .safeMint(minterAddress, tokenURI, royalties)
    .send({ from: minterAddress });

  console.log(result);
  return result;
};

module.exports = { mint };

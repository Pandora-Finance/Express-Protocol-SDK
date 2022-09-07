const UTILS = require("../common/utils");
const { PNDC_ABI } = require("../../abi/pndc");

const transferNFT = async (web3, chainId, fromAddress, toAddress, tokenId) => {
  const PNDC_instance = await UTILS.PNDC_instance(web3, chainId, PNDC_ABI);

  let result = await PNDC_instance.methods
    .safeTransferFrom(fromAddress, toAddress, tokenId)
    .send({ from: fromAddress });

  console.log(result);

  return result;
};

module.exports = { transferNFT };

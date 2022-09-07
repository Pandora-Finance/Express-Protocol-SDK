const UTILS = require("../common/utils");
const { PNDC1155_ABI } = require("../../abi/pndc1155");

const transferNFT = async (web3, chainId, fromAddress, toAddress, tokenId, amount) => {
  const PNDC1155_instance = await UTILS.PNDC1155_instance(web3, chainId, PNDC1155_ABI);

  let result = await PNDC1155_instance.methods
    .safeTransferFrom(fromAddress, toAddress, tokenId, amount, [])
    .send({ from: fromAddress });

  console.log(result);

  return result;
};

module.exports = { transferNFT };

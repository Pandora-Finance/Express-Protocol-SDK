const UTILS = require("../common/utils");
const { PNDC1155_ABI } = require("../../abi/pndc1155");

const mint = async (
  web3,
  chainId,
  minterAddress,
  tokenAmount,
  tokenURI,
  royalties
) => {
  const PNDC1155_instance = await UTILS.PNDC1155_instance(
    web3,
    chainId,
    PNDC1155_ABI
  );

  let result = await PNDC1155_instance.methods
    .mint(minterAddress, tokenAmount, [], tokenURI, royalties)
    .send({ from: minterAddress });

  console.log(result);
  return result;
};

const burn = async (web3, chainId, ownerAddress, tokenId, tokenAmount) => {
  const PNDC1155_instance = await UTILS.PNDC1155_instance(
    web3,
    chainId,
    PNDC1155_ABI
  );

  let result = await PNDC1155_instance.methods
    .burn(tokenId, tokenAmount)
    .send({ from: ownerAddress });

  console.log(result);
  return result;
};

module.exports = { mint, burn };

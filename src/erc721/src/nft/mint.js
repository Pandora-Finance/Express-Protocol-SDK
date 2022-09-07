const UTILS = require("../common/utils");
const { PNDC_ABI } = require("../../abi/pndc");
const { royalties2d, royalties3d } = require("../../../utilities/royalities");

const mint = async (web3, chainId, minterAddress, tokenURI, royalties) => {
  const PNDC_instance = await UTILS.PNDC_instance(web3, chainId, PNDC_ABI);

  let royalitiesList = await royalties2d(royalties);
  console.log(royalitiesList);
  let result = await PNDC_instance.methods
    .safeMint(minterAddress, tokenURI, royalitiesList)
    .send({ from: minterAddress });

  console.log(result);
  return result;
};

const batchMint = async (
  web3,
  chainId,
  minterAddress,
  totalNFT,
  uriArray,
  royalties
) => {
  const PNDC_instance = await UTILS.PNDC_instance(web3, chainId, PNDC_ABI);

  let royalitiesList = await royalties3d(royalties);
  console.log(royalitiesList);

  let result = await PNDC_instance.methods
    .batchMint(totalNFT, uriArray, royalitiesList)
    .send({ from: minterAddress });

  console.log(result);
  return result;
};

const burn = async (web3, chainId, minterAddress, tokenId) => {
  const PNDC_instance = await UTILS.PNDC_instance(web3, chainId, PNDC_ABI);

  let result = await PNDC_instance.methods
    .burn(tokenId)
    .send({ from: minterAddress });

  console.log(result);
  return result;
};

module.exports = { mint, batchMint, burn };

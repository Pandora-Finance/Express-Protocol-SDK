const UTILS = require("../common/utils");
const { PNDC_ABI } = require("../../abi/pndc");
const { TokenFactory_ABI } = require("../../abi/tokenfactory");

const sellNFT = async (web3, chainId, tokenId, price, sellerAddress) => {
  const PNDC_instance = await UTILS.PNDC_instance(web3, chainId, PNDC_ABI);

  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    chainId,
    TokenFactory_ABI
  );

  await PNDC_instance.methods
    .approve(UTILS.TOKENFACTORY_ADDRESS(chainId), tokenId)
    .send({ from: sellerAddress });
  console.log("approved");
  let result = await tokenFactoryInstance.methods
    .sellNFT(UTILS.PNDC_ADDRESS(chainId), tokenId, price)
    .send({ from: sellerAddress });

  console.log(result);

  return result;
};

const sellNFTbyBid = async (
  web3,
  chainId,
  tokenId,
  price,
  ownerAddress,
  bidTime
) => {
  const PNDC_instance = await UTILS.PNDC_instance(web3, chainId, PNDC_ABI);

  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    chainId,
    TokenFactory_ABI
  );

  await PNDC_instance.methods
    .approve(UTILS.TOKENFACTORY_ADDRESS(chainId), tokenId)
    .send({ from: ownerAddress });
  let result = await tokenFactoryInstance.methods
    .SellNFT_byBid(UTILS.PNDC_ADDRESS(chainId), tokenId, price, bidTime)
    .send({ from: ownerAddress });

  console.log(result);
  return result;
};

const cancelSale = async (web3, chainId, ownerAddress, saleId) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    chainId,
    TokenFactory_ABI
  );

  let result = await tokenFactoryInstance.methods
    .cancelSale(saleId)
    .send({ from: ownerAddress });

  console.log(result);
  return result;
};

module.exports = { sellNFT, sellNFTbyBid, cancelSale };

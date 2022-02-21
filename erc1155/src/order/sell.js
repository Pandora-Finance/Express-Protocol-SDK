const UTILS = require("../common/utils");
const { PNDC1155_ABI } = require("../../abi/pndc1155");
const { TokenFactory1155_ABI } = require("../../abi/tokenfactory1155");

const sellNFT = async (
  web3,
  chainId,
  tokenId,
  price,
  sellerAddress,
  tokenAmount
) => {
  const PNDC1155_instance = await UTILS.PNDC1155_instance(
    web3,
    chainId,
    PNDC1155_ABI
  );

  const tokenFactory1155Instance = await UTILS.TOKENFACTORY1155_instance(
    web3,
    chainId,
    TokenFactory1155_ABI
  );

  await PNDC1155_instance.methods
    .setApprovalForAll(UTILS.TOKENFACTORY1155_ADDRESS(chainId), true)
    .send({ from: sellerAddress });
  console.log("approved");
  let result = await tokenFactory1155Instance.methods
    .sellNFT(UTILS.PNDC1155_ADDRESS(chainId), tokenId, price, tokenAmount)
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
  tokenAmount
) => {
  const PNDC1155_instance = await UTILS.PNDC1155_instance(
    web3,
    chainId,
    PNDC1155_ABI
  );

  const tokenFactory1155Instance = await UTILS.TOKENFACTORY1155_instance(
    web3,
    chainId,
    TokenFactory1155_ABI
  );

  await PNDC1155_instance.methods
    .setApprovalForAll(UTILS.TOKENFACTORY1155_ADDRESS(chainId), true)
    .send({ from: ownerAddress });
  let result = await tokenFactory1155Instance.methods
    .SellNFT_byBid(UTILS.PNDC1155_ADDRESS(chainId), tokenId, price, tokenAmount)
    .send({ from: ownerAddress });

  console.log(result);
  return result;
};

const cancelSale = async (web3, chainId, ownerAddress, saleId) => {
  const tokenFactory1155Instance = await UTILS.TOKENFACTORY1155_instance(
    web3,
    chainId,
    TokenFactory1155_ABI
  );

  let result = await tokenFactory1155Instance.methods
    .cancelSale(saleId)
    .send({ from: ownerAddress });

  console.log(result);
  return result;
};

module.exports = { sellNFT, sellNFTbyBid, cancelSale };

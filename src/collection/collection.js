const UTILS = require("../common/utils");
const {PNDC_ABI} = require('../../abi/pndc');
const {TokenFactory_ABI} = require('../../abi/tokenfactory');
const {TokenERC721_ABI} = require("../../abi/tokenerc721");

const deployCollection = async (
  web3,
  deployerAddress,
  name,
  symbol,
  description,
  royalties
) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    TokenFactory_ABI
  );

  let result = await tokenFactoryInstance.methods
    .deployERC721(name, symbol, description, [[deployerAddress, royalties]])
    .send({ from: deployerAddress });

  console.log(result);
  return result;
};

const createInstance = async (web3, collectionAddress) => {
  const tokenERC721Instance = await UTILS.TOKENERC721_instance(
    web3,
    TokenERC721_ABI,
    collectionAddress
  );

  console.log(tokenERC721Instance);
  return tokenERC721Instance;
};

const mint = async (
  web3,
  collectionAddress,
  tokenURI,
  minterAddress,
  royalties
) => {
  const tokenERC721Instance = await createInstance(web3, collectionAddress);

  const result = await tokenERC721Instance.methods
    .safeMint(minterAddress, tokenURI, [true,[[minterAddress,royalties]]])
    .send({ from: minterAddress });

  console.log(result);
};

const sellNFT = async (
  web3,
  collectionAddress,
  tokenId,
  price,
  sellerAddress
) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    TokenFactory_ABI
  );
  const tokenERC721Instance = await createInstance(web3, collectionAddress);

  await tokenERC721Instance.methods
    .approve(UTILS.TOKENFACTORY_ADDRESS(), tokenId)
    .send({ from: sellerAddress });

  const result = await tokenFactoryInstance.methods
    .sellNFT(collectionAddress, tokenId, price)
    .send({ from: sellerAddress });

  console.log(result);
  return result;
};

const sellNFTbyBid = async (
  web3,
  collectionAddress,
  tokenId,
  price,
  ownerAddress,
  bidTime
) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    TokenFactory_ABI
  );
  const tokenERC721Instance = await createInstance(web3, collectionAddress);

  await tokenERC721Instance.methods
    .approve(UTILS.TOKENFACTORY_ADDRESS(), tokenId)
    .send({ from: ownerAddress });
  const result = await tokenFactoryInstance.methods
    .SellNFT_byBid(collectionAddress, tokenId, price, bidTime)
    .send({ from: ownerAddress });

  console.log(result);
  return result;
};

const cancelSale = async (web3, ownerAddress, saleId) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    TokenFactory_ABI
  );
  // const tokenERC721Instance = await createInstance(web3, collectionAddress);

  const result = await tokenFactoryInstance.methods
    .cancelSale(saleId)
    .send({ from: ownerAddress });

  console.log(result);
};

const buyNFT = async (web3, tokenId, buyerAddress, amount) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    TokenFactory_ABI
  );
  // const tokenERC721Instance = await createInstance(web3, collectionAddress);

  const result = await tokenFactoryInstance.methods
    .BuyNFT(tokenId)
    .send({ from: buyerAddress, value: amount });

  console.log(result);
  return result;
};

const bid = async (web3, tokenId, bidderAddress, price) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    TokenFactory_ABI
  );

  const result = await tokenFactoryInstance.methods
    .Bid(tokenId)
    .send({ from: bidderAddress, value: price });

  console.log(result);
  return result;
};

const acceptBid = async (web3, tokenId, bidId, ownerAddress) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    TokenFactory_ABI
  );
  const result = await tokenFactoryInstance.methods
    .executeBidOrder(tokenId, bidId)
    .send({ from: ownerAddress });

  console.log(result);
};

const withdrawBid = async (web3, tokenId, bidId, bidderAddress) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    TokenFactory_ABI
  );

  const result = await tokenFactoryInstance.methods
    .withdrawBidMoney(tokenId, bidId)
    .send({ from: bidderAddress });

  console.log(result);
  return result;
};

module.exports = {
  deployCollection,
  createInstance,
  mint,
  sellNFT,
  sellNFTbyBid,
  cancelSale,
  buyNFT,
  bid,
  acceptBid,
  withdrawBid,
};

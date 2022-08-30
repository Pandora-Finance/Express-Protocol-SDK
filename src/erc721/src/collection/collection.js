const UTILS = require("../common/utils");
const { TokenFactory_ABI } = require("../../abi/tokenfactory");
const { TokenERC721_ABI } = require("../../abi/tokenerc721");
const { royalties2d } = require("../../../utilities/royalities");


const deployCollection = async (
  web3,
  chainId,
  deployerAddress,
  name,
  symbol,
  description,
  royalties
) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    chainId,
    TokenFactory_ABI
  );

  let royalitiesList = await royalties2d(royalties);
  console.log(royalitiesList);

  let result = await tokenFactoryInstance.methods
    .deployERC721(name, symbol, description, royalitiesList)
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

  let royalitiesList = await royalties2d(royalties);
  console.log(royalitiesList);
  const result = await tokenERC721Instance.methods
    .safeMint(minterAddress, tokenURI, [true, royalitiesList])
    .send({ from: minterAddress });

  console.log(result);
  return result;
};

const batchMint = async (
  web3,
  collectionAddress,
  minterAddress,
  totalNFT,
  uriArray,
  royalties
) => {
  const tokenERC721Instance = await createInstance(web3, collectionAddress);

  let royalitiesList = await royalties2d(royalties);
  console.log(royalitiesList);

  const result = await tokenERC721Instance.methods
    .batchMint(totalNFT, uriArray, [true, royalitiesList])
    .send({ from: minterAddress });

  console.log(result);
  return result;
};

const burn = async (web3, collectionAddress, minterAddress, tokenId) => {
  const tokenERC721Instance = await createInstance(web3, collectionAddress);

  let result = await tokenERC721Instance.methods
    .burn(tokenId)
    .send({ from: minterAddress });

  console.log(result);
  return result;
};

const sellNFT = async (
  web3,
  chainId,
  collectionAddress,
  tokenId,
  price,
  sellerAddress
) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    chainId,
    TokenFactory_ABI
  );
  const tokenERC721Instance = await createInstance(web3, collectionAddress);

  await tokenERC721Instance.methods
    .approve(UTILS.TOKENFACTORY_ADDRESS(chainId), tokenId)
    .send({ from: sellerAddress });

  const result = await tokenFactoryInstance.methods
    .sellNFT(collectionAddress, tokenId, price)
    .send({ from: sellerAddress });

  console.log(result);
  return result;
};

const transferNFT = async (
  web3,
  chainId,
  collectionAddress,
  tokenId,
  fromAddress,
  toAddress
) => {
  const tokenERC721Instance = await createInstance(web3, collectionAddress);
  
  let result = await tokenERC721Instance.methods
    .safeTransferFrom(fromAddress, toAddress, tokenId)
    .send({ from: fromAddress });

  console.log(result);
  return result;
}

const sellNFTbyBid = async (
  web3,
  chainId,
  collectionAddress,
  tokenId,
  price,
  ownerAddress,
  bidTime
) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    chainId,
    TokenFactory_ABI
  );
  const tokenERC721Instance = await createInstance(web3, collectionAddress);

  await tokenERC721Instance.methods
    .approve(UTILS.TOKENFACTORY_ADDRESS(chainId), tokenId)
    .send({ from: ownerAddress });
  const result = await tokenFactoryInstance.methods
    .SellNFT_byBid(collectionAddress, tokenId, price, bidTime)
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
  // const tokenERC721Instance = await createInstance(web3, collectionAddress);

  const result = await tokenFactoryInstance.methods
    .cancelSale(saleId)
    .send({ from: ownerAddress });

  console.log(result);
  return result;
};

const buyNFT = async (web3, chainId, tokenId, buyerAddress, amount) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    chainId,
    TokenFactory_ABI
  );
  // const tokenERC721Instance = await createInstance(web3, collectionAddress);

  const result = await tokenFactoryInstance.methods
    .BuyNFT(tokenId)
    .send({ from: buyerAddress, value: amount });

  console.log(result);
  return result;
};

const bid = async (web3, chainId, tokenId, bidderAddress, price) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    chainId,
    TokenFactory_ABI
  );

  const result = await tokenFactoryInstance.methods
    .Bid(tokenId)
    .send({ from: bidderAddress, value: price });

  console.log(result);
  return result;
};

const acceptBid = async (web3, chainId, tokenId, bidId, ownerAddress) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    chainId,
    TokenFactory_ABI
  );
  const result = await tokenFactoryInstance.methods
    .executeBidOrder(tokenId, bidId)
    .send({ from: ownerAddress });

  console.log(result);
  return result;
};

const withdrawBid = async (web3, chainId, tokenId, bidId, bidderAddress) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    chainId,
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
  batchMint,
  burn,
  sellNFT,
  sellNFTbyBid,
  cancelSale,
  buyNFT,
  bid,
  acceptBid,
  withdrawBid,
  transferNFT
};

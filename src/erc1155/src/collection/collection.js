const UTILS = require("../common/utils");
const { TokenFactory1155_ABI } = require("../../abi/tokenfactory1155");
const { TokenERC1155_ABI } = require("../../abi/tokenerc1155");
const { royalties2d } = require("../../../utilities/royalities");

const deployCollection = async (
  web3,
  chainId,
  deployerAddress,
  uri,
  description,
  royalties
) => {
  const tokenFactory1155Instance = await UTILS.TOKENFACTORY1155_instance(
    web3,
    chainId,
    TokenFactory1155_ABI
  );

  let royalitiesList = await royalties2d(royalties);
  console.log(royalitiesList);

  let result = await tokenFactory1155Instance.methods
    .deployERC1155(uri, description, royalitiesList)
    .send({ from: deployerAddress });

  console.log(result);
  return result;
};

const createInstance = async (web3, collectionAddress) => {
  const tokenERC1155Instance = await UTILS.TOKENERC1155_instance(
    web3,
    TokenERC1155_ABI,
    collectionAddress
  );

  console.log(tokenERC1155Instance);
  return tokenERC1155Instance;
};

const mint = async (
  web3,
  collectionAddress,
  tokenId,
  tokenAmount,
  tokenURI,
  minterAddress
) => {
  const tokenERC1155Instance = await createInstance(web3, collectionAddress);

  const result = await tokenERC1155Instance.methods
    .mint(minterAddress, tokenId, tokenAmount, tokenURI, [])
    .send({ from: minterAddress });

  console.log(result);
  return result;
};

const burn = async (
  web3,
  collectionAddress,
  ownerAddress,
  tokenId,
  tokenAmount
) => {
  const tokenERC1155Instance = await createInstance(web3, collectionAddress);

  let result = await tokenERC1155Instance.methods
    .burn(tokenId, tokenAmount)
    .send({ from: ownerAddress });

  console.log(result);
  return result;
};

const sellNFT = async (
  web3,
  chainId,
  collectionAddress,
  tokenId,
  price,
  sellerAddress,
  tokenAmount
) => {
  const tokenFactory1155Instance = await UTILS.TOKENFACTORY1155_instance(
    web3,
    chainId,
    TokenFactory1155_ABI
  );
  const tokenERC1155Instance = await createInstance(web3, collectionAddress);

  await tokenERC1155Instance.methods
    .setApprovalForAll(UTILS.TOKENFACTORY1155_ADDRESS(chainId), true)
    .send({ from: sellerAddress });

  const result = await tokenFactory1155Instance.methods
    .sellNFT(collectionAddress, tokenId, price, tokenAmount)
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
  toAddress,
  amount
) => {
  const tokenERC1155Instance = await createInstance(web3, collectionAddress);

  let result = await tokenERC1155Instance.methods
    .safeTransferFrom(fromAddress, toAddress, tokenId, amount, [])
    .send({ from: fromAddress });

  console.log(result);
  return result;
};

const sellNFTbyBid = async (
  web3,
  chainId,
  collectionAddress,
  tokenId,
  price,
  ownerAddress,
  tokenAmount
) => {
  const tokenFactory1155Instance = await UTILS.TOKENFACTORY1155_instance(
    web3,
    chainId,
    TokenFactory1155_ABI
  );
  const tokenERC1155Instance = await createInstance(web3, collectionAddress);

  await tokenERC1155Instance.methods
    .setApprovalForAll(UTILS.TOKENFACTORY1155_ADDRESS(chainId), true)
    .send({ from: ownerAddress });
  const result = await tokenFactory1155Instance.methods
    .SellNFT_byBid(collectionAddress, tokenId, price, tokenAmount)
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

  const result = await tokenFactory1155Instance.methods
    .cancelSale(saleId)
    .send({ from: ownerAddress });

  console.log(result);
  return result;
};

const buyNFT = async (
  web3,
  chainId,
  saleId,
  buyerAddress,
  amount,
  tokenAmount
) => {
  const tokenFactory1155Instance = await UTILS.TOKENFACTORY1155_instance(
    web3,
    chainId,
    TokenFactory1155_ABI
  );

  const result = await tokenFactory1155Instance.methods
    .BuyNFT(saleId, tokenAmount)
    .send({ from: buyerAddress, value: amount });

  console.log(result);
  return result;
};

const bid = async (
  web3,
  chainId,
  saleId,
  bidderAddress,
  price,
  tokenAmount
) => {
  const tokenFactory1155Instance = await UTILS.TOKENFACTORY1155_instance(
    web3,
    chainId,
    TokenFactory1155_ABI
  );

  const result = await tokenFactory1155Instance.methods
    .Bid(saleId, tokenAmount)
    .send({ from: bidderAddress, value: price });

  console.log(result);
  return result;
};

const acceptBid = async (web3, chainId, saleId, bidId, ownerAddress) => {
  const tokenFactory1155Instance = await UTILS.TOKENFACTORY1155_instance(
    web3,
    chainId,
    TokenFactory1155_ABI
  );
  const result = await tokenFactory1155Instance.methods
    .executeBidOrder(saleId, bidId)
    .send({ from: ownerAddress });

  console.log(result);
  return result;
};

const withdrawBid = async (web3, chainId, saleId, bidId, bidderAddress) => {
  const tokenFactory1155Instance = await UTILS.TOKENFACTORY1155_instance(
    web3,
    chainId,
    TokenFactory1155_ABI
  );

  const result = await tokenFactory1155Instance.methods
    .withdrawBidMoney(saleId, bidId)
    .send({ from: bidderAddress });

  console.log(result);
  return result;
};

module.exports = {
  deployCollection,
  createInstance,
  mint,
  burn,
  sellNFT,
  sellNFTbyBid,
  cancelSale,
  buyNFT,
  bid,
  acceptBid,
  withdrawBid,
  transferNFT,
};

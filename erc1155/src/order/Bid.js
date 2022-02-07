const UTILS = require("../common/utils");
const { TokenFactory1155_ABI } = require("../../abi/tokenfactory1155");

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

  let result = await tokenFactory1155Instance.methods
    .Bid(saleId, tokenAmount)
    .send({ from: bidderAddress, value: price });

  console.log(result);
  return result;
};

const acceptBid = async (web3, chainId, tokenId, bidId, ownerAddress) => {
  const tokenFactory1155Instance = await UTILS.TOKENFACTORY1155_instance(
    web3,
    chainId,
    TokenFactory1155_ABI
  );
  let result = await tokenFactory1155Instance.methods
    .executeBidOrder(tokenId, bidId)
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

  let result = await tokenFactory1155Instance.methods
    .withdrawBidMoney(saleId, bidId)
    .send({ from: bidderAddress });

  console.log(result);
  return result;
};

module.exports = {
  bid,
  acceptBid,
  withdrawBid,
};

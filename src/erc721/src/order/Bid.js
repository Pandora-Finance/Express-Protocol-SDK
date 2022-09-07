const UTILS = require("../common/utils");
const { TokenFactory_ABI } = require("../../abi/tokenfactory");

const bid = async (web3, chainId, tokenId, bidderAddress, price) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    chainId,
    TokenFactory_ABI
  );

  let result = await tokenFactoryInstance.methods
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
  let result = await tokenFactoryInstance.methods
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

  let result = await tokenFactoryInstance.methods
    .withdrawBidMoney(tokenId, bidId)
    .send({ from: bidderAddress });

  console.log(result);
  return result;
};

module.exports = {
  bid,
  acceptBid,
  withdrawBid,
};

const UTILS = require("../common/utils");

const bid = async (web3, tokenId, bidderAddress, price) => {
  // let accounts = await web3.eth.getAccounts();
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    UTILS.get_TokenFactory_abi
  );

  // let result = await tokenFactoryInstance.methods
  //   .Bid(tokenId)
  //   .send({ from: accounts[2], value: price });
  let result = await tokenFactoryInstance.methods
    .Bid(tokenId)
    .send({ from: bidderAddress, value: price });

  return result;
};

const acceptBid = async (web3, tokenId, bidId, ownerAddress) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    UTILS.get_TokenFactory_abi
  );
  let result = await tokenFactoryInstance.methods
    .executeBidOrder(tokenId, bidId)
    .send({ from: ownerAddress });

  return result;
};

const withdrawBid = async (web3, tokenId, bidId, bidderAddress) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    UTILS.get_TokenFactory_abi
  );

  let result = await tokenFactoryInstance.methods
    .withdrawBidMoney(tokenId, bidId)
    .send({ from: bidderAddress });

  return result;
};

module.exports = {
  bid,
  acceptBid,
  withdrawBid,
};

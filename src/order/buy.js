const UTILS = require("../common/utils");
const buyNFT = async (web3, tokenId, buyerAddress, amount) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    UTILS.get_TokenFactory_abi
  );

  let result = await tokenFactoryInstance.methods
    .BuyNFT(tokenId)
    .send({ from: buyerAddress, value: amount });

  return result;
};

module.exports = {
  buyNFT,
};

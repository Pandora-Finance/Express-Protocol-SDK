const UTILS = require("../common/utils");
const { TokenFactory_ABI } = require("../../abi/tokenfactory");

const buyNFT = async (web3, chainId, tokenId, buyerAddress, amount) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    chainId,
    TokenFactory_ABI
  );

  let result = await tokenFactoryInstance.methods
    .BuyNFT(tokenId)
    .send({ from: buyerAddress, value: amount });

  console.log(result);
  return result;
};

module.exports = {
  buyNFT,
};

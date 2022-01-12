const UTILS = require("../common/utils");
const { TokenFactory_ABI } = require("../../abi/tokenfactory");

const buyNFT = async (web3, tokenId, buyerAddress, amount) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    TokenFactory_ABI
  );

  let result = await tokenFactoryInstance.methods
    .BuyNFT(tokenId)
    .send({ from: buyerAddress, value: amount });

  console.log(result);
};

module.exports = {
  buyNFT,
};

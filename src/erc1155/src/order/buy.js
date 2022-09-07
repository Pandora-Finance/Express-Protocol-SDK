const UTILS = require("../common/utils");
const { TokenFactory1155_ABI } = require("../../abi/tokenfactory1155");

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

  let result = await tokenFactory1155Instance.methods
    .BuyNFT(saleId, tokenAmount)
    .send({ from: buyerAddress, value: amount });

  console.log(result);
  return result;
};

module.exports = {
  buyNFT,
};

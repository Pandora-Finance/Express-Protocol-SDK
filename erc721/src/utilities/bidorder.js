const UTILS = require("../common/utils");
const { TokenFactory_ABI } = require("../../abi/tokenfactory");

const bidOrder = async (web3, chainId, saleId, ownerAddress) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    chainId,
    TokenFactory_ABI
  );

  const bidOrderList = [];
  let i = 0;
  while (true) {
    try {
      let result = await tokenFactoryInstance.methods
        .Bids(saleId, i)
        .call({ from: ownerAddress });
      bidOrderList.push(result);
      i++;
    } catch (err) {
      break;
    }
  }

  console.log(bidOrderList);
  return bidOrderList;
};

module.exports = {
  bidOrder,
};

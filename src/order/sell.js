const sellNFT = async (web3, tokenId, price, sellerAddress) => {
  const PNDC_instance = await UTILS.PNDC_instance(web3, UTILS.get_PNDC_abi());
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    UTILS.get_TokenFactory_abi
  );

  await PNDC_instance.methods
    .approve(TokenFactory_address, tokenId)
    .send({ from: sellerAddress });
  let result = await tokenFactoryInstance.methods
    .sellNFT(PNDC_address, tokenId, price)
    .send({ from: sellerAddress });
    
  return result;
};

const sellNFTbyBid = async (web3, tokenId, price, ownerAddress, bidTime) => {
  const PNDC_instance = await UTILS.PNDC_instance(web3, UTILS.get_PNDC_abi());
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    UTILS.get_TokenFactory_abi
  );

  await PNDC_instance.methods
    .approve(process.env.TOKENFACTORY_ADDRESS, tokenId)
    .send({ from: ownerAddress });
  let result = await tokenFactoryInstance.methods
    .SellNFT_byBid(PNDC_address, tokenId, price, bidTime)
    .send({ from: ownerAddress });

  return result;
};

const cancelSale = async (web3, ownerAddress, saleId) => {
  const tokenFactoryInstance = await UTILS.TOKENFACTORY_instance(
    web3,
    UTILS.get_TokenFactory_abi
  );

  let result = await tokenFactoryInstance.methods
    .cancelSale(saleId)
    .send({ from: ownerAddress });

  return result;
};

module.exports = { sellNFT, sellNFTbyBid, cancelSale };

const { mint, batchMint, burn } = require("./src/nft/mint");
const Buy = require("./src/order/buy");
const Sell = require("./src/order/sell");
const Bid = require("./src/order/Bid");
const Collection = require("./src/collection/collection");
const Pinata = require("./src/pinata/index");


export function createPandoraSDK(){
  return {
    order: {
      sellNFT: Sell.sellNFT,
      sellNFTByBid: Sell.sellNFTbyBid,
      cancelSale: Sell.cancelSale,
      buyNFT: Buy.buyNFT,
      acceptBid: Bid.acceptBid,
      bid: Bid.bid,
      withdrawBid: Bid.withdrawBid,
    },
    nft: {
      mint: mint,
      batchMint: batchMint,
      burn: burn
    },
    collection: {
      createCollection: Collection.deployCollection,
      createInstance: Collection.createInstance,
      mint: Collection.mint,
      batchMint: Collection.batchMint,
      burn: Collection.burn,
      sellNFT: Collection.sellNFT,
      sellNFTByBid: Collection.sellNFTbyBid,
      cancelSale: Collection.cancelSale,
      buyNFT: Collection.buyNFT,
      acceptBid: Collection.acceptBid,
      bid: Collection.bid,
      withdrawBid: Collection.withdrawBid,
    },
    pinata: {
      upload: Pinata.pinFileToIPFS,
      pinJSON: Pinata.pinJSONToIPFS
    }
  };
};

const { mint } = require("./src/nft/mint");
const Buy = require("./src/order/buy");
const Sell = require("./src/order/sell");
const Bid = require("./src/order/Bid");
const Collection = require("./src/collection/collection");
const Web3 = require("web3");
// const Web3 = require('web3-eth-contract');

require("dotenv").config();

// export function createPandoraSDK(){
const createPandoraSDK = () => {
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
    },
    collection: {
      createCollection: Collection.deployCollection,
      createInstance: Collection.createInstance,
      mint: Collection.mint,
      sellNFT: Collection.sellNFT,
      sellNFTByBid: Collection.sellNFTbyBid,
      cancelSale: Collection.cancelSale,
      buyNFT: Collection.buyNFT,
      acceptBid: Collection.acceptBid,
      bid: Collection.bid,
      withdrawBid: Collection.withdrawBid,
    },
  };
};

async function init() {
  let pandoraSDK = await createPandoraSDK();
  let web3 = await new Web3("http://127.0.0.1:7545");
  await pandoraSDK.nft.mint(
    web3,
    "0x0334bBb193D9128C69B95c712236EF1a2B17f20C",
    "kkkk",
    [["0x0334bBb193D9128C69B95c712236EF1a2B17f20C", 500]]
  );
}

init();

// mint();
// sellNFT(web3,0,600,"sellerAddress");
// buyNFT(web3, 1, "buyerAddress",600);
// sellNFTbyBid(web3, 0,600,300);
// Bid(web3, 2,"bidderAddress",1000);
// bidExecute(web3, 2,0);
// withdrawBid(web3, 2,1);
// cancelSale(web3, "ownerAddress",3);

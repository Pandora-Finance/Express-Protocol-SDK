const Mint721 = require("./src/erc721/src/nft/mint");
const Buy721 = require("./src/erc721/src/order/buy");
const Sell721 = require("./src/erc721/src/order/sell");
const Transfer721 = require("./src/erc721/src/order/transfer");
const Bid721 = require("./src/erc721/src/order/Bid");
const Collection721 = require("./src/erc721/src/collection/collection");
const Mint1155 = require("./src/erc1155/src/nft/mint");
const Buy1155 = require("./src/erc1155/src/order/buy");
const Sell1155 = require("./src/erc1155/src/order/sell");
const Transfer1155 = require("./src/erc1155/src/order/transfer");
const Bid1155 = require("./src/erc1155/src/order/Bid");
const Collection1155 = require("./src/erc1155/src/collection/collection");
const Pinata = require("./src/pinata/pinata");

export function createPandoraExpressSDK() {
  return {
    erc721: {
      order: {
        transferNFT: Transfer721.transferNFT,
        sellNFT: Sell721.sellNFT,
        sellNFTByBid: Sell721.sellNFTbyBid,
        cancelSale: Sell721.cancelSale,
        buyNFT: Buy721.buyNFT,
        acceptBid: Bid721.acceptBid,
        bid: Bid721.bid,
        withdrawBid: Bid721.withdrawBid,
      },
      nft: {
        mint: Mint721.mint,
        batchMint: Mint721.batchMint,
        burn: Mint721.burn,
      },
      collection: {
        createCollection: Collection721.deployCollection,
        createInstance: Collection721.createInstance,
        mint: Collection721.mint,
        batchMint: Collection721.batchMint,
        burn: Collection721.burn,
        sellNFT: Collection721.sellNFT,
        sellNFTByBid: Collection721.sellNFTbyBid,
        cancelSale: Collection721.cancelSale,
        buyNFT: Collection721.buyNFT,
        acceptBid: Collection721.acceptBid,
        bid: Collection721.bid,
        withdrawBid: Collection721.withdrawBid,
        transferNFT: Collection721.transferNFT
      },
    },
    erc1155: {
      order: {
        transferNFT: Transfer1155.transferNFT,
        sellNFT: Sell1155.sellNFT,
        sellNFTByBid: Sell1155.sellNFTbyBid,
        cancelSale: Sell1155.cancelSale,
        buyNFT: Buy1155.buyNFT,
        acceptBid: Bid1155.acceptBid,
        bid: Bid1155.bid,
        withdrawBid: Bid1155.withdrawBid,
      },
      nft: {
        mint: Mint1155.mint,
        burn: Mint1155.burn,
      },
      collection: {
        createCollection: Collection1155.deployCollection,
        createInstance: Collection1155.createInstance,
        mint: Collection1155.mint,
        burn: Collection1155.burn,
        sellNFT: Collection1155.sellNFT,
        sellNFTByBid: Collection1155.sellNFTbyBid,
        cancelSale: Collection1155.cancelSale,
        buyNFT: Collection1155.buyNFT,
        acceptBid: Collection1155.acceptBid,
        bid: Collection1155.bid,
        withdrawBid: Collection1155.withdrawBid,
        transferNFT: Collection1155.transferNFT
      },
    },
    pinata: {
      upload: Pinata.pinFileToIPFS,
      pinJSON: Pinata.pinJSONToIPFS,
    },
  };
}

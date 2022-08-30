const { mint, batchMint, burn } = require("../src/nft/mint");
const Buy = require("../src/order/buy");
const Sell = require("../src/order/sell");
const Transfer = require("../src/order/transfer");
const Bid = require("../src/order/Bid");
const Collection = require("../src/collection/collection");
const Pinata = require("../../pinata/pinata");
const Web3 = require("web3");
const { bidOrder } = require("../src/utilities/bidorder");

require("dotenv").config();

const createPandoraExpressSDK = () => {
  return {
    order: {
      transferNFT: Transfer.transferNFT,
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
      burn: burn,
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
      transferNFT: Collection.transferNFT
    },
    pinata: {
      upload: Pinata.pinFileToIPFS,
      pinJSON: Pinata.pinJSONToIPFS,
    },
    utilities: {
      bidOrder: bidOrder,
    },
  };
};

init = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    console.log("Connected");
  } else {
    alert("Metamask not found");
  }
};

mintNft = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.nft.mint(web3, chainId, accounts[0], itemURI.value, [
    [accounts[0], 10],
  ]);
};

batchMintNft = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.nft.batchMint(
    web3,
    chainId,
    accounts[0],
    3,
    [itemURI1.value, itemURI2.value, itemURI3.value],
    [[[accounts[0], 10]], [[accounts[0], 10]], [[accounts[0], 20]]]
  );
};

burnNft = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.nft.burn(web3, chainId, accounts[0], itemburnTokenId.value);
};

sellNft = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.order.sellNFT(
    web3,
    chainId,
    sellItemTokenId.value,
    sellItemPrice.value,
    accounts[0]
  );
};

transferNft = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.order.transferNFT(
    web3,
    chainId,
    accounts[0],
    transferItemToAddress.value,
    transferItemTokenId.value
  );
};

auctionNft = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.order.sellNFTByBid(
    web3,
    chainId,
    auctionItemTokenId.value,
    auctionItemPrice.value,
    accounts[0],
    auctionItemTime.value
  );
};

buyNft = async () => {
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  let ExpressSDK = createPandoraExpressSDK();
  await ExpressSDK.order.buyNFT(
    web3,
    chainId,
    buyItemSaleId.value,
    accounts[0],
    buyItemAmmount.value
  );
};

bid = async () => {
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  let ExpressSDK = createPandoraExpressSDK();
  await ExpressSDK.order.bid(
    web3,
    chainId,
    BidItemSaleId.value,
    accounts[0],
    BidItemPrice.value
  );
};

bidOrderBook = async () => {
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  let ExpressSDK = createPandoraExpressSDK();
  await ExpressSDK.utilities.bidOrder(
    web3,
    chainId,
    BidOrderSaleId.value,
    accounts[0]
  );
};

executeBid = async () => {
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  let ExpressSDK = createPandoraExpressSDK();
  await ExpressSDK.order.acceptBid(
    web3,
    chainId,
    ExecuteSaleId.value,
    ExecuteBidId.value,
    accounts[0]
  );
};

withdrawBidMoney = async () => {
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  let ExpressSDK = createPandoraExpressSDK();
  await ExpressSDK.order.withdrawBid(
    web3,
    chainId,
    WithdrawSaleId.value,
    WithdrawBidId.value,
    accounts[0]
  );
};

cancelSale = async () => {
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  let ExpressSDK = createPandoraExpressSDK();
  await ExpressSDK.order.cancelSale(
    web3,
    chainId,
    accounts[0],
    CancelSaleId.value
  );
};

createCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.collection.createCollection(
    web3,
    chainId,
    accounts[0],
    collectionName.value,
    collectionSymbol.value,
    collectionDescription.value,
    [[accounts[0], collectionRoyalties.value]]
  );
};

mintInCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.collection.mint(
    web3,
    collectionAddress.value,
    tokenURI.value,
    accounts[0],
    [[accounts[0], collectionRoyalties.value]]
  );
};

batchMintInCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.collection.batchMint(
    web3,
    batchCollectionAddress.value,
    accounts[0],
    3,
    [itemColURI1, itemColURI2, itemColURI3],
    [[accounts[0], 10]]
  );
};

burnInCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.collection.burn(
    web3,
    burnCollectionAddress.value,
    accounts[0],
    itemColBurnTokenId.value
  );
};

sellInCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.collection.sellNFT(
    web3,
    chainId,
    sellCollectionAddress.value,
    sellTokenId.value,
    sellPrice.value,
    accounts[0]
  );
};

transferInCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.collection.transferNFT(
    web3,
    chainId,
    transferCollectionAddress.value,
    transferTokenId.value,
    accounts[0],
    transferToAddress.value
  );
};

buyInCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.collection.buyNFT(
    web3,
    chainId,
    buyTokenId.value,
    accounts[0],
    buyPrice.value
  );
};

sellNFTByBidInCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.collection.sellNFTByBid(
    web3,
    chainId,
    sellByBidCollectionAddress.value,
    sellByBidTokenId.value,
    sellByBidPrice.value,
    accounts[0],
    sellByBidBidTime.value
  );
};
bidInCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.collection.bid(
    web3,
    chainId,
    bidCollectionSaleId.value,
    accounts[0],
    bidCollectionPrice.value
  );
};

acceptBidInCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.collection.acceptBid(
    web3,
    chainId,
    acceptBidSaleId.value,
    acceptBidId.value,
    accounts[0]
  );
};

withdrawBidInCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.collection.withdrawBid(
    web3,
    chainId,
    withdrawBidSaleId.value,
    withdrawBidId.value,
    accounts[0]
  );
};

cancelSaleInCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await ExpressSDK.collection.cancelSale(
    web3,
    chainId,
    accounts[0],
    cancelSaleId.value
  );
};

uploadNFTPinataCloud = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  await ExpressSDK.pinata.upload(
    nftImage.files[0],
    nftDescription.value,
    pinataApiKey.value,
    pinataSecretApiKey.value
  );
};

pinJSONPinataCloud = async () => {
  let ExpressSDK = await createPandoraExpressSDK();
  await ExpressSDK.pinata.pinJSON(
    pinataAPIKeyJSON.value,
    pinataSecretApiKeyJSON.value,
    pinataJSONData.value
  );
};

const itemURI = document.getElementById("txtCreateItemURI");

const createItemButton = document.getElementById("btnCreateItem");
createItemButton.onclick = mintNft;

const itemURI1 = document.getElementById("txtCreateItemURI1");
const itemURI3 = document.getElementById("txtCreateItemURI2");
const itemURI2 = document.getElementById("txtCreateItemURI3");

const createItemsButton = document.getElementById("btnCreateItemInBatch");
createItemsButton.onclick = batchMintNft;

const itemburnTokenId = document.getElementById("numBurnTokenId");

const burnItemButton = document.getElementById("btnBurnItem");
burnItemButton.onclick = burnNft;

const sellItemTokenId = document.getElementById("numSellItemTokenId");
const sellItemPrice = document.getElementById("numSellItemPrice");

const sellItemButton = document.getElementById("btnSellItem");
sellItemButton.onclick = sellNft;

const transferItemToAddress = document.getElementById("txtTransferItemToAddress");
const transferItemTokenId = document.getElementById("numTransferItemTokenId");

const transferItemButton = document.getElementById("btnTransferItem");
transferItemButton.onclick = transferNft;

const auctionItemTokenId = document.getElementById("numAuctionItemTokenId");
const auctionItemPrice = document.getElementById("numAuctionItemPrice");
const auctionItemTime = document.getElementById("numAuctionItemTime");

const auctionItemButton = document.getElementById("btnAuctionItem");
auctionItemButton.onclick = auctionNft;

const buyItemSaleId = document.getElementById("numBuyItem");
const buyItemAmmount = document.getElementById("numBuyItemAmmount");
numBuyItemAmmount;

const buyItemButton = document.getElementById("btnBuyItem");
buyItemButton.onclick = buyNft;

const BidItemSaleId = document.getElementById("numBidItemSaleId");
const BidItemPrice = document.getElementById("numBidItemPrice");

const BidItemButton = document.getElementById("btnBidItem");
BidItemButton.onclick = bid;

const BidOrderSaleId = document.getElementById("numBidOrderSaleId");

const BidOrderButton = document.getElementById("btnBidOrder");
BidOrderButton.onclick = bidOrderBook;

const ExecuteSaleId = document.getElementById("numExecuteSaleId");
const ExecuteBidId = document.getElementById("numExecuteBidId");

const ExecuteBidItemButton = document.getElementById("btnExecuteBidItem");
ExecuteBidItemButton.onclick = executeBid;

const WithdrawSaleId = document.getElementById("numWithdrawSaleId");
const WithdrawBidId = document.getElementById("numWithdrawBidId");

const WithdrawBidItemButton = document.getElementById("btnWithdrawBidItem");
WithdrawBidItemButton.onclick = withdrawBidMoney;

const CancelSaleId = document.getElementById("numCancelSaleId");

const CancelItemSaleButton = document.getElementById("btnCancelItemSale");
CancelItemSaleButton.onclick = cancelSale;

const collectionName = document.getElementById("collectionName");
const collectionSymbol = document.getElementById("collectionSymbol");
const collectionDescription = document.getElementById("collectionDescription");
const collectionRoyalties = document.getElementById("collectionRoyalties");

const CollectionButton = document.getElementById("btnCreateCollection");
CollectionButton.onclick = createCollection;

const collectionAddress = document.getElementById("collectionAddress");
const tokenURI = document.getElementById("tokenURI");
const royalties = document.getElementById("royalties");

const btnMintInCollection = document.getElementById("btnMintInCollection");
btnMintInCollection.onclick = mintInCollection;

const batchCollectionAddress = document.getElementById(
  "batchCollectionAddress"
);
const itemColURI1 = document.getElementById("txtCreateItemCollectionURI1");
const itemColURI2 = document.getElementById("txtCreateItemCollectionURI2");
const itemColURI3 = document.getElementById("txtCreateItemCollectionURI3");

const createItemsColButton = document.getElementById(
  "btnBatchMintInCollection"
);
createItemsColButton.onclick = batchMintInCollection;

const burnCollectionAddress = document.getElementById("burnCollectionAddress");
const itemColBurnTokenId = document.getElementById("numColBurnTokenId");

const burnColItemButton = document.getElementById("btnColBurnItem");
burnColItemButton.onclick = burnInCollection;

const sellCollectionAddress = document.getElementById("sellCollectionAddress");
const sellTokenId = document.getElementById("sellTokenId");
const sellPrice = document.getElementById("sellPrice");

const btnSellInCollection = document.getElementById("btnSellInCollection");
btnSellInCollection.onclick = sellInCollection;

const transferCollectionAddress = document.getElementById("transferCollectionAddress");
const transferTokenId = document.getElementById("transferTokenIdInCollection");
const transferToAddress = document.getElementById("transferToAddressInCollection");

const btnTransferInCollection = document.getElementById("btnTransferInCollection");
btnTransferInCollection.onclick = transferInCollection;

const buyTokenId = document.getElementById("buyTokenId");
const buyPrice = document.getElementById("buyPrice");

const btnBuyInCollection = document.getElementById("btnBuyInCollection");
btnBuyInCollection.onclick = buyInCollection;

const sellByBidCollectionAddress = document.getElementById(
  "sellByBidCollectionAddress"
);
const sellByBidTokenId = document.getElementById("sellByBidTokenId");
const sellByBidPrice = document.getElementById("sellByBidPrice");
const sellByBidBidTime = document.getElementById("sellByBidBidTime");

const btnSellByBidInCollection = document.getElementById(
  "btnSellByBidinCollection"
);
btnSellByBidInCollection.onclick = sellNFTByBidInCollection;

const bidCollectionSaleId = document.getElementById("bidCollectionSaleId");
const bidCollectionPrice = document.getElementById("bidCollectionPrice");

const btnBidInCollection = document.getElementById("btnBidInCollection");
btnBidInCollection.onclick = bidInCollection;

const acceptBidSaleId = document.getElementById("acceptBidSaleId");
const acceptBidId = document.getElementById("acceptBidId");

const btnAcceptBidInCollection = document.getElementById(
  "btnAcceptBidInCollection"
);
btnAcceptBidInCollection.onclick = acceptBidInCollection;

const withdrawBidSaleId = document.getElementById("withdrawBidSaleId");
const withdrawBidId = document.getElementById("withdrawBidId");

const btnWithdrawBidInCollection = document.getElementById(
  "btnWithdrawBidInCollection"
);
btnWithdrawBidInCollection.onclick = withdrawBidInCollection;

const cancelSaleId = document.getElementById("cancelSaleId");

const btnCancelSaleInCollection = document.getElementById(
  "btnCancelSaleInCollection"
);
btnCancelSaleInCollection.onclick = cancelSaleInCollection;

const nftImage = document.getElementById("nftImage");
const pinataApiKey = document.getElementById("pinataApiKey");
const pinataSecretApiKey = document.getElementById("pinataSecretApiKey");
const nftDescription = document.getElementById("nftDescription");

const btnUploadNFTPinataCloud = document.getElementById(
  "btnUploadNFTPinataCloud"
);
btnUploadNFTPinataCloud.onclick = uploadNFTPinataCloud;

const pinataAPIKeyJSON = document.getElementById("pinataApiKeyJSON");
const pinataSecretApiKeyJSON = document.getElementById(
  "pinataSecretApiKeyJSON"
);
const pinataJSONData = document.getElementById("pinataJSONData");

const btnUploadNFTJson = document.getElementById("btnUploadNFTJson");
btnUploadNFTJson.onclick = pinJSONPinataCloud;

init();

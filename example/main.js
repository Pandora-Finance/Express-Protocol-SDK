const { mint } = require("../src/nft/mint");
const Buy = require("../src/order/buy");
const Sell = require("../src/order/sell");
const Bid = require("../src/order/Bid");
const Collection = require('../src/collection/collection');
const Web3 = require("web3");

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
  let pandoraSDK = await createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  await pandoraSDK.nft.mint(web3, accounts[0], itemURI.value, [
    [accounts[0], 100]
  ]);
};

sellNft = async () => {
  let pandoraSDK = await createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  await pandoraSDK.order.sellNFT(
    web3,
    sellItemTokenId.value,
    sellItemPrice.value,
    accounts[0]
  );
};

auctionNft = async () => {
  let pandoraSDK = await createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  await pandoraSDK.order.sellNFTByBid(
    web3,
    auctionItemTokenId.value,
    auctionItemPrice.value,
    accounts[0],
    auctionItemTime.value
  );
};

buyNft = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  let pandoraSDK = await createPandoraSDK();
  await pandoraSDK.order.buyNFT(
    web3,
    buyItemSaleId.value,
    accounts[0],
    buyItemAmmount.value
  );
};

bid = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  let pandoraSDK = await createPandoraSDK();
  await pandoraSDK.order.bid(
    web3,
    BidItemSaleId.value,
    accounts[0],
    BidItemPrice.value
  );
};

executeBid = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  let pandoraSDK = await createPandoraSDK();
  await pandoraSDK.order.acceptBid(
    web3,
    ExecuteSaleId.value,
    ExecuteBidId.value,
    accounts[0]
  );
};

withdrawBidMoney = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  let pandoraSDK = await createPandoraSDK();
  await pandoraSDK.order.withdrawBid(
    web3,
    WithdrawSaleId.value,
    WithdrawBidId.value,
    accounts[0]
  );
};

cancelSale = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  let pandoraSDK = await createPandoraSDK();
  await pandoraSDK.order.cancelSale(web3, accounts[0], CancelSaleId.value);
};

createCollection = async() => {
  let pandoraSDK = await createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  await pandoraSDK.collection.createCollection(
    web3,
    accounts[0],
    collectionName.value,
    collectionSymbol.value,
    collectionDescription.value,
    [[accounts[0], collectionRoyalties.value]]
  )
}

mintInCollection = async () => {
  let pandoraSDK = await createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  await pandoraSDK.collection.mint(
    web3,
    collectionAddress.value,
    tokenURI.value,
    accounts[0],
    [[accounts[0], collectionRoyalties.value]]
  )
}

sellInCollection = async () => {
  let pandoraSDK = await createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  await pandoraSDK.collection.sellNFT(
    web3,
    sellCollectionAddress.value,
    sellTokenId.value,
    sellPrice.value,
    accounts[0]
  )
}

buyInCollection = async () => {
  let pandoraSDK = await createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  await pandoraSDK.collection.buyNFT(
    web3,
    buyTokenId.value,
    accounts[0],
    buyPrice.value
  )
}

sellNFTByBidInCollection = async () => {
  let pandoraSDK = await createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  await pandoraSDK.collection.sellNFTByBid(
    web3,
    sellByBidCollectionAddress.value,
    sellByBidTokenId.value,
    sellByBidPrice.value,
    accounts[0],
    sellByBidBidTime.value
  )
}
bidInCollection = async () => {
  let pandoraSDK = await createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  await pandoraSDK.collection.bid(
    web3,
    bidCollectionSaleId.value,
    accounts[0],
    bidCollectionPrice.value
  );
}

acceptBidInCollection = async () => {
  let pandoraSDK = await createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  await pandoraSDK.collection.acceptBid(
    web3,
    acceptBidSaleId.value,
    acceptBidId.value,
    accounts[0]
  )
}

withdrawBidInCollection = async () => {
  let pandoraSDK = await createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  await pandoraSDK.collection.withdrawBid(
    web3,
    withdrawBidSaleId.value,
    withdrawBidId.value,
    accounts[0]
  )
}

cancelSaleInCollection = async () => {
  let pandoraSDK = await createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  await pandoraSDK.collection.cancelSale(
    web3,
    accounts[0],
    cancelSaleId.value
  )
}

const itemURI = document.getElementById("txtCreateItemURI");

const createItemButton = document.getElementById("btnCreateItem");
createItemButton.onclick = mintNft;

const sellItemTokenId = document.getElementById("numSellItemTokenId");
const sellItemPrice = document.getElementById("numSellItemPrice");

const sellItemButton = document.getElementById("btnSellItem");
sellItemButton.onclick = sellNft;

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

const collectionName = document.getElementById('collectionName');
const collectionSymbol = document.getElementById('collectionSymbol');
const collectionDescription = document.getElementById('collectionDescription');
const collectionRoyalties = document.getElementById('collectionRoyalties');

const CollectionButton = document.getElementById('btnCreateCollection');
CollectionButton.onclick = createCollection;

const collectionAddress = document.getElementById('collectionAddress');
const tokenURI = document.getElementById('tokenURI');
const royalties = document.getElementById('royalties');

const btnMintInCollection = document.getElementById('btnMintInCollection');
btnMintInCollection.onclick = mintInCollection;

const sellCollectionAddress = document.getElementById('sellCollectionAddress');
const sellTokenId = document.getElementById('sellTokenId');
const sellPrice = document.getElementById('sellPrice');

const btnSellInCollection = document.getElementById('btnSellInCollection');
btnSellInCollection.onclick = sellInCollection;

const buyTokenId = document.getElementById('buyTokenId');
const buyPrice = document.getElementById('buyPrice');

const btnBuyInCollection = document.getElementById('btnBuyInCollection');
btnBuyInCollection.onclick = buyInCollection;

const sellByBidCollectionAddress = document.getElementById('sellByBidCollectionAddress');
const sellByBidTokenId = document.getElementById('sellByBidTokenId');
const sellByBidPrice = document.getElementById('sellByBidPrice');
const sellByBidBidTime = document.getElementById('sellByBidBidTime');

const btnSellByBidInCollection = document.getElementById('btnSellByBidinCollection');
btnSellByBidInCollection.onclick = sellNFTByBidInCollection;

const bidCollectionSaleId = document.getElementById('bidCollectionSaleId');
const bidCollectionPrice = document.getElementById('bidCollectionPrice');

const btnBidInCollection = document.getElementById('btnBidInCollection');
btnBidInCollection.onclick = bidInCollection;

const acceptBidSaleId = document.getElementById('acceptBidSaleId');
const acceptBidId = document.getElementById('acceptBidId');

const btnAcceptBidInCollection = document.getElementById('btnAcceptBidInCollection');
btnAcceptBidInCollection.onclick = acceptBidInCollection;

const withdrawBidSaleId = document.getElementById('withdrawBidSaleId');
const withdrawBidId = document.getElementById('withdrawBidId');

const btnWithdrawBidInCollection = document.getElementById('btnWithdrawBidInCollection');
btnWithdrawBidInCollection.onclick = withdrawBidInCollection;


const cancelSaleId = document.getElementById('cancelSaleId');

const btnCancelSaleInCollection = document.getElementById('btnCancelSaleInCollection');
btnCancelSaleInCollection.onclick = cancelSaleInCollection;


init();

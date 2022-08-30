const { mint } = require("../src/nft/mint");
const Buy = require("../src/order/buy");
const Sell = require("../src/order/sell");
const Bid = require("../src/order/Bid");
const Transfer = require("../src/order/transfer");
const Collection = require("../src/collection/collection");

const createPandoraExpressSDK = () => {
  return {
    order: {
      sellNFT: Sell.sellNFT,
      sellNFTByBid: Sell.sellNFTbyBid,
      cancelSale: Sell.cancelSale,
      buyNFT: Buy.buyNFT,
      acceptBid: Bid.acceptBid,
      bid: Bid.bid,
      withdrawBid: Bid.withdrawBid,
      transferNFT: Transfer.transferNFT
    },
    nft: {
      mint: mint,
    },
    collection: {
      createCollection: Collection.deployCollection,
      createInstance: Collection.createInstance,
      mint: Collection.mint,
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
  await ExpressSDK.nft.mint(
    web3,
    chainId,
    accounts[0],
    itemNumber.value,
    itemURI.value,
    [[accounts[0], 99]]
  );
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
    accounts[0],
    sellItemNumber.value
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
    transferItemTokenId.value,
    transferItemAmount.value
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
    auctionItemNumber.value
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
    buyItemAmmount.value,
    buyItemNumber.value
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
    BidItemPrice.value,
    BidItemNumber.value
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
    collectionURI.value,
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
    tokenID.value,
    itemColNumber.value,
    tokenURI.value,
    accounts[0]
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
    itemColBurnTokenId.value,
    itemColBurnNumber.value
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
    accounts[0],
    itemSellNumber.value
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
    transferToAddress.value,
    transferAmount.value
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
    buySaleId.value,
    accounts[0],
    buyPrice.value,
    itemBuyNumber.value
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
    itemSellByBidNumber.value
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
    bidCollectionPrice.value,
    itemBidNumber.value
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

const itemURI = document.getElementById("txtCreate1155ItemURI");
const itemNumber = document.getElementById("txtCreate1155ItemAmount");

const createItemButton = document.getElementById("btnCreateItem1155");
createItemButton.onclick = mintNft;

const sellItemTokenId = document.getElementById("numSellItem1155TokenId");
const sellItemPrice = document.getElementById("numSellItem1155Price");
const sellItemNumber = document.getElementById("numSellItem1155Amount");

const sellItemButton = document.getElementById("btnSellItem1155");
sellItemButton.onclick = sellNft;

const transferItemToAddress = document.getElementById("txtTransferItem1155ToAddress");
const transferItemTokenId = document.getElementById("numTransferItem1155TokenId");
const transferItemAmount = document.getElementById("numTransferItem1155Amount");

const transferItemButton = document.getElementById("btnTransferItem1155");
transferItemButton.onclick = transferNft;

const auctionItemTokenId = document.getElementById("numAuctionItem1155TokenId");
const auctionItemPrice = document.getElementById("numAuctionItem1155Price");
const auctionItemNumber = document.getElementById("numAuctionItem1155Amount");

const auctionItemButton = document.getElementById("btnAuctionItem1155");
auctionItemButton.onclick = auctionNft;

const buyItemSaleId = document.getElementById("numBuyItem1155");
const buyItemAmmount = document.getElementById("numBuyItem1155Ammount");
const buyItemNumber = document.getElementById("numBuyItem1155Amount");

const buyItemButton = document.getElementById("btnBuyItem1155");
buyItemButton.onclick = buyNft;

const BidItemSaleId = document.getElementById("numBidItem1155SaleId");
const BidItemPrice = document.getElementById("numBidItem1155Price");
const BidItemNumber = document.getElementById("numBidItem1155Amount");

const BidItemButton = document.getElementById("btnBidItem1155");
BidItemButton.onclick = bid;

const ExecuteSaleId = document.getElementById("numExecute1155SaleId");
const ExecuteBidId = document.getElementById("numExecute1155BidId");

const ExecuteBidItemButton = document.getElementById("btnExecuteBidItem1155");
ExecuteBidItemButton.onclick = executeBid;

const WithdrawSaleId = document.getElementById("numWithdraw1155SaleId");
const WithdrawBidId = document.getElementById("numWithdraw1155BidId");

const WithdrawBidItemButton = document.getElementById("btnWithdrawBidItem1155");
WithdrawBidItemButton.onclick = withdrawBidMoney;

const CancelSaleId = document.getElementById("numCancel1155SaleId");

const CancelItemSaleButton = document.getElementById("btnCancelItem1155Sale");
CancelItemSaleButton.onclick = cancelSale;

const collectionURI = document.getElementById("collection1155Uri");
const collectionDescription = document.getElementById(
  "collection1155Description"
);
const collectionRoyalties = document.getElementById("collection1155Royalties");

const CollectionButton = document.getElementById("btnCreateCollection1155");
CollectionButton.onclick = createCollection;

const collectionAddress = document.getElementById("collection1155Address");
const tokenURI = document.getElementById("token1155URI");
const tokenID = document.getElementById("token1155Id");
const itemColNumber = document.getElementById("numMintInCol1155Amount");

const btnMintInCollection = document.getElementById("btnMintInCollection1155");
btnMintInCollection.onclick = mintInCollection;

const burnCollectionAddress = document.getElementById(
  "burnCollection1155Address"
);
const itemColBurnTokenId = document.getElementById("numCol1155BurnTokenId");
const itemColBurnNumber = document.getElementById("numMintInCol1155Amount");

const burnColItemButton = document.getElementById("btnCol1155BurnItem");
burnColItemButton.onclick = burnInCollection;

const sellCollectionAddress = document.getElementById(
  "sellCollection1155Address"
);
const sellTokenId = document.getElementById("sell1155TokenId");
const sellPrice = document.getElementById("sell1155Price");
const itemSellNumber = document.getElementById("numSellInCol1155Amount");

const btnSellInCollection = document.getElementById("btnSellInCollection1155");
btnSellInCollection.onclick = sellInCollection;

const transferCollectionAddress = document.getElementById("transfer1155CollectionAddress");
const transferTokenId = document.getElementById("transfer1155TokenIdInCollection");
const transferToAddress = document.getElementById("transfer1155ToAddressInCollection");
const transferAmount = document.getElementById('transfer1155AmountInCollection');

const btnTransferInCollection = document.getElementById("btnTransfer1155InCollection");
btnTransferInCollection.onclick = transferInCollection;

const buySaleId = document.getElementById("buy1155SaleId");
const buyPrice = document.getElementById("buy1155Price");
const itemBuyNumber = document.getElementById("numBuyInCol1155Amount");

const btnBuyInCollection = document.getElementById("btnBuyInCollection1155");
btnBuyInCollection.onclick = buyInCollection;

const sellByBidCollectionAddress = document.getElementById(
  "sellByBidCollection1155Address"
);
const sellByBidTokenId = document.getElementById("sellByBid1155TokenId");
const sellByBidPrice = document.getElementById("sellByBid1155Price");
const itemSellByBidNumber = document.getElementById(
  "numSellByBidInCol1155Amount"
);

const btnSellByBidInCollection = document.getElementById(
  "btnSellByBidinCollection1155"
);
btnSellByBidInCollection.onclick = sellNFTByBidInCollection;

const bidCollectionSaleId = document.getElementById("bidCollection1155SaleId");
const bidCollectionPrice = document.getElementById("bidCollection1155Price");
const itemBidNumber = document.getElementById("numBidInCol1155Amount");

const btnBidInCollection = document.getElementById("btnBidInCollection1155");
btnBidInCollection.onclick = bidInCollection;

const acceptBidSaleId = document.getElementById("acceptBid1155SaleId");
const acceptBidId = document.getElementById("acceptBid1155Id");

const btnAcceptBidInCollection = document.getElementById(
  "btnAcceptBidInCollection1155"
);
btnAcceptBidInCollection.onclick = acceptBidInCollection;

const withdrawBidSaleId = document.getElementById("withdrawBid1155SaleId");
const withdrawBidId = document.getElementById("withdraw1155BidId");

const btnWithdrawBidInCollection = document.getElementById(
  "btnWithdrawBidInCollection1155"
);
btnWithdrawBidInCollection.onclick = withdrawBidInCollection;

const cancelSaleId = document.getElementById("cancel1155SaleId");

const btnCancelSaleInCollection = document.getElementById(
  "btnCancelSaleInCollection1155"
);
btnCancelSaleInCollection.onclick = cancelSaleInCollection;

init();

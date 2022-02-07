const { mint } = require("../src/nft/mint");
const Buy = require("../src/order/buy");
const Sell = require("../src/order/sell");
const Bid = require("../src/order/Bid");

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
  let pandoraSDK = createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await pandoraSDK.nft.mint(
    web3,
    chainId,
    accounts[0],
    itemNumber.value,
    itemURI.value,
    [[accounts[0], 100]]
  );
};

sellNft = async () => {
  let pandoraSDK = createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await pandoraSDK.order.sellNFT(
    web3,
    chainId,
    sellItemTokenId.value,
    sellItemPrice.value,
    accounts[0],
    sellItemNumber.value
  );
};

auctionNft = async () => {
  let pandoraSDK = createPandoraSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await pandoraSDK.order.sellNFTByBid(
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
  let pandoraSDK = createPandoraSDK();
  await pandoraSDK.order.buyNFT(
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
  let pandoraSDK = createPandoraSDK();
  await pandoraSDK.order.bid(
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
  let pandoraSDK = createPandoraSDK();
  await pandoraSDK.order.acceptBid(
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
  let pandoraSDK = createPandoraSDK();
  await pandoraSDK.order.withdrawBid(
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
  let pandoraSDK = createPandoraSDK();
  await pandoraSDK.order.cancelSale(
    web3,
    chainId,
    accounts[0],
    CancelSaleId.value
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

init();

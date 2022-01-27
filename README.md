# Protocol-SDK

Pandora Protocol SDK is used to build applications for minting, trading, auctioning NFTs on multiple blockchains.

Currently, the following blockchains are supported:

- Rinkeby Testnet
- Ropsten Testnet
- BSC Testnet

## Installation

`npm install pan-sdk`

## Development

For running the SDK code in a local environment -

→Clone the repository.

→Install the dependencies.

    npm install

→Install *parcel-bundler* globally(if not already installed).

    npm install -g parcel-bundler

→To initiate a sample application, run

    parcel example/index.html

## Structure

The **abi** directory contains the abi of the smart contracts through which the NFTs are issued and traded within a blockchain network.

- *pndc.js* contains the abi of *PNDC_ERC721* contract through which NFTs can be minted singly or in batch.
- *tokenfactory.js* contains the abi of TokenFactory contract through which NFTs can be put on direct sale, auction sale and can be bought, bid as well.
- tokenerc721.js contains the abi of TokenERC721 contract through which collections can be created.

The **example** directory contains code for a basic application that uses all the functionality of Protocol SDK.

The **src** directory contains the main source code of the SDK.

- src/nft/mint.js contains code for minting NFTs.
- src/order/sell.js contains code for putting NFTs on direct sale, auction sale, and for canceling the sale.
- src/order/buy.js contains code for buying NFTs on direct sale.
- src/order/Bid.js contains code for bidding on NFTs, accepting bids, and withdrawing bids.
- src/collection/collection.js contains code for creating collections and minting, trading, auctioning NFTs inside the collection.
- src/pinata/index.js contains code for uploading on Pinata.
- src/common/utils.js contains utility functions and variables that are used by other functions.

**index.js** contains the code for the initialization of the SDK

## Usage

**Mint:** NFTs can be mint using the *mint* function.

```jsx
PandoraSDK.nft.mint(web3, chainId, minterAddress, tokenURI, royalties);
```

**Sell:** NFTs can be put on sale using the *sellNFT* function.

```jsx
PandoraSDK.nft.sellNFT(web3, chainId, tokenId, tokenPrice, ownerAddress);
```

**Buy:** NFTs can be bought using the *buyNFT* function.

```jsx
PandoraSDK.order.buyNFT(web3, chainId, saleId, buyerAddress, price);
```

**Cancel Sale:** NFTs on sale can be removed from sale using the *cancelSale* function.

```jsx
PandoraSDK.order.cancelSale(web3, chainId, sellerAddress, saleId);
```

**Auction:** NFTs can be put on auction sale using *sellNFTByBid* function.

```jsx
PandoraSDK.order.sellNFTByBid(web3, chainId, tokenId, initialPrice, ownerAddress, auctionTime);
```

**Bid:** NFTs on auction sale can be bid using *bid* function.

```jsx
PandoraSDK.order.bid(web3, chainId, saleId, buyerAddress, bidPrice);
```

**Bid Execution:** Bids on NFTs can be executed using *acceptBid* function.

```jsx
PandoraSDK.order.acceptBid(web3, chainId, SaleId, BidId, sellerAddress);
```

**Bid Withdraw:** Other bids except executed bid can be withdrawn using *withdrawBid* function.

```jsx
PandoraSDK.order.withdrawBid(web3, chainId, saleId, bidId, buyerAddress);
```

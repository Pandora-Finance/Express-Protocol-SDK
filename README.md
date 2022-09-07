# Express-Protocol-SDK

Express Protocol SDK is used to build applications for minting, trading, auctioning NFTs on multiple blockchains.

Currently, the following blockchains are supported:

Mainnet :-
- Binance Smart Chain
- Polygon Matic 

Testnets :-
- Rinkeby Testnet
- Ropsten Testnet
- BSC Testnet
- Polygon Testnet

## Installation

`npm install pandora-express`

## Development

For running the SDK code in a local environment -

→Clone the repository.

→Install the dependencies.

    npm install

→Install _parcel-bundler_ globally(if not already installed).

    npm install -g parcel-bundler

→To initiate a sample application, run

    parcel erc721/example/index.html

## Structure

The **erc721** and **erc1155** directory follows a similar directory structure for two different token standards ERC721 and ERC1155 respectively. Inside both the directories -

-> The **abi** directory contains the abi of the smart contracts through which the Tokens are issued and traded within a blockchain network.

- _pndc.js_ contains the abi of PNDC_ERC721 contract through which NFTs can be minted singly or in batch.
- _tokenfactory.js_ contains the abi of TokenFactory contract through which NFTs can be put on direct sale, auction sale and can be bought, bid as well.
- _tokenerc721.js_ contains the abi of TokenERC721 contract through which collections can be created.
- Similarly, _pndc1155.js_, _tokenfactory1155.js_ and _tokenerc1155.js_ inside erc1155/abi contains the abis for the ERC1155 token standard.

-> The **example** directory contains code for a basic application that uses all the functionality of Protocol SDK.

-> The **src** directory contains the main source code of the SDK.

- src/nft/mint.js contains code for minting NFTs.
- src/order/sell.js contains code for putting NFTs on direct sale, auction sale, and for canceling the sale.
- src/order/buy.js contains code for buying NFTs on direct sale.
- src/order/Bid.js contains code for bidding on NFTs, accepting bids, and withdrawing bids.
- src/collection/collection.js contains code for creating collections and minting, trading, auctioning NFTs inside the collection.
- src/common/utils.js contains utility functions and variables that are used by other functions.

**index.js** contains the code for the initialization of the SDK

## Usage

Import _createPandoraExpressSDK_ function from _pandora-express_ and initialize SDK.

```jsx
import {createPandoraExpressSDK} from "pandora-express";
const ExpressSDK = createPandoraExpressSDK();
```

**Mint:** NFTs can be mint using the _mint_ function.

```jsx
ExpressSDK.erc721.nft.mint(web3, chainId, minterAddress, tokenURI, royalties);
```

**Sell:** NFTs can be put on sale using the _sellNFT_ function.

```jsx
ExpressSDK.erc721.order.sellNFT(
  web3,
  chainId,
  tokenId,
  tokenPrice,
  ownerAddress
);
```

**Buy:** NFTs can be bought using the _buyNFT_ function.

```jsx
ExpressSDK.erc721.order.buyNFT(web3, chainId, saleId, buyerAddress, price);
```

**Cancel Sale:** NFTs on sale can be removed from sale using the _cancelSale_ function.

```jsx
ExpressSDK.erc721.order.cancelSale(web3, chainId, sellerAddress, saleId);
```

**Auction:** NFTs can be put on auction sale using _sellNFTByBid_ function.

```jsx
ExpressSDK.erc721.order.sellNFTByBid(
  web3,
  chainId,
  tokenId,
  initialPrice,
  ownerAddress,
  auctionTime
);
```

**Bid:** NFTs on auction sale can be bid using _bid_ function.

```jsx
ExpressSDK.erc721.order.bid(web3, chainId, saleId, buyerAddress, bidPrice);
```

**Bid Execution:** Bids on NFTs can be executed using _acceptBid_ function.

```jsx
ExpressSDK.erc721.order.acceptBid(web3, chainId, saleId, bidId, sellerAddress);
```

**Bid Withdraw:** Other bids except executed bid can be withdrawn using _withdrawBid_ function.

```jsx
ExpressSDK.erc721.order.withdrawBid(web3, chainId, saleId, bidId, buyerAddress);
```

## Collection Functions.

**Collection:** New collection can be deployed using _createCollection_ function.

```jsx
ExpressSDK.erc721.collection.createCollection(
  web3,
  chainId,
  ownerAddress,
  collectionName,
  collectionSymbol,
  collectionDescription,
  collectionRoyalties
);
```

**Mint in Collection:** NFTs can be minted inside collection using _mint_ function.

```jsx
ExpressSDK.erc721.collection.mint(
  web3,
  collectionAddress,
  tokenURI,
  minterAddress,
  royalties
);
```

**Sell in Collection:** NFTs can be put on direct sale inside collection using _sellNFT_ function.

```jsx
ExpressSDK.erc721.collection.sellNFT(
  web3,
  chainId,
  sellCollectionAddress,
  sellTokenId,
  sellPrice,
  ownerAddress
);
```

**Buy in Collection:** NFTs on sale can be bought in a collection using _buyNFT_ function.

```jsx
ExpressSDK.erc721.collection.buyNFT(
  web3,
  chainId,
  buyTokenId,
  buyerAddress,
  buyPrice
);
```

**Auction in Collection :** NFTs can be put on auction sale in a collection using _sellNFTByBid_ function.

```jsx
ExpressSDK.erc721.collection.sellNFTByBid(
  web3,
  chainId,
  sellByBidCollectionAddress,
  sellByBidTokenId,
  sellByBidPrice,
  ownerAddress,
  sellByBidTime
);
```

**Bid Collection NFTs:** NFTs on auction sale can be bid by other users in a collection using _bid_ function.

```jsx
ExpressSDK.erc721.collection.bid(
  web3,
  chainId,
  bidCollectionSaleId,
  bidderAddress,
  bidCollectionPrice
);
```

**Bid Execution on Collection NFTs:** Bids on NFTs can be executed in a collection using _acceptBid_ function.

```jsx
ExpressSDK.erc721.collection.acceptBid(
  web3,
  chainId,
  acceptBidSaleId,
  acceptBidId,
  sellerAddress
);
```

**Bid Withdraw in Collection:** Other bids except executed bid can be withdrawn in a collection using _withdrawBid_ function.

```jsx
ExpressSDK.erc721.collection.withdrawBid(
  web3,
  chainId,
  saleId,
  bidId,
  buyerAddress
);
```

**Cancel Sale in Collection NFTs:** NFTs on sale in a collection can be removed from sale using the _cancelSale_ function.

```jsx
ExpressSDK.erc721.collection.cancelSale(web3, chainId, sellerAddress, saleId);
```

## Pinata Upload Functions.

**Upload NFTs to Pinata Cloud service :**

```jsx
ExpressSDK.pinata.upload(
  nftImage,
  nftDescription,
  pinataApiKey,
  pinataSecretApiKey
);
```

**Upload JSON data to Pinata Cloud:**

```jsx
ExpressSDK.pinata.pinJSON(
  pinataAPIKeyJSON,
  pinataSecretApiKeyJSON,
  pinataJSONData
);
```

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

Import *PandoraSDK* function from *pan-sdk* and initialize sdk.

```jsx
const sdk = require("pan-sdk");
const PandoraSDK = sdk.createPandoraSDK();
```

**Mint:** NFTs can be mint using the *mint* function.

```jsx
PandoraSDK.nft.mint(web3, chainId, minterAddress, tokenURI, royalties);
```

**Sell:** NFTs can be put on sale using the *sellNFT* function.

```jsx
PandoraSDK.order.sellNFT(web3, chainId, tokenId, tokenPrice, ownerAddress);
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
PandoraSDK.order.acceptBid(web3, chainId, saleId, bidId, sellerAddress);
```

**Bid Withdraw:** Other bids except executed bid can be withdrawn using *withdrawBid* function.

```jsx
PandoraSDK.order.withdrawBid(web3, chainId, saleId, bidId, buyerAddress);
```

## Collection Functions.

**Collection:** New collection can be deployed using *createCollection* function.

```jsx
PandoraSDK.collection.createCollection(
    web3,
    chainId,
    ownerAddress,
    collectionName,
    collectionSymbol,
    collectionDescription,
    collectionRoyalties
  );
```

**Mint in Collection:** NFTs can be minted inside collection using *mint* function.

```jsx
PandoraSDK.collection.mint(
    web3,
    collectionAddress,
    tokenURI,
    minterAddress,
    royalties
  );
```

**Sell in Collection:** NFTs can be put on direct sale inside collection using *sellNFT* function.

```jsx
PandoraSDK.collection.sellNFT(
    web3,
    chainId,
    sellCollectionAddress,
    sellTokenId,
    sellPrice,
    ownerAddress
  );
```

**Buy in Collection:** NFTs on sale can be bought in a collection using *buyNFT* function.

```jsx
PandoraSDK.collection.buyNFT(
    web3,
    chainId,
    buyTokenId,
    buyerAddress,
    buyPrice
  );
```

**Auction in Collection :** NFTs can be put on auction sale in a collection using *sellNFTByBid* function.

```jsx
PandoraSDK.collection.sellNFTByBid(
    web3,
    chainId,
    sellByBidCollectionAddress,
    sellByBidTokenId,
    sellByBidPrice,
    ownerAddress,
    sellByBidTime
  );
```

**Bid Collection NFTs:** NFTs on auction sale can be bid by other users in a collection using *bid* function.

```jsx
PandoraSDK.collection.bid(
    web3,
    chainId,
    bidCollectionSaleId,
    bidderAddress,
    bidCollectionPrice
  );
```

**Bid Execution on Collection NFTs:** Bids on NFTs can be executed in a collection using *acceptBid* function.

```jsx
PandoraSDK.collection.acceptBid(
    web3,
    chainId,
    acceptBidSaleId,
    acceptBidId,
    sellerAddress
  );
```

**Bid Withdraw in Collection:** Other bids except executed bid can be withdrawn in a collection using *withdrawBid* function.

```jsx
PandoraSDK.collection.withdrawBid(web3, chainId, saleId, bidId, buyerAddress);
```

**Cancel Sale in Collection NFTs:** NFTs on sale in a collection can be removed from sale using the *cancelSale* function.

```jsx
PandoraSDK.collection.cancelSale(web3, chainId, sellerAddress, saleId);
```

## Pinata Upload Functions.

**Upload NFTs to Pinata Cloud service :**

```jsx
PandoraSDK.pinata.upload(
    nftImage,
    nftDescription,
    pinataApiKey,
    pinataSecretApiKey
  );
```

**Upload JSON data to Pinata Cloud:**

```jsx
PandoraSDK.pinata.pinJSON(
    pinataAPIKeyJSON,
    pinataSecretApiKeyJSON,
    pinataJSONData
  );
```

const UTILS = {
  addressDict: {
    4: {
      PNDC_ADDRESS: "0xf4D06B6aa9670ad1f912dd2199D4B10A059D30Ea",
      TOKENFACTORY_ADDRESS: "0xA75B44b5E11f52394eEe2bC3C3f4DA89398f97cA",
    },
    3: {
      PNDC_ADDRESS: "0x167C147e4FCf7Ce82ba551ca24a40E5BB8A0eDf7",
      TOKENFACTORY_ADDRESS: "0xA73E09C35122720E645fdeAC9134BC6f6a4e135A",
    },
    97: {
      PNDC_ADDRESS: "0x73cDA7aAFDd2c58f58C465aF04A98B2A94F3DfC6",
      TOKENFACTORY_ADDRESS: "0x9b001950C46EbB95662e5D90884aBf8840806EDb",
    },
    80001: {
      PNDC_ADDRESS: "0xf02c627B3Ae533D488cb25F072e542ee7CCc1D10",
      TOKENFACTORY_ADDRESS: "0xDf9CE7eCeC9388e6A71eeA2690EA5825B7b00ca1"
    },
    137: {
      PNDC_ADDRESS: "0xEdfC151EA939517861b8321bbFCdb4da3cCC97C9",
      TOKENFACTORY_ADDRESS: "0xd03cc33ED2d03A41A39E2c9fC0Dbc49940CefAf8"
    },
    56: {
      PNDC_ADDRESS: "0x29F346F06b063dCE2E9D03095bF36096216dD103",
      TOKENFACTORY_ADDRESS: "0x8E25e9af9D9531567bc7b09bE2E8f1fD3D490761"
    }
  },
  accounts: async (web3) => {
    return await web3.eth.getAccounts();
  },
  PNDC_instance: async (web3, chainId, abi) => {
    return new web3.eth.Contract(abi, UTILS.PNDC_ADDRESS(chainId));
  },
  TOKENFACTORY_instance: async (web3, chainId, abi) => {
    return new web3.eth.Contract(abi, UTILS.TOKENFACTORY_ADDRESS(chainId));
  },
  TOKENERC721_instance: async (web3, abi, collectionAddress) => {
    return new web3.eth.Contract(abi, collectionAddress);
  },
  PNDC_ADDRESS: (id) => {
    return UTILS.addressDict[id].PNDC_ADDRESS;
  },
  TOKENFACTORY_ADDRESS: (id) => {
    return UTILS.addressDict[id].TOKENFACTORY_ADDRESS;
  },
};

module.exports = UTILS;

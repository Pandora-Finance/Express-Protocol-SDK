const UTILS = {
  addressDict: {
    4: {
      PNDC_ADDRESS: "0x0cC6c7F0B6738051Ac65c8F5c3b84F31ebB0ba1B",
      TOKENFACTORY_ADDRESS: "0x94C0E6E1e6f925318A25400C2AdBFd42d63fBcFc",
    },
    3: {
      PNDC_ADDRESS: "0x52e893Cbc9385148c8338CeA0F9c612ABAEcd963",
      TOKENFACTORY_ADDRESS: "0x3eD35828a72B8155e586c16c07008F346EBF54B5",
    },
    97: {
      PNDC_ADDRESS: "0x73cDA7aAFDd2c58f58C465aF04A98B2A94F3DfC6",
      TOKENFACTORY_ADDRESS: "0x9b001950C46EbB95662e5D90884aBf8840806EDb",
    },
    80001: {
      PNDC_ADDRESS: "0x3B1344fCF8D64de27278Faf10b7c26bB187Fd227",
      TOKENFACTORY_ADDRESS: "0x5e106C82bb291b557b5F644a8E7BbFD7EDcd03f0"
    },
    137: {
      PNDC_ADDRESS: "0xbD84E58A8e5009e50AcAAF10BDC0d25950626cc4",
      TOKENFACTORY_ADDRESS: "0x6703B28a4AeC46Dd006873b0d8257c3d39E5509F"
    },
    56: {
      PNDC_ADDRESS: "0xEd5cD5853C326c5AF1A240C9bc26E3BBa827aBe7",
      TOKENFACTORY_ADDRESS: "0x550b4a5446BA6973EE41f23980A543406A9e97ec"
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

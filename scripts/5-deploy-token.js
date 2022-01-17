import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.INSERT_YOUR_APP_ADDRESS
const app = sdk.getAppModule("0xE548DE67f19676B6bCb3F45ae1911Ad23dd5896D");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "GroupBuys DAO Governance Token (GB)",
      // What's your token's symbol? Ex. "ETH"
      symbol: "GB",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
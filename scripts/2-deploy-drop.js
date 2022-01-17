import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
// Note: be sure to replace INSERT_YOUR_APP_ADDRESS_HERE with the address printed out from 1-initialize-sdk.js.
const app = sdk.getAppModule("0xE548DE67f19676B6bCb3F45ae1911Ad23dd5896D");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "GroupBuys DAO Membership",
      // A description for the collection.
      description: "A DAO for fans of sharing software.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/dimond.gif"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()
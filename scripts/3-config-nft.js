import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
 // "INSERT_DROP_MODULE_ADDRESS",
 "0x21A7F957f1780f722e397591118c48fc6935087e",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Infinite 3rd Eye",
        description: "This NFT unlocks all infinite versions of you to vote on your next DAO life!",
        image: readFileSync("scripts/assets/groupbuysdao.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT metaverse!");
  } catch (error) {
    console.error("The new NFT big bang imploded back to nothing failing to create a new metaverse", error);
  }
})()
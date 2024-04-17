const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const AutoSaver = await ethers.getContractFactory("AutoSaver");
  const autoSaver = await AutoSaver.deploy('0x7C2A1e2A62E2AA0311bD39587c29223C2eA20F9F');
  await autoSaver.deployed();

  console.log("AutoSaver deployed to:", autoSaver.address);


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //0xabb1d7d4c0037b3d65b8da93e462584234109b3e
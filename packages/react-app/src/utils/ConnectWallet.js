import { ethers, Contract } from "ethers";
import { autoSaveAddress, toks, toksAddress } from "../../context/constant";
import { auto } from "../../context/constant";

export const connectWallet = async () => {
  try {
    let [signer, autoSaverContract, ajoTokenContract, provider, chainId] = [
      null,
      null,
      null,
      null,
      null,
    ];

    if (window.ethereum === null) {
      throw new Error("Metamask is not installed");
    }

    const storedAccount = localStorage.getItem("selectedAccount");
    let selectedAccount;

    if (storedAccount) {
      selectedAccount = storedAccount;
    } else {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      selectedAccount = accounts[0];
      localStorage.setItem("selectedAccount", selectedAccount);
    }

    let chainIdHex = await window.ethereum.request({
      method: "eth_chainId",
    });

    chainId = parseInt(chainIdHex, 16);

    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();

    const toksContractAddress = toksAddress;
    const autoSaveContractAddress = autoSaveAddress;

    ajoTokenContract = new Contract(toksContractAddress, toks, signer);
    autoSaverContract = new Contract(autoSaveContractAddress, auto, signer);

    return {
      provider,
      selectedAccount,
      ajoTokenContract,
      autoSaverContract,
      chainId,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

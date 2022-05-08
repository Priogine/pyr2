import Web3 from "web3";
import { config } from "./config";

// Initialize contract & set global variables
export async function initContracts(callback) {
  window.correctChainId = config.networkId;
  window.web3 = new Web3(window.ethereum);

  await window.ethereum.request({ method: "eth_requestAccounts" });

  window.userAddress = (await window.web3.eth.getAccounts())[0];
  if(window.userAddress) {
    window.bananaContract = new window.web3.eth.Contract(
      config.bananaAbi,
      config.bananaAddress,
      { from: window.userAddress }
    );
  
    window.nodeContract = new window.web3.eth.Contract(
      config.nodeAbi,
      config.nodeAddress,
      { from: window.userAddress }
    );
  
    window.pairContract = new window.web3.eth.Contract(
      config.LPAbi,
      config.pairAddress,
      { from: window.userAddress }
    );
  
    window.ethInitialized = true;
    window.chainId = window.ethereum.chainId;
    window.ethereum.autoRefreshOnNetworkChange = false;
  
  }  
  window.ethereum.on("accountsChanged", () => {
    window.location.reload();
  });

  window.ethereum.on("chainChanged", () => {
    window.location.reload();
  });

  if (callback) {
    callback();
  }
}

export async function initConnected() {
  const accounts = await window.ethereum.request({ method: "eth_accounts" });

  if (typeof window.ethereum !== "undefined" && accounts > 0) {
    await initContracts();
  }
}

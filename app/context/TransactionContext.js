"use client"
import { ethers } from "ethers";
import { contractABI, contractAddress } from "@/utility/constants";
import { createContext, useState } from "react";

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract({
    contractAddress,
    contractABI,
    signer,
  });

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install metamask");

    const accounts = await ethereum.request({ method: "eth_accounts" });
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      setCurrentAccount(accounts[0])
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TransactionContext.Provider value={{ currentAccount , connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};

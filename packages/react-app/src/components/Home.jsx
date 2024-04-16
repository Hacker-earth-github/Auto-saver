import React, { useEffect, useState } from "react";
import HomeLoader from "./HomeLoader/HomeLoader";
import Layout from "./Layout";
import { Web3 } from "web3";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [connectedAccount, setConnectedAccount] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  async function connectMetamask() {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);

      await window.ethereum.request({ method: "eth_requestAccounts" });

      const accounts = await web3.eth.getAccounts();
      const walletAddress = accounts[0];
      const balance = await web3.eth.getBalance(walletAddress);

      const balanceInEthers = web3.utils.fromWei(balance, "ether");

      setConnectedAccount(walletAddress);

      localStorage.setItem("walletAddress", walletAddress);
      localStorage.setItem("balanceInEther", balanceInEthers);
    } else {
      alert("Please Download Metamask!");
    }
  }

  return (
    <>
      {isLoading ? (
        <HomeLoader />
      ) : (
        <Layout>
          <section className="home">
            <div className="all">
              <div className="homeCon">
                <h1>Let Get Started</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur, velit!
                </p>
              </div>

              {connectedAccount ? (
                <Link to="/dashboard" className="--btn --btn-secondary">
                  Get Started
                </Link>
              ) : (
                <button
                  className="--btn --btn-secondary"
                  onClick={() => connectMetamask()}
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import HomeLoader from "./HomeLoader/HomeLoader";
import Layout from "./Layout";
import { Web3 } from "web3";
import { Link } from "react-router-dom";
import Wallet from "./Wallet/Wallet";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [connectedAccount, setConnectedAccount] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? (
        <HomeLoader />
      ) : (
        <Layout>
          <section className="home">
            <div className="all">
              <div className="homeCon">
                <h1>ÀJọ: Your Path to Financial Freedom</h1>
                <p>
                  Dive into a world of smart spending, savvy saving, and secure
                  transactions.
                </p>
              </div>

              <Wallet />
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};

export default Home;

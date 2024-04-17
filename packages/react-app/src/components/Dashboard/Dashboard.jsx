import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Load from "../HomeLoader/Load";
import Layout from "../Layout";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [walletAddress, setWalletAddress] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);

  useEffect(() => {
    const walletSaved = localStorage.getItem("walletAddress");
    const walletBal = localStorage.getItem("balanceInEther");
    setWalletAddress(walletSaved);
    setWalletBalance(walletBal);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const hash =
    "8e0ed58015ab93d77b6fbe4a9b003e05c8e24572c6dd73c1bcbf804e31464ecbea7105059e313e65a480e5f8f62c7a5f01dafad68e44fbd6923e4b7b54c2d8ca";
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const fullDate = `${day}/${month}/${year}`;

  return (
    <>
      {loading ? (
        <Load />
      ) : (
        <Layout>
          <section className="dashboard__">
            <nav>
              <p>Wallet Address: {walletAddress}</p>
              <p>Available Balance:{Math.floor(walletBalance).toFixed()} </p>

              <div>
                <Link to="/save-asset" className="--btn --btn-primary">
                  Send
                </Link>
                <Link to="/withdrawal-page" className="--btn --btn-secondary">
                  Withdraw
                </Link>
              </div>
            </nav>

            <div className="txn container">
              <p>Recent Transactions:</p>

              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Txn Hash</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{fullDate}</td>
                      <td>{shortenText(hash, 7)}</td>
                      <td>$100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};

export default Dashboard;

export const shortenText = (text, n) => {
  if (text.length > n) {
    const shoretenedText = text.substring(0, n).concat("...");
    return shoretenedText;
  }
  return text;
};

import React, { useState, useEffect } from "react";
import "./Withdraw.css";

const SaveAsset = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);

  useEffect(() => {
    const walletSaved = localStorage.getItem("walletAddress");
    const walletBal = localStorage.getItem("balanceInEther");
    setWalletAddress(walletSaved);
    setWalletBalance(walletBal);
  }, []);
  return (
    <div className="container">
      <section className="form-container">
        <h1>Save Token</h1>
        <p>Available to save: {walletBalance} </p>
        <p>Wallet Address: {walletAddress} </p>
        <form>
          <div>
            <label htmlFor="">Amount:</label>
            <input type="text" placeholder="Enter amount" />
          </div>
          <div>
            <label htmlFor="">End Day:</label>
            <input type="date" />
          </div>

          <button className="--btn-primary --btn --btn-block">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default SaveAsset;

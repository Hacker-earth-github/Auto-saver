import React from "react";
import "./Withdraw.css";

const WithdrawalPage = () => {
  return (
    <div className="container">
      <section className="form-container">
        <h1>Withdraw Token</h1>
        <p>Balance: </p>
        <form>
          <div>
            <label htmlFor="">To:</label>
            <input type="text" placeholder="input wallet address" />
          </div>
          <div>
            <label htmlFor="">Amount:</label>
            <input type="text" placeholder="Enter amount to be withdrawn" />
          </div>

          <button className="--btn-primary --btn --btn-block">Withdraw</button>
        </form>
      </section>
    </div>
  );
};

export default WithdrawalPage;

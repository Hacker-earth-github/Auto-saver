import React from "react";
import "../Withdrawal/Withdraw.css";

const TokenApproval = () => {
  return (
    <div className="container">
      <section className="form-container">
        <h1>Approve Token</h1>
        <form>
          <div>
            <label htmlFor="">Approve Amount:</label>
            <input type="text" placeholder="Enter amount" />
          </div>

          <button className="--btn-success --btn --btn-block">Approve</button>
        </form>
      </section>
    </div>
  );
};

export default TokenApproval;

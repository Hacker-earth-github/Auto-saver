import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { CiSaveUp1 } from "react-icons/ci";
import "./Dashboard.css";
import BalanceData from "../Balance/BalanceData";

const Dashboard = () => {
  const handleClickWithdraw = () => {
    console.log("Withdraw clicked");
  };

  const handleClickSave = () => {
    console.log("Save clicked");
  };

  return (
    <div className="__container">
      <div className="__balance_page">
        <div className="__balance">
          <BalanceData />
        </div>
        <div className="__save_Withdrawal">
          <div onClick={handleClickWithdraw}>
            <BiMoneyWithdraw size={30} />
            <p>Save</p>
          </div>

          <div onClick={handleClickSave}>
            <CiSaveUp1 size={30} />
            <p>Withdrawal</p>
          </div>
        </div>
      </div>
      <div className="__main_transaction">
        <div className="__transaction">
          <div>
            <h3>06</h3>
            <h3>Jun</h3>
          </div>
          <div className="__transaction_second">
            <div>
              <h3>Church Offering</h3>
              <h3>Successful</h3>
            </div>
            <div>
              <h3>_80.98</h3>
            </div>
          </div>
        </div>

        {/* SECOND TRANSACTION  DELETE LATER*/}
        <div className="__transaction">
          <div>
            <h3>06</h3>
            <h3>Jun</h3>
          </div>
          <div className="__transaction_second">
            <div>
              <h3>Church Offering</h3>
              <h3>Successful</h3>
            </div>
            <div>
              <h3>_80.98</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

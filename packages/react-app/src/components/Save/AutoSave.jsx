import { Link } from "react-router-dom";
import "../Withdrawal/Withdraw.css";

const AutoSave = () => {
    
  return (
    <div className="container">
      <section className="form-container">
        <h1>Auto Save Token</h1>
        <div>
          <Link to="/save-asset" className="--btn --btn-success">Manual</Link>
          <Link to="/auto-save-asset" className="--btn --btn-primary">Automated</Link>
        </div>
        <form>
          <div>
            <label htmlFor="">Deposit Amount:</label>
            <input type="text" placeholder="Enter amount" />
          </div>
          <div>
            <label htmlFor="">Amount To Withdraw:</label>
            <input type="text" placeholder="Enter amount" />
          </div>
          <div>
            <label htmlFor="">Deposit Time:</label>
            <input type="time" />
          </div>
          <div>
            <label htmlFor="">Withdrawal Time:</label>
            <input type="time" />
          </div>

          <button className="--btn-primary --btn --btn-block">Submit</button>
        </form>

        <Link to="/dashboard">Dashboard</Link>
      </section>
    </div>
  );
};

export default AutoSave;

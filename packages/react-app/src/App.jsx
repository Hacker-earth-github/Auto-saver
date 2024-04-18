import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout";
import WithdrawalPage from "./components/Withdrawal/WithdrawalPage";
import WithsrawalSuccess from "./components/Withdrawal/WithsrawalSuccess";
import SaveAsset from "./components/Save/SaveAsset";
import AutoSave from "./components/Save/AutoSave";
import Wallet from "./components/Wallet/Wallet";
import TokenApproval from "./components/TokenApproval/TokenApproval";

function App() {
  return (
    <>
    <Wallet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/withdrawal-page"
          element={
            <Layout>
              <WithdrawalPage />
            </Layout>
          }
        />

        <Route
          path="/save-asset"
          element={
            <Layout>
              <SaveAsset />
            </Layout>
          }
        />
        <Route
          path="/auto-save-asset"
          element={
            <Layout>
              <AutoSave />
            </Layout>
          }
        />
        <Route
          path="/withdrawal-success-page"
          element={<WithsrawalSuccess />}
        />

        <Route
          path="/token-approval"
          element={<TokenApproval />}
        />
      </Routes>
      </Wallet>
    </>
    
  );
}

export default App;

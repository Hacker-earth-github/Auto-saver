import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import WithdrawalPage from "./components/Withdrawal/WithdrawalPage";
import WithsrawalSuccess from "./components/Withdrawal/WithsrawalSuccess";
import SaveAsset from "./components/Withdrawal/SaveAsset";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
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
          path="/withdrawal-success-page"
          element={<WithsrawalSuccess />}
        />
      </Routes>
    </>
  );
}

export default App;

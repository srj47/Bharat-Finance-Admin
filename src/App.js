import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import NavBar from "./Components/NavBar";

// super admin Pages
import SuperAdminDashboard from "./SuperAdmin/SuperAdminDashboard";
import SupportRequests from "./SuperAdmin/SupportRequests";
import ReceivedPayment from "./SuperAdmin/ReceivedPayment";
import DirectWithdrawRequest from "./SuperAdmin/DirectWithdrawRequest";
import AdsViewWithdrawRequest from "./SuperAdmin/AdsViewWithdrawRequest";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/Super-Admin-Dashboard"
          element={
            <>
              <Sidebar />
              <NavBar />
              <SuperAdminDashboard />
            </>
          }
        />
        <Route
          path="/support-request"
          element={
            <>
              <Sidebar />
              <NavBar />
              <SupportRequests />
            </>
          }
        />
        <Route
          path="/Received-Payment"
          element={
            <>
              <Sidebar />
              <NavBar />
              <ReceivedPayment />
            </>
          }
        />
        <Route
          path="/Direct-Withdraw-Request"
          element={
            <>
              <Sidebar />
              <NavBar />
              <DirectWithdrawRequest />
            </>
          }
        />
        <Route
          path="/Ads-View-Withdraw-Request"
          element={
            <>
              <Sidebar />
              <NavBar />
              <AdsViewWithdrawRequest />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

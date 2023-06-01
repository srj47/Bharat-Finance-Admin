import React from "react";
import "../AdminCSS.css";
import { Link } from "react-router-dom";
const SuperAdminDashboard = () => {
  return (
    <div className="AdminContainer">
      {/* <div className="row mx-0 px-0">
        <marquee
          className="bg-dark text-warning p-3"
          direction="left"
          behavior="scroll"
          scrollamount="5"
        >
          आप सभी का जिसने पेआउट रिक्वेस्ट लगाया था उन सभी का पेआउट क्लियर हो
          चूका है | धन्यवाद (Bharat Finance Team)
        </marquee>
      </div> */}
      {/* <div className="row mx-0 p-4">
        <div className="col-sm-12 text-center p-4 border border-warning  ">
          <h3>Admin Details</h3>
          <h5 className="text-warning">MANOJ CHAUHAN</h5>
          <h5 className="text-warning">BH001220</h5>
          <span className="activeTag">Active</span>
          <span className="inactiveTag">Inactive</span>
        </div>
        <div className="col-sm-6"></div>
      </div> */}
      {/* <div className="row mx-0 p-4">
        <div className="col-sm-12 p-4 metalic-color rounded text-light">
          <div className="row mx-0 px-0">
            <div className="col-sm-4 my-3 text-center">
              <Link to="/support-request" className="DashIconBox">
                <i className="bi bi-question-octagon DashIcon "></i>
                <p className="DashIconText">Support Requests</p>
              </Link>
            </div>
            <div className="col-sm-4 my-3 text-center">
              <Link to="#" className="DashIconBox">
                <i className="bi bi-dice-4 DashIcon "></i>
                <p className="DashIconText">Task</p>
              </Link>
            </div>
            <div className="col-sm-4 my-3 text-center">
              <Link to="#" className="DashIconBox">
                <i className="bi bi-coin DashIcon "></i>
                <p className="DashIconText">Pay</p>
              </Link>
            </div>
            <div className="col-sm-4 my-3 text-center">
              <Link to="#" className="DashIconBox">
                <i className="bi bi-wallet2 DashIcon "></i>
                <p className="DashIconText">Payout</p>
              </Link>
            </div>
            <div className="col-sm-4 my-3 text-center">
              <Link to="#" className="DashIconBox">
                <i className="bi bi-tag DashIcon "></i>
                <p className="DashIconText">E-pin</p>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row mx-0 p-3">
        <div className="col-sm-3 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4 h-100 ">
            <h5>Total Received Payment</h5>
            <h1>
              9800 <i className="bi bi-currency-rupee"></i>
            </h1>
          </div>
        </div>
        <div className="col-sm-3 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4 h-100">
            <h5>Balance</h5>
            <h1>
              52100 <i className="bi bi-currency-rupee"></i>
            </h1>
          </div>
        </div>
        <div className="col-sm-3 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4 h-100">
            <h5>No. of Payment received</h5>
            <h1>15</h1>
          </div>
        </div>

        <div className="col-sm-3 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4 h-100">
            <h5>Support Request </h5>
            <h1>21/25</h1>
            <p>Solved/Received</p>
          </div>
        </div>

        <div className="col-sm-3 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4 h-100">
            <h5>Direct Withdraw Request</h5>
            <h1>52/60</h1>
            <p>Completed/Received</p>
          </div>
        </div>
        <div className="col-sm-3 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4 h-100">
            <h5>Ads Withdraw Request</h5>
            <h1>29/32</h1>
            <p>Completed/Received</p>
          </div>
        </div>
        <div className="col-sm-3 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4 h-100">
            <h5>Team Size</h5>
            <h1>110</h1>
          </div>
        </div>
        <div className="col-sm-3 my-3 ">
          <div className="col-sm-12 bg-success text-light rounded p-4 h-100">
            <h5>Rank</h5>
            <h1>10</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;

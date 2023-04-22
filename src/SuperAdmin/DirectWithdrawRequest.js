import React, { useState } from "react";
import { Link } from "react-router-dom";
import paymentImg1 from "../Assets/paymentSS.webp";
const DirectWithdrawRequest = () => {
  const [PaymentStatus, setPaymentStatus] = useState("Unpayed");
  const PaymentStatusBTN = () => {
    setPaymentStatus("Payed");
  };
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Direct Withdraw Request </h2>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User ID </th>
                <th scope="col">Name </th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row px-0 mx-0" className="text-white">
                  1
                </th>
                <td className="text-white">TR44899</td>
                <td className="text-white">Sachin</td>
                <td className="text-white">06-12-2022</td>
                <td className="text-white">8900</td>
                <td className="text-white">{PaymentStatus}</td>
                <td className="text-white">
                  <button className="btn btn-info" onClick={PaymentStatusBTN}>
                    Mark as payed
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DirectWithdrawRequest;

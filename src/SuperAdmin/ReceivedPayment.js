import React from "react";
import { Link } from "react-router-dom";
import paymentImg1 from "../Assets/paymentSS.webp";
const ReceivedPayment = () => {
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Received Payment </h2>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image </th>
                <th scope="col">User ID </th>
                <th scope="col">Name </th>
                <th scope="col">Transaction ID </th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row px-0 mx-0" className="text-white">
                  1
                </th>
                <td className="text-white">
                  <PaymentSlipView />
                </td>
                <td className="text-white">TR44899</td>
                <td className="text-white">Sachin</td>
                <td className="text-white">8754456498</td>
                <td className="text-white">06-12-2022</td>
                <td className="text-white">8900</td>
                <td className="text-white">
                  <button className="btn btn-info">Activate</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReceivedPayment;

const PaymentSlipView = (params) => {
  return (
    <>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-info"
          data-bs-toggle="modal"
          data-bs-target={`#Model-for-${params.paymentId}`}
        >
          View
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id={`Model-for-${params.paymentId}`}
          tabIndex={-1}
          aria-labelledby={`Model-for-${params.paymentId}-Label`}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header text-black">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body text-black text-center">
                <img
                  src={paymentImg1}
                  className="w-auto"
                  height="400px"
                  alt=" ... "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import { OfferData } from "./OfferData";

function Offer() {
  return (
    <div>
      <div className="row">
        {OfferData.map((data, index) => (
          <div className="col-md-4 mt-1" key={index}>
            <div className="card p-4">
              <div className="d-flex justify-content-between">
                <h5>{data.title}</h5>
                <h5 className={`${data.style} rounded-circle p-1`}>
                  {data.icon}
                </h5>
              </div>
              <h1>
                <b>{data.number}</b>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offer;

import React from "react";

export const DataBoxes = ({numberWithCommas, stats}) => {
  return (
    <div className="row g-4">
      {/* Caja #1 */}
      <div className="col-md-6">
        <div
          className="card text-center p-5"
          style={{ backgroundColor: "#dbeafe" }}
        >
          <h3 className="fw-bold mb-4" style={{ color: "#1e3a8a" }}>
            Cases
          </h3>
          <div className="mb-4 fs-4">
            <span className="fw-bold">New:</span>
            {numberWithCommas(stats.NewConfirmed)}
          </div>
          <div className="mb-4 fs-4">
            <span className="fw-bold">Total:</span>
            {numberWithCommas(stats.TotalConfirmed)}
          </div>
        </div>
      </div>

      {/* Caja #2 */}
      <div className="col-md-6">
        <div
          className="card text-center p-5"
          style={{ backgroundColor: "#bfdbfe" }}
        >
          <h3 className="fw-bold mb-4" style={{ color: "#1e3a8a" }}>
            Deaths
          </h3>
          <div className="mb-4 fs-4">
            <span className="fw-bold">New:</span>
            {numberWithCommas(stats.NewDeaths)}
          </div>
          <div className="mb-4 fs-4">
            <span className="fw-bold">Total:</span>
            {numberWithCommas(stats.TotalDeaths)}
          </div>
        </div>
      </div>
    </div>
  );
};

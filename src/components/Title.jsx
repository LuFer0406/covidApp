import React from "react";

export const Title = ({ title, fecha }) => {
  return (
    <div className="text-center">
      <h2 className="fw-bold">{title}</h2>
      <div className="my-4">{fecha}</div>
    </div>
  );
};

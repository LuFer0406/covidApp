import React from "react";

export const CountrySelect = ({onChange, countries, select}) => {
  return (
    <select
      className="my-3 col-12 py-3 border"
      value={select}
      onChange={(e) => onChange(e)}
    >
      <option value="0">Select country</option>
      {countries.map((item) => (
        <option key={item.ID} value={item.ID}>
          {item.Country}
        </option>
      ))}
    </select>
  );
};

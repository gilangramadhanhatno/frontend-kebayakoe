import React, { useState } from "react";
// import DatePicker from "react-datepicker";

import "./index.scss";

export default function SelectBahan(props) {
  const [bahanState, setBahanState] = useState("Pilih Bahan");

  return (
    <select
      className="custom-select"
      value={bahanState}
      onChange={(e) => {
        const selectedBahan = e.target.value;
        setBahanState(selectedBahan);
      }}
    >
      <option value="catton">Catton</option>
      <option value="sifon">Sifon</option>
      <option value="payet">Payet</option>

      {/* {props.data.map((jenisBahan) => {
          return <option value={jenisBahan.bahan}>{jenisBahan.bahan}</option>;
        })} */}
    </select>
  );
}

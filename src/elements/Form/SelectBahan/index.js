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
      <option value="katun">Katun</option>
      <option value="sifon">Sifon</option>
      <option value="payet">Payet</option>
      <option value="voxy">Voxy</option>
      <option value="denim">Denim</option>
      <option value="rajut">Rajut</option>
      <option value="spandeks">Spandeks</option>
      <option value="wedges">Wedges</option>
      <option value="crepe">Crepe</option>
      <option value="twiscone">Twiscone</option>

      {/* {props.data.map((jenisBahan) => {
          return <option value={jenisBahan.bahan}>{jenisBahan.bahan}</option>;
        })} */}
    </select>
  );
}

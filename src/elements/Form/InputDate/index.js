import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "./index.scss";
import "react-datepicker/dist/react-datepicker.css";

import iconCalendar from "assets/images/icons/icon-calendar.svg";

export default function InputDate(props) {
  const { value, placeholder, name } = props;

  const [selectDate, setSelectDate] = useState(new Date());
  //   const [selectDate, setSelectDate] = useState(null);
  const onChange = (selectDate) => {
    setSelectDate(selectDate);
  };

  // const datePickerChange = (value) => {
  //   const target = {
  //     target: {
  //       value: value.selection,
  //       name: name,
  //     },
  //   };
  //   props.onChange(target);
  // };

  return (
    <div className="input-group">
      <div className="input-group-prepend bg-gray-900">
        <span className="input-group-text">
          <img src={iconCalendar} alt="icon calendar" className="input-group-text" />
        </span>
      </div>
      <div className="">
        <DatePicker className=" form-control text-center" selected={selectDate} onChange={onChange} minDate={new Date()} value={setSelectDate} dateFormat="dd/MM/yyyy" placeholder={placeholder} />
      </div>
    </div>
  );
}

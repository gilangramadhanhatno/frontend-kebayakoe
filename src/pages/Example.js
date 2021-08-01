import React, { Component } from "react";

import { InputNumber, InputDate, SelectBahan } from "elements/Form";
// import InputNumber from "elements/Form/InputNumber/InputNumber";
// import InputDate from "elements/Form/InputDate";
// import SelectBahan from "elements/Form/SelectBahan/SelectBahan";

import itemDetails from "json/itemDetails.json";

export default class Example extends Component {
  state = {
    value: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className="col-auto">
            <InputNumber max={1000000000000} onChange={this.handleChange} name="value" value={this.state.value} />
            <InputDate />
            <SelectBahan data={itemDetails.jenisBahan} />
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import propTypes from "prop-types";

import { InputDate, InputNumber, SelectBahan } from "elements/Form";

import Button from "elements/Button";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        buy: 1,
        date: {
          selectDate: new Date(),
          key: "selection",
        },
        selectBahan: "Catton",
      },
    };
    console.log(new Date());
  }

  updateData = (event) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      buy: data.buy,
      date: {
        selectDate: data.date.selectDate,
      },
      selectBahan: data.selectBahan,
    });
    this.props.history.push("/checkout");
  };

  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;

    return (
      <div className="form-booking card bordered" style={{ padding: "60px 80px" }}>
        <h3 className="mb-3">Mulai Pemesanan</h3>
        <h4 className="mt-3">{itemDetails.title}</h4>
        <h5 className="h2 price mb-4 font-weight-bold">
          Rp{itemDetails.price} <span className="font-weight-light">per Baju</span>
        </h5>

        <label htmlFor="selectBahan">Pilih Bahan</label>
        <SelectBahan name="selectBahan" value={data.selectBahan} onChange={this.updateData} />

        <label htmlFor="date" className="mt-2">
          Pilih Tanggal Janji
        </label>
        <InputDate onChange={this.updateData} name="date" value={data.date.selectDate} />

        <label htmlFor="buy" className="mt-2">
          Berapa Baju yang Anda ingin beli?
        </label>
        <InputNumber className="text-center" max={100000000000000} onChange={this.updateData} name="buy" value={data.buy} />

        <h6 className="" style={{ marginBottom: 10 }}>
          Yang Harus Kamu Bayar:
          <p>DP: Rp{itemDetails.price * data.buy * (50 / 100)}</p>
          <p>Bayar Full: Rp{itemDetails.price * data.buy}</p>
        </h6>

        <Button className="btn" onClick={this.startBooking}>
          Lanjutkan Untuk Memesan
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default withRouter(BookingForm);

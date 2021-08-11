import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import Stepper, { Numbering, Meta, MainContent, Controller } from "elements/Stepper";
import Button from "elements/Button";

import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";

import ItemDetails from "json/itemDetails.json";

import { submitBooking } from "store/actions/checkout";

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "KebayaKoe | Checkout";
  }

  _Submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;
    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("email", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("itemId", checkout._id);
    payload.append("buy", checkout.buy);
    payload.append("bookingSelectDate", checkout.date.selectDate);
    payload.append("accountHolder", data.bankHolder);
    payload.append("bankFrom", data.bankName);
    payload.append("image", data.proofPayment[0]);
    // payload.append("bankId", checkout.bankId);

    this.props.submitBooking(payload).then(() => {
      nextStep();
    });
  };

  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;

    if (!checkout)
      return (
        <div className="container">
          <div className="row align-items-center justify-content-center text-center" style={{ height: "100vh" }}>
            <div className="col-3">
              Pilih Design Pakaian Dulu
              <div>
                <Button className="btn mt-5" type="button" onClick={() => this.props.history.goBack()} isPrimary>
                  Kembali
                </Button>
              </div>
            </div>
          </div>
        </div>
      );

    const steps = {
      bookingInformation: {
        title: "Informasi Pemesanan",
        description: "Silahkan isi kolom kosong di bawah ini",
        content: <BookingInformation data={data} checkout={checkout} ItemDetails={page[checkout._id]} onChange={this.onChange} />,
      },
      payment: {
        title: "Pembayaran",
        description: "Silakan ikuti petunjuk di bawah ini",
        content: <Payment data={data} checkout={checkout} ItemDetails={page[checkout._id]} onChange={this.onChange} />,
      },
      completed: {
        title: "Yeay, Selesai",
        description: null,
        content: <Completed />,
      },
    };
    return (
      <>
        <Header isCentered />
        <Stepper steps={steps} initialStep="bookingInformation">
          {(prevStep, nextStep, CurrentStep, steps) => {
            return (
              <>
                <Numbering data={steps} current={CurrentStep} style={{ marginBottom: 50 }} />

                <Meta data={steps} current={CurrentStep} />

                <MainContent data={steps} current={CurrentStep} />

                {CurrentStep === "bookingInformation" && (
                  <Controller>
                    {data.firstName !== "" && data.lastName !== "" && data.email !== "" && data.phone !== "" && (
                      <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                        Lanjutkan untuk Memesan
                      </Button>
                    )}
                    <Button className="btn" type="button" isBlock isLight onClick={() => this.props.history.goBack()}>
                      Batal
                    </Button>
                  </Controller>
                )}

                {CurrentStep === "payment" && (
                  <Controller>
                    {data.proofPayment !== "" && data.bankName !== "" && data.bankHolder !== "" && (
                      <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={() => this._Submit(nextStep)}>
                        Lanjutkan untuk Memesan
                      </Button>
                    )}
                    <Button className="btn" type="button" isBlock isLight onClick={prevStep}>
                      Batal
                    </Button>
                  </Controller>
                )}

                {CurrentStep === "completed" && (
                  <Controller>
                    <Button className="btn" type="link" isBlock isPrimary hasShadow href="">
                      Kembali ke halaman Home
                    </Button>
                  </Controller>
                )}
              </>
            );
          }}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});

export default connect(mapStateToProps, { submitBooking })(Checkout);

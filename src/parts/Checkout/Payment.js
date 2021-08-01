import React from "react";

import { InputFile, InputText } from "elements/Form";

import logoBCA from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const dp = 50;
  const subTotal = ItemDetails.price * checkout.buy;
  const grandTotal = (dp / 100) * subTotal;

  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-5 py-5" style={{ paddingRight: 80 }}>
          <p className="mb-4">Transfer Pembayaran:</p>
          <p>Dp: {dp}%</p>
          <p>Sub Total: ${subTotal} USD</p>
          <p>Total: {grandTotal} USD</p>
          <div className="row mt-4">
            <div className="col-3 text-right">
              <img src={logoBCA} alt="bank central asia" width="60" />
            </div>
            <div className="col">
              <dl>
                <dd>Bank Central Asia</dd>
                <dd>1301 1999</dd>
                <dd>Setiawan</dd>
              </dl>
            </div>
          </div>

          <div className="row">
            <div className="col-3 text-right">
              <img src={logoMandiri} alt="bank central asia" width="60" />
            </div>
            <div className="col">
              <dl>
                <dd>Bank Mandiri</dd>
                <dd>1301 1999</dd>
                <dd>Setiawan</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
          <label htmlFor="proofPayment">Upload Bukti Transfer</label>
          <InputFile accept="image/*" id="proofPayment" name="proofPayment" value={data.proofPayment} onChange={props.onChange} />

          <label htmlFor="bankName">Asal Bank</label>
          <InputText id="bankName" name="bankName" type="text" value={data.bankName} onChange={props.onChange} />

          <label htmlFor="bankHolder">Nama Pengirim</label>
          <InputText id="bankHolder" name="bankHolder" type="text" value={data.bankHolder} onChange={props.onChange} />
        </div>
      </div>
    </div>
  );
}

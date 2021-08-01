import React from "react";

import { InputText } from "elements/Form";

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;

  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
          <div className="card card-bordered">
            <figure className="img-wrapper" style={{ height: 540 }}>
              <img className="img-cover" src={`${process.env.REACT_APP_HOST}/${ItemDetails.imageId[0].imageUrl}`} alt={ItemDetails.name} />
            </figure>
            <div className="row align-items-center">
              <div className="col">
                <div className="meta-wraper">
                  <h4>{ItemDetails.name}</h4>
                  <span className="text-gray-700">${ItemDetails.price}</span>
                </div>
              </div>
              <div className="col-auto">
                {/* <h5 className="text-gray-700">{ItemDetails.jenisBahan[0].bahan}</h5> */}
                <span className="text-gray-900">${+checkout.buy * ItemDetails.price} USD</span>
              </div>
              {/* <div className="col text-center">Geblek</div> */}
            </div>
          </div>
        </div>

        <div className="col-5 py-5" style={{ paddingRight: 80 }}>
          <label htmlFor="firstName">First Name</label>
          <InputText id="firstName" name="firstName" value={data.firstName} onChange={props.onChange} />

          <label htmlFor="lastName">Last Name</label>
          <InputText id="lastName" name="lastName" value={data.lastName} onChange={props.onChange} />

          <label htmlFor="email">Email Address</label>
          <InputText id="email" name="email" type="email" value={data.email} onChange={props.onChange} />

          <label htmlFor="phone">Phone Number</label>
          <InputText id="phone" name="phone" type="tel" value={data.phone} onChange={props.onChange} />
        </div>
      </div>
    </div>
  );
}

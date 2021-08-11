import React from "react";
import CompletedIllustration from "assets/images/completed.jpg";

export default function Completed() {
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center text-center">
        <div className="col-4">
          <img src={CompletedIllustration} alt="completed checkout clothing" className="img-fluid" />
          <p className="text-gray-500">Kami akan menginformasikan melalui email nanti setelah transaksi diterima</p>
        </div>
      </div>
    </div>
  );
}

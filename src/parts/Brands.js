import React from "react";

import "assets/scss/style.scss";

export default function Brands(props) {
  return (
    <section className="container">
      <div className="container-grid">
        {props.data.map((brand, index) => {
          return (
            <div key={`brand-${index}`} className="brand item column-3 mt-5">
              <img src={`${process.env.REACT_APP_HOST}/${brand.imageUrl}`} alt={brand.name} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

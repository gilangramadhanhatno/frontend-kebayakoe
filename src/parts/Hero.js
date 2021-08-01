import React from "react";

import ImageHero from "assets/images/hero-image.jpg";
import Button from "elements/Button";

export default function Hero(props) {
  function showProduct() {
    window.scrollTo({
      top: props.refProduct.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="hero-section">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <img src={ImageHero} alt="" className="hero hero-left" />
        </div>
        <div className="col-lg-7">
          <div className="hero hero-right">
            <h1 className="line-height-1">
              New Fashion <br />
              Trends
            </h1>
            <p>
              With our variety of styles.Fabrics and trims, let us help <br />
              you design a one-of-a-kind outfit
            </p>
            <Button className="btn" onClick={showProduct}>
              Get It Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

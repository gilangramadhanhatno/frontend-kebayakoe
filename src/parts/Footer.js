import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <p className="brand-tagline">for every business, marketing and advertising plays an important role.</p>
          </div>
          <div className="col mr-5">
            <h6 className="mt-2">Explore</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/">
                  Home
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Featured
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Subscribe
                </Button>
              </li>
            </ul>
          </div>

          <div className="col mr-5">
            <h6 className="mt-2">Our Service</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/pricing">
                  Pricing
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/free-shipping">
                  Free Shipping
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/gift-card">
                  Gift Card
                </Button>
              </li>
            </ul>
          </div>

          <div className="col">
            <h6 className="mt-2">Contact Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/tel:+6281210657874">
                  0877 - 3629 - 0538
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/mailto:kebayakoe@gmail.com">
                  kebayakoe@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <span>Jln. Bintaro Utama 3A No.11 Pd Karya Kec. Pondok Aren Tangerang Selatan, Banten, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row ">
          <div className="col text-center copyrights">© Gilang Ramadhan Hatno 2021 copyright all right reserved</div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import BrandIcon from "parts/IconText";
import Button from "elements/Button";

import LogoKebayaKoe from "assets/images/logo-kebayakoe-removebg.png";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered) {
    return (
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Button className="brand-text-icon mx-auto" href="/" type="link">
              <img src={LogoKebayaKoe} alt="" />
            </Button>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <BrandIcon />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <ul className="navbar-nav">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/product")}`}>
                  <Button className="nav-link" type="link" href="/product">
                    Product
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by">
                    Browse By
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

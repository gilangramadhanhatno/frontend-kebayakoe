import React from "react";
import Button from "elements/Button";

import LogoKebayaKoe from "assets/images/logo-kebayakoe-removebg.png";

export default function IconText() {
  return (
    <Button className="brand-text-icon" href="/" type="link">
      <img src={LogoKebayaKoe} alt="" />
    </Button>
  );
}

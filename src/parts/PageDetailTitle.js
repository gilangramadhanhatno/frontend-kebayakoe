import React from "react";

import Breadcrumb from "elements/Breadcrumb";

export default function PageDetailTitle({ breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <div className="row mt-2">
        <div className="col">
          <Breadcrumb data={breadcrumb} />
        </div>
      </div>
    </section>
  );
}

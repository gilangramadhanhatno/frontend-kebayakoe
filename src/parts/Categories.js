import React from "react";
import Button from "elements/Button";

import "assets/scss/style.scss";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;
    return (
      <section className="container" key={`category-${index1}`}>
        <h4 className="mb-3 title-category">{category.name}</h4>
        <div className="category container-grid">
          {category.itemId.map((item, index2) => {
            return (
              <div key={`category-${index1}-item-${index2}`} className="item column-3 row-1">
                <Button type="link" href={`/details/${item._id}`}>
                  <div className="card-featured">
                    <figure className="img-wrapper">
                      <img src={item.imageId[0] ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}` : ""} alt={item.name} className="img-contain" />
                    </figure>
                  </div>
                </Button>
                <div className="meta-wrapper text-center mt-3">
                  <Button type="link" className="d-block text-white" href={`/details/${item._id}`}>
                    <h5>{item.title}</h5>
                    <p>${item.price}</p>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  });
}

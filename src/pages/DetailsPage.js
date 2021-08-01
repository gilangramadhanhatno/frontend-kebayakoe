import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedDetails from "parts/FeaturedDetails";
import BookingForm from "parts/BookingForm";
import Footer from "parts/Footer";

import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id]) this.props.fetchPage(`/detail-page/${this.props.match.params.id}`, this.props.match.params.id);
  }

  render() {
    const { page, match } = this.props;
    if (!page[match.params.id]) return null;

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Details", pageHref: "" },
    ];

    return (
      <>
        <Header isCentered {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} />
        <section className="container">
          <div className="row">
            <div className="col-7">
              <FeaturedDetails data={page[match.params.id]} />
            </div>
            <div className="col">
              <BookingForm itemDetails={page[match.params.id]} startBooking={this.props.checkoutBooking} />
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(DetailsPage);

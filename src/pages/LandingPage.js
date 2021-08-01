import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import Hero from "parts/Hero";
import Categories from "parts/Categories";
import Brands from "parts/Brands";
import Footer from "parts/Footer";

import { fetchPage } from "store/actions/page";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refProduct = React.createRef();
  }

  componentDidMount() {
    window.title = "GRH | Home";
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage) this.props.fetchPage(`/landing-page`, "landingPage");
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage")) return null;

    return (
      <>
        <Header {...this.props} />
        <Hero refProduct={this.refProduct} />
        <Categories refProduct={this.refProduct} data={page.landingPage.category} />
        <Brands data={page.landingPage.brand} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);

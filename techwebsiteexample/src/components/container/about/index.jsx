/* eslint-disable no-undef */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { paymentSubmitted } from "../../../redux/actions/paymentActions";

class About extends React.PureComponent {
  payNow = () => {
    localStorage.setItem("paid", "paid");

    //The value you add here for new Stripe() depends on the environment if
    //you are in testing you will find this value in Home section of Stripe under Get you test API keys
    //for test you will use example pk_test_DJK45KJDF409FLKJDFLKJHIJL455
    //for production you will go to Get your live API keys pk_live_DJK45KJDF409FLKJDFLKJHIJL455
    var stripe = new Stripe("");
    stripe
      .redirectToCheckout({
        lineItems: [
          {
            price: "", // Replace with the Price ID after creating a product in Stripe for example price_23KDFDFDF23dF
            quantity: 1,
          },
        ],
        mode: "payment",
        successUrl: "", //This is the url where the user will be redirected when the payment is successfull
        cancelUrl: "", //This is the url where the user will be redirected to when the payment fails
      })
      .then((result) => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
  };
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 order-lg-1">
            <div className="p-5">
              <h2 className="display-4 alignMessage">Who are we?</h2>
              <p className="alignMessage">
                We are a tech startup that sells software to business owners
                before developing websites, apps, or hiring developers to save
                you money, instead of hiring a recruiter and spending $20,000 in
                a recruiter fee and $100,000 or more in a developer, an
                experienced developer at Apple has written a template for you
                with everything you need to make your website or app a reality
                saving you money.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-12 order-lg-1">
            <div className="p-5">
              <h2 className="display-4 alignMessage">
                What will you get in return?
              </h2>
              <p className="alignMessage">
                You will get a template for a website in React JS and Redux,
                this also is connected to Firebase a cloud environment used by
                tech companies such as Alibaba or Lyft in order for you to get
                your company in a cloud environment faster, an exact copy of
                this website in React and Redux connected to Stripe to process
                payments, a template with APIs in Node JS, and an application in
                React Native for iOS and Android to be able to develop something
                from scratch, the application will be ready for you to sell a
                product focused in user experience. The website, app templates,
                and API templates you will receive will be created from a
                developer at Apple Inc. All of the code is valued at $250,000 or
                more.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-12 order-lg-1">
            <div className="p-5">
              <h2 className="display-4 alignMessage">How much do we charge?</h2>
              <p className="alignMessage">
                We charge only $1000 per bundle, a developer from Apple is in
                charge of developing this software.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 order-lg-1">
            <div className="p-5">
              <h2
                className="display-4"
                style={{ textAlign: "center", fontSize: "1.5rem" }}
              >
                Buy a bundle today! You will be able to download all the
                software once we receive your payment. We recommend you to be in
                a desktop or laptop to process payment and download software.
                This will make it easier for you to see and download your code
                faster.
              </h2>
              <div
                className="col-lg-12 order-lg-1"
                style={{ textAlign: "center" }}
              >
                <button
                  type="button"
                  className="btn btn-primary help-button"
                  onClick={this.payNow}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitPayment: bindActionCreators(paymentSubmitted, dispatch),
  };
}
export default withRouter(connect(null, mapDispatchToProps)(About));

import React from "react";
import Lottie from "react-lottie";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Success extends React.Component {
  state = { isStopped: false, isPaused: false };

  downloadReceipt = () => {
    var opt = {
      filename: "receipt.pdf",
    };
    var element = document.getElementById("element-to-print");
    window.html2pdf(element, opt);
  };

  render() {
    const isPaid = localStorage.getItem("paid");

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: require("./paymentsuccess.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div style={{ textAlign: "center" }}>
        <Lottie
          options={defaultOptions}
          height={350}
          width={350}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <button
          type="button"
          className="btn btn-primary download-button"
          onClick={this.downloadReceipt}
        >
          Download Receipt
        </button>

        {/* eslint-disable-next-line */}
        <a
          href={isPaid !== null ? "" : null}
          download
          style={{ color: "white", textDecoration: "none" }}
        >
          <button
            type="button"
            className="btn btn-primary download-button"
            style={{ marginLeft: "0.5rem" }}
          >
            Download Code
          </button>
        </a>
        <h2
          className="display-4 alignMessage"
          id="element-to-print"
          style={{ fontSize: "1.8rem" }}
        >
          Your payment for $1000 was successfully processed! React, Redux and
          Firebase Website Template + React Native (iOS and Android) Template +
          Node JS API template, you can download all your software by clicking
          download software above. It will be a zip file, remember to click on
          it twice and you should see all your code. It was minified in a zip
          file to make it faster to download.
        </h2>
        <p className="alignMessage">
          Thank you for your purchase, you will receive your receipt in your
          email shortly!
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isPaid: state.paymentReducer.isPaid,
  };
}

export default withRouter(connect(mapStateToProps, null)(Success));

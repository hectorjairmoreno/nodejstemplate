import React from "react";
import Lottie from "react-lottie";
import { withRouter } from "react-router-dom";

export class Error extends React.Component {
  state = { isStopped: false, isPaused: false };

  relocate = () => {
    window.location.href = "/";
  };

  componentDidMount() {
    setTimeout(() => {
      this.relocate();
    }, 10000);
  }

  componentWillUnmount() {
    clearTimeout(this.relocate);
  }

  render() {
    localStorage.removeItem("paid");

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: require("./paymentfailed.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={350}
          width={350}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <h2 className="display-4 alignMessage">
          There was an issue with your payment
        </h2>
        <p className="alignMessage">
          We were unable to process your payment, you will be redirected to the
          main site in a few seconds. Please try again.
        </p>
      </div>
    );
  }
}

export default withRouter(Error);

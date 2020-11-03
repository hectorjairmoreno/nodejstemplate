import React from "react";
import Header from "../../presentational/header";
import Footer from "../../presentational/footer";
import About from "../../presentational/about";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  render() {
    localStorage.removeItem("paid");
    return (
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Home);

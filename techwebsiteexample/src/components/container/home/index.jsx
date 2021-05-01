import React from "react";
import { withRouter } from "react-router-dom";

import Header from "../../presentational/header";
import Footer from "../../presentational/footer";
import About from "../about";

class Home extends React.PureComponent {
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

import React from "react";

export default function Header() {
  return (
    <header className="masthead text-center text-white">
      <div className="masthead-content">
        <div className="container">
          <h1 className="masthead-heading mb-0">
            Let us sell you code that will generate revenue for your company.
          </h1>
          <h2 className="masthead-subheading mb-0">
            Scroll down to find out how.
          </h2>
          {/* <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a> */}
        </div>
      </div>
      <div className="bg-circle-1 bg-circle" />
      <div className="bg-circle-2 bg-circle" />
      <div className="bg-circle-3 bg-circle" />
      <div className="bg-circle-4 bg-circle" />
    </header>
  );
}

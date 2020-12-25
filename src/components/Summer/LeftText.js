import React from "react";

function LeftText() {
  return (
    <div className="wrapper-div">
      <div className="left-text-div">
        <span className="subtitle"> UNC Summer of Code</span>
        <a
          className="anchors"
          href="https://resumedatabase.cs.unc.edu"
          style={{ textDecoration: "none" }}
        >
          <h4 className="title">UNC Computer Science Resume Database</h4>
        </a>
        <p className="p-description">
          The UNC CS Resume Database is used by the Department of Computer
          Science and their corporate partners, allowing recruiters to easily
          query students that match a given job requirement, making the
          recruiting process easier in a post-Covid19 world.
        </p>
      </div>
    </div>
  );
}

export default LeftText;

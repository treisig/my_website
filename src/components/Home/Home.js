import React from "react";
import Header from "./Header";
import WelcomeText from "./WelcomeText";
import SvgDiv from "./SvgDiv";

function Home() {
  return (
    <div className="home-div" id="home">
      <Header />
      <WelcomeText />
      {/* <SvgDiv /> */}
    </div>
  );
}

export default Home;

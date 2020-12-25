import React from "react";
import SingleProject from "./SingleProject";

function Projects() {
  const qrInfo = [
    `Our final project supports local restaurants after COVID-19 by allowing customers an easier way of requesting services while dining in and an easy to use management system for the employees. Many people feel unsafe dining during COVID19, but our app was designed to create a safe and enjoyable dining experience by limiting physical contact and provides an easy to interface for both the employees and customers to interact with.`,
    "https://restaurantqr-73126.web.app",
    "restaurantQR",
  ];

  const twitterClone = [
    `Designed and implemented a mock Twitter web app. Built from scratch using React and Bootstrap. Important features include tweeting, retweeting, commenting, editing personal tweets, deleting personal tweets, and infinite scrolling.`,
    "https://github.com/treisig/Twitter-Clone",
    "Twitter Clone",
  ];

  const $2048 = [
    `Designed and implemented my own version of 2048, starting from scratch, using javascript for game logic and jQuery for easy DOM manipulation. 2048 is fully playable in the browser, and features a simple but pleasurable UI.`,
    "https://github.com/treisig/2048-game",
    "2048",
  ];

  const college = [
    "Created a HackNC project, built in less than 24 hours, that allows prospective students to filter colleges based on certain attributes. College-Finder was my and my partner's first hackathon, so we used this as a learning experience and made a fun Halloween UI themed website that can help students find their best college!",
    "https://github.com/treisig/College-Finder",
    "College Finder",
  ];

  return (
    <div className="projs-outer-div" id="projects">
      <SingleProject
        pic={"./assets/qr_pic.png"}
        pic_class={"qr"}
        desc={qrInfo[0]}
        title={qrInfo[1]}
        subtitle={qrInfo[2]}
        two={"./assets/restaurant_home.png"}
      />
      {/* <SingleProject
        pic={"./assets/qr_pic.png"}
        pic_class={"qr"}
        desc={twitterClone[0]}
        title={twitterClone[1]}
        subtitle={twitterClone[2]}
      /> */}
      <SingleProject
        pic={"./assets/2048.png"}
        // pic_class={"qr"}
        desc={$2048[0]}
        title={$2048[1]}
        subtitle={$2048[2]}
        right={true}
      />
      <SingleProject
        pic={"./assets/college-finder.png"}
        // pic_class={"qr"}
        desc={college[0]}
        title={college[1]}
        subtitle={college[2]}
      />
    </div>
  );
}

export default Projects;

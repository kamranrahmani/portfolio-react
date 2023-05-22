import React from "react";
import Header from "../GlobalComponents/Header";
import Menu from "../GlobalComponents/Menu";
import PortfolioItem from "./PortfolioSubComponents/PortfolioItem";

function Portfolio() {
  return (
    <div>
      <Header
        backTitle={"WORKS"}
        frontTitleWhite={"MY"}
        frontTitleYellow={"PORTFOLIO"}
      />
      <Menu />
      <div className="grid grid-cols-3 gap-8 mt-32 w-4/5 mx-auto">
        <PortfolioItem languages={'React, Next, Tailwind'} src={'../assets/images/Privitamin.jpeg'} title={'Privitamin'}/>

        <PortfolioItem languages={'React, Next, Tailwind'} src={'../assets/images/Nodemon.jpeg'} title={'Nodemon'}/>

        <PortfolioItem languages={'React, Tailwind'} src={'../assets/images/portfolio.png'} title={'Portfolio'}/>

        <PortfolioItem
          src={"../../assets/images/audiophile.jpg"}
          title={"Audio Ecommerce"}
          languages={"HTML, CSS, JAVASCRIPT"}
          
        />
        <PortfolioItem
          src={"../../assets/images/Entertainment.png"}
          title={"Entertainment"}
          languages={"HTML, CSS, JAVASCRIPT"}
        />
      </div>
    </div>
  );
}

export default Portfolio;

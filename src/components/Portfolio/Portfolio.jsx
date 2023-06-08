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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32 w-4/5 mx-auto">
        <PortfolioItem languages={'React, Node, Tailwind'} src={'../assets/images/Perla.png'} title={'Perla'} address={'goperla.com'}/>

        <PortfolioItem languages={'React, Node, Tailwind'} src={'../assets/images/Privitamin.jpeg'} title={'Privitamin'} address={'privitamin.com'}/>

        <PortfolioItem languages={'React, Next, Tailwind'} src={'../assets/images/Nodemon.jpeg'} title={'Nodemon'}/>
      </div>
    </div>
  );
}

export default Portfolio;

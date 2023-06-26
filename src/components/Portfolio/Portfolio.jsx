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

        <PortfolioItem languages={'HTML, Tailwind, JS, Node.js, Express.js'} src={'../assets/images/AE.png'} title={'Audio Ecommerce'} address={'audioecommerce.herokuapp.com'}/>

        <PortfolioItem languages={'HTML, Tailwind, JS, Node.js, Express.js'} src={'../assets/images/CD.png'} title={'Car Dealership'} address={'cardealership.herokuapp.com'}/>
      </div>
    </div>
  );
}

export default Portfolio;

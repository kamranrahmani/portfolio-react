import React from "react";
import LinkItem from "./LinkItem";
import { FaHome, FaUser, FaMailBulk, FaBriefcase } from "react-icons/fa";

function Menu() {
  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 w-36 space-y-8">
      <LinkItem
        route="/"
        title={"Home"}
        icon={<FaHome style={{ fontSize: "20px", color: "white" }} />}
      />
      <LinkItem
        route="/about"
        title={"About"}
        icon={<FaUser style={{ fontSize: "20px", color: "white" }} />}
      />
      <LinkItem
        route="/portfolio"
        title={"Portfolio"}
        icon={<FaBriefcase style={{ fontSize: "20px", color: "white" }} />}
      />
      <LinkItem
        route="/contact"
        title={"Contact"}
        icon={<FaMailBulk style={{ fontSize: "20px", color: "white" }} />}
      />
    </div>
  );
}

export default Menu;

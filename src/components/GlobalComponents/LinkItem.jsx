import React from "react";
import { NavLink } from "react-router-dom";
import "./LinkItem.css";

function LinkItem({ icon, title, route }) {

  return (
    <NavLink className={({isActive}) => (isActive ? 'link-item active' : 'link-item') } datatype={title} to={route}>
      <div className={'flex items-center justify-center rounded-full z-10 w-12 h-12 bg-white/10'}>
        {icon}
      </div>
    </NavLink>
  );
}

export default LinkItem;

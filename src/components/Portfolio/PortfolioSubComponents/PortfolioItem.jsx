import React, { useState } from "react";
import { motion } from "framer-motion";
import ItemOverlay from "./ItemOverlay";

function PortfolioItem({ src, title, languages }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [itemDetails, setItemDetails] = useState(false);

  const changeShowOverlay = () => {
    setShowOverlay(true);
  };

  const hideOverlay = () => {
    setShowOverlay(false);
  };

  const toggleItemDetails = () => {
    setItemDetails(prev => !prev);
  };

  return (
    <div>
      <div
        onMouseOver={changeShowOverlay}
        onMouseOut={hideOverlay}
        className="relative h-52 w-full rounded-lg overflow-hidden"
      >
        <img src={src} alt="" className="w-full h-full object-cover" />
        {showOverlay && (
          <button
            onClick={toggleItemDetails}
            className="absolute w-full h-full top-0 left-0 bg-yellow-500 rounded-lg text-xl text-white uppercase"
          >
            {title}
          </button>
        )}
      </div>
      {itemDetails && <ItemOverlay src={src} onClick={toggleItemDetails} title={title} languages={languages}/>}
    </div>
  );
}

export default PortfolioItem;

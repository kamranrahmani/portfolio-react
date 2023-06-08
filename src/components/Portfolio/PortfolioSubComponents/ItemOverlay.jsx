import React from "react";

function ItemOverlay({title, languages, src,address, onClick}) {
  return (
    <>
    <div className="absolute w-full h-full top-0 left-0 bg-black/20 z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-8 bg-zinc-800 h-4/5 w-full md:w-3/5 lg:w-2/5 z-20">
        <h1 className="text-yellow-500 text-3xl font-bold text-center mb-6">{title}</h1>
        <div className="grid grid-cols-2 gap-4 mb-4">
            <p className="text-white">languages : {languages}</p>
            <a className="text-yellow-500" href={`https://${address}`}>{address}</a>
        </div>
        <img src={src} alt=""  className="h-[70%] w-full object-fit"/>
      </div>

      <button onClick={onClick} className="absolute top-6 right-6 w-12 h-12 z-20">
        <p className="w-8 h-px bg-white rotate-45"></p>
        <p className="w-8 h-px bg-white -rotate-45 text-white"></p>
      </button>
    </>
  );
}

export default ItemOverlay;

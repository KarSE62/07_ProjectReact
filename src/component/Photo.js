import React from "react";

const Photo = ({ img }) => {
  return (
    <div className="card h-96 card-bordered card-compact lg:card-normal container mx-auto border-4 divide-y divide-slate-400">
      <figure>
        <img src={img} />
      </figure>
    </div>
  );
};

export default Photo;

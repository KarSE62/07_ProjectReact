import React from "react";

const Photo = ({ img }) => {

  return (
    <div className="card card-bordered">
      <div className="card card-bordered card-compact lg:card-normal container mx-auto border-4 divide-y divide-slate-400">
          <div className="relative  ">
          </div>
          <figure>
            <img src={img} />
          </figure>
        </div>
    </div>
  );
};

export default Photo;

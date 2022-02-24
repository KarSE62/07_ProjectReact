import React from "react";
// มีการรับ props ค่าต่างๆมา
const Photo = ({ img }) => {
  return (
    // นำค่า props ไปจัดวางในทีๆต้องการ
    <div className="card h-96 card-bordered card-compact lg:card-normal container mx-auto border-4 divide-y divide-slate-400">
      <figure>
        <img src={img} />
      </figure>
    </div>
  );
};

export default Photo;

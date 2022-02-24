import React from "react";
// import Link จาก react-router-dom
import { Link } from "react-router-dom";
// มีการรับ props
function Posts({ profile_image, username, img, likes, description }) {
  return (
    // นำค่า props ไปจัดวางในทีๆต้องการ
    <div className="mb-8">
      <>
        <div className="card w-1/3 card-bordered card-compact lg:card-normal container mx-auto border-4 divide-y divide-slate-400">
          <div className="relative  ">
            {/* กำหนด path เมื่อมีการคลิก tag ภายใน link และเซต path /Profile/ props ของ username */}
            <Link to={`/Profile/${username}`}>
              <div className="avatar m-3">
                <div className="rounded-full w-10 h-10 ring  ring-offset-base-100 ring-offset-2 my-1.5">
                  <img src={profile_image} />
                </div>
                <p className="ml-4 mt-2 text-base font-medium">{username}</p>
              </div>
            </Link>
          </div>
          <figure>
            <img src={img} />
          </figure>
          <div className="card-body">
            <div className="mt-5">
              <div className="absolute left-7 bottom-24 flex">
                <div className=" text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className="text-primary ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>

              <h5 className="card-title">{likes} likes</h5>
              <p>
                <strong>{username}</strong> {description}
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Posts;

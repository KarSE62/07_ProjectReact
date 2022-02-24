import React from "react";
// มีการรับ props ค่าต่างๆมา
const Profile = ({
  profile_image,
  username,
  total_photos,
  total_likes,
  total_collections,
  location,
  instagram,
}) => {
  return (
    // นำค่า props ไปจัดวางในทีๆต้องการ
    <div>
      <div className="grid grid-cols-4">
        <div></div>
        <div className="avatar">
          <div className="mb-8 rounded-full w-44 h-44 ring ring-primary ring-offset-base-100 ring-offset-2  container mx-auto">
            <img src={profile_image} />
          </div>
        </div>
        <div>
          <p className="text-3xl font-medium"> {username}</p>
          <div className="grid grid-cols-3 my-5">
            <p>{total_photos} โพสต์</p>
            <p>คอลแล็คชั่น {total_collections} </p>
            <p>จำนวนไลค์ {total_likes}</p>
          </div>
          <p className="font-normal"> Username :{username}</p>
          <p>
            <i className="fa-solid fa-location-dot my-4" />
            &nbsp;{location}
          </p>
          <p>
            <i className="fa-solid fa-earth-americas" />
            &nbsp;{instagram}
          </p>
          <p className="font-bold mt-5 mb-3">Interests</p>
          <div className="flex mb-10">
            <div className="bg-zinc-200 mr-2">
              <p className="mx-2">Background</p>
            </div>
            <div className="bg-zinc-200 mr-2">
              <p className="mx-2">Color</p>
            </div>
            <div className="bg-zinc-200 mr-2">
              <p className="mx-2">Plant</p>
            </div>
            <div className="bg-zinc-200 mr-2">
              <p className="mx-2">Mountain</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="grid grid-cols-5">
          <div></div>
          <div className="border border-indigo-600 border-gray-300" />
          <div className="border border-indigo-600 border-gray-300" />
          <div className="border border-indigo-600 border-gray-300" />
          <div></div>
        </div>
        <div className="grid grid-cols-11">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="mr-10 my-3">
            <p>
              <i className="fa-solid fa-image" />
              &nbsp;Photos&nbsp;{total_photos}
            </p>
          </div>
          <div className="mr-10 my-3">
            <p>
              <i className="fa-solid fa-heart" />
              &nbsp;Likes&nbsp;{total_likes} 
            </p>
          </div>
          <div className="mr-10 my-3">
            <p>
              <i className="fa-solid fa-bookmark" />
              &nbsp;Collections&nbsp;{total_collections} 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
